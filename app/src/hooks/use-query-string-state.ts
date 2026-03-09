import { useRouter, useRouterState } from '@tanstack/react-router';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type HistoryChangeType = 'replace' | 'push';

/** Maps keys of T to a coercion hint so values can be typed on read. */
type TypeMap<T extends object> = {
  [K in keyof T]?: 'number' | 'string' | 'boolean' | 'stringArray';
};

interface UseQueryStringStateOptions<T extends object> {
  typeMap?: TypeMap<T>;
}

// ---------------------------------------------------------------------------
// Serialisation helpers
// ---------------------------------------------------------------------------

/**
 * Parses a raw search string (e.g. `"?q=foo&page=1&labels=a,b"`) into a
 * `Partial<T>`, coercing values according to the optional `typeMap`.
 */
export function parseSearch<T extends object>(search: string, typeMap?: TypeMap<T>): Partial<T> {
  const params = new URLSearchParams(search);
  const result: Record<string, unknown> = {};

  for (const [key, rawValue] of params.entries()) {
    const hint = typeMap?.[key as keyof T];

    if (hint === 'number') {
      result[key] = Number(rawValue);
    } else if (hint === 'boolean') {
      result[key] = rawValue === 'true';
    } else if (hint === 'stringArray') {
      result[key] = rawValue === '' ? [] : rawValue.split(',').filter((s) => s.length > 0);
    } else {
      result[key] = rawValue;
    }
  }

  return result as Partial<T>;
}

/**
 * Serialises a state object to a query string with a leading `?`, or `""` if
 * there is nothing to serialise.
 *
 * - Arrays are joined with `,`; empty arrays are omitted
 * - `undefined`, `null`, and empty strings are omitted
 */
export function stringifyState(state: Record<string, unknown>): string {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(state)) {
    if (value === undefined || value === null || value === '') continue;

    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      params.set(key, value.join(','));
    } else {
      params.set(key, String(value));
    }
  }

  const qs = params.toString();
  return qs ? `?${qs}` : '';
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * Syncs a plain-object state with the URL query string using TanStack Router.
 *
 * Returns the current parsed state (merged over `defaultState`) and a setter
 * that navigates to the updated search string.
 */
export function useQueryStringState<T extends object>(
  defaultState: Partial<T> = {},
  options?: UseQueryStringStateOptions<T>,
): [T, (newState: Partial<T>, historyChangeType?: HistoryChangeType) => void] {
  const router = useRouter();
  const searchStr = useRouterState({
    select: (s) => s.location.searchStr,
  });
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const parsed = parseSearch<T>(searchStr, options?.typeMap);
  const state = { ...defaultState, ...parsed } as T;

  const setState = (newState: Partial<T>, historyChangeType: HistoryChangeType = 'replace') => {
    const merged = {
      ...(state as Record<string, unknown>),
      ...(newState as Record<string, unknown>),
    };
    const newSearch = stringifyState(merged);
    const newPath = `${pathname}${newSearch}`;

    if (historyChangeType === 'replace') {
      router.history.replace(newPath);
    } else {
      router.history.push(newPath);
    }
  };

  return [state, setState];
}
