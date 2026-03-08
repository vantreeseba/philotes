import { useQuery } from '@apollo/client';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';
import { graphql } from '@/__generated__/gql.js';

const GET_NETWORK_DATA = graphql(`
  query GetNetworkData {
    persons {
      id
      firstName
      lastName
      email
      avatarPath
      labels {
        id
        label
        color
      }
      relationshipsFrom {
        id
        toPersonId
        type
      }
    }
  }
`);

export const Route = createFileRoute('/network')({
  component: NetworkPage,
});

// djb2 hash → hsl color
function nameToColor(name: string): string {
  let hash = 5381;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 33) ^ name.charCodeAt(i);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 60%, 55%)`;
}

type PersonLabel = {
  id: string;
  label: string;
  color: string;
};

type RelationshipFrom = {
  id: string;
  toPersonId: string;
  type: string;
};

type PersonNode = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarPath?: string | null;
  labels: PersonLabel[];
  relationshipsFrom: RelationshipFrom[];
};

type SimNode = d3.SimulationNodeDatum & PersonNode;

type SimLink = d3.SimulationLinkDatum<SimNode> & {
  type: string;
};

type TooltipState = {
  x: number;
  y: number;
  person: PersonNode;
} | null;

type EdgeLabelState = {
  x: number;
  y: number;
  type: string;
} | null;

function getNodeRadius(connections: number): number {
  const min = 20;
  const max = 40;
  const clamped = Math.min(connections, 10);
  return min + ((max - min) * clamped) / 10;
}

function getInitials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

function NetworkPage() {
  const navigate = useNavigate();
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState>(null);
  const [edgeLabel, setEdgeLabel] = useState<EdgeLabelState>(null);

  const { data, loading, error } = useQuery(GET_NETWORK_DATA);

  useEffect(() => {
    if (!data?.persons || !svgRef.current) return;

    const persons = data.persons as PersonNode[];

    if (persons.length === 0) return;

    const svgEl = svgRef.current;
    const width = svgEl.clientWidth || 1000;
    const height = svgEl.clientHeight || 700;

    // Build connection count map
    const connectionCount = new Map<string, number>();
    for (const p of persons) {
      if (!connectionCount.has(p.id)) connectionCount.set(p.id, 0);
      for (const rel of p.relationshipsFrom) {
        connectionCount.set(p.id, (connectionCount.get(p.id) ?? 0) + 1);
        connectionCount.set(rel.toPersonId, (connectionCount.get(rel.toPersonId) ?? 0) + 1);
      }
    }

    const nodes: SimNode[] = persons.map((p) => ({ ...p }));
    const nodeIndex = new Map<string, SimNode>(nodes.map((n) => [n.id, n]));

    const links: SimLink[] = [];
    const seenEdges = new Set<string>();
    for (const p of persons) {
      for (const rel of p.relationshipsFrom) {
        const edgeKey = [p.id, rel.toPersonId].sort().join('--');
        if (!seenEdges.has(edgeKey) && nodeIndex.has(rel.toPersonId)) {
          seenEdges.add(edgeKey);
          links.push({
            source: p.id,
            target: rel.toPersonId,
            type: rel.type,
          });
        }
      }
    }

    // Clear previous render
    d3.select(svgEl).selectAll('*').remove();

    const svg = d3.select(svgEl).attr('width', width).attr('height', height);

    const simulation = d3
      .forceSimulation<SimNode>(nodes)
      .force(
        'link',
        d3
          .forceLink<SimNode, SimLink>(links)
          .id((d) => d.id)
          .strength(0.3),
      )
      .force('charge', d3.forceManyBody<SimNode>().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force(
        'collide',
        d3.forceCollide<SimNode>((d) => getNodeRadius(connectionCount.get(d.id) ?? 0) + 10).strength(0.8),
      );

    // Draw edges
    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll<SVGLineElement, SimLink>('line')
      .data(links)
      .join('line')
      .attr('stroke', '#cbd5e1')
      .attr('stroke-width', 1.5)
      .style('cursor', 'default')
      .on('mouseenter', (event: MouseEvent, d: SimLink) => {
        setEdgeLabel({
          x: event.clientX,
          y: event.clientY,
          type: d.type,
        });
      })
      .on('mousemove', (event: MouseEvent) => {
        setEdgeLabel((prev) => (prev ? { ...prev, x: event.clientX, y: event.clientY } : prev));
      })
      .on('mouseleave', () => {
        setEdgeLabel(null);
      });

    // Draw nodes
    const nodeGroup = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll<SVGGElement, SimNode>('g')
      .data(nodes)
      .join('g')
      .style('cursor', 'pointer')
      .on('click', (_event: MouseEvent, d: SimNode) => {
        void navigate({ to: '/persons/$id', params: { id: d.id } });
      })
      .on('mouseenter', (event: MouseEvent, d: SimNode) => {
        setTooltip({ x: event.clientX, y: event.clientY, person: d });
      })
      .on('mousemove', (event: MouseEvent) => {
        setTooltip((prev) => (prev ? { ...prev, x: event.clientX, y: event.clientY } : prev));
      })
      .on('mouseleave', () => {
        setTooltip(null);
      });

    // Apply drag
    const drag = d3
      .drag<SVGGElement, SimNode>()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    nodeGroup.call(drag);

    // Circle
    nodeGroup
      .append('circle')
      .attr('r', (d) => getNodeRadius(connectionCount.get(d.id) ?? 0))
      .attr('fill', (d) => {
        if (d.labels && d.labels.length > 0) {
          return d.labels[0].color;
        }
        return nameToColor(`${d.firstName} ${d.lastName}`);
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    // Initials text
    nodeGroup
      .append('text')
      .text((d) => getInitials(d.firstName, d.lastName))
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('fill', '#fff')
      .attr('font-size', (d) => {
        const r = getNodeRadius(connectionCount.get(d.id) ?? 0);
        return `${Math.floor(r * 0.6)}px`;
      })
      .attr('pointer-events', 'none');

    // Tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d) => (d.source as SimNode).x ?? 0)
        .attr('y1', (d) => (d.source as SimNode).y ?? 0)
        .attr('x2', (d) => (d.target as SimNode).x ?? 0)
        .attr('y2', (d) => (d.target as SimNode).y ?? 0);

      nodeGroup.attr('transform', (d) => `translate(${d.x ?? 0},${d.y ?? 0})`);
    });

    return () => {
      simulation.stop();
    };
  }, [data, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Loading network...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-destructive">Error: {error.message}</p>;
  }

  const persons = data?.persons ?? [];

  if (persons.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">No contacts yet.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ height: '80vh' }}>
      <svg ref={svgRef} className="w-full h-full" style={{ display: 'block' }} />

      {/* Edge label tooltip */}
      {edgeLabel && (
        <div
          className="fixed z-50 pointer-events-none bg-popover border border-border rounded px-2 py-1 text-xs shadow-md text-popover-foreground"
          style={{ left: edgeLabel.x + 12, top: edgeLabel.y - 8 }}
        >
          {edgeLabel.type}
        </div>
      )}

      {/* Node tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none bg-popover border border-border rounded-lg px-3 py-2 shadow-lg text-popover-foreground min-w-40"
          style={{ left: tooltip.x + 16, top: tooltip.y - 8 }}
        >
          <p className="font-semibold text-sm">
            {tooltip.person.firstName} {tooltip.person.lastName}
          </p>
          {tooltip.person.email && <p className="text-xs text-muted-foreground mt-0.5">{tooltip.person.email}</p>}
          {tooltip.person.labels && tooltip.person.labels.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1.5">
              {tooltip.person.labels.map((lbl) => (
                <span
                  key={lbl.id}
                  className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium text-white"
                  style={{ backgroundColor: lbl.color }}
                >
                  {lbl.label}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
