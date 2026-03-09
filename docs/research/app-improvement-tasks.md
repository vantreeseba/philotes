# Philotes — App Improvement Tasks

> **Research basis:** This task list is derived from peer-reviewed research on
> relationship science, social psychology, and wellbeing. The core finding
> across all research streams is that relationship quality is the single
> strongest predictor of long-term happiness and health (Waldinger & Schulz,
> 2023), and that most people underinvest in relationships not from indifference
> but from lack of systems and prompts. A well-designed personal CRM directly
> addresses the cognitive and behavioral barriers that cause relationship decay.
> Tasks are prioritized by expected impact on the core user goal: helping people
> maintain and deepen the relationships that matter most.

---

## Priority & Size Definitions

| Badge | Meaning |
|-------|---------|
| **P0** | Critical foundation — other high-value features depend on this |
| **P1** | High value — direct, well-evidenced impact on core use case |
| **P2** | Medium value — meaningful improvement, not a blocker |
| **P3** | Nice to have — valuable when the foundation is solid |
| **S** | Small — 1–2 days |
| **M** | Medium — 3–5 days |
| **L** | Large — 1–2 weeks |

---

## Section 1: Contact Tracking & "Last Contacted" (Foundation)

The absence of contact is the first sign of relationship decay (Christakis &
Fowler, 2009). Without a contact log, no other relationship health feature can
function. This section builds the data foundation for most downstream features.

---

### Task 1 — Contact / Interaction Log

**Priority:** P0 &nbsp; **Size:** M

**Description:**  
Add an `interactions` table with fields: `id`, `personId`, `date`, `type`
(enum: `in_person`, `video_call`, `phone_call`, `text`, `email`, `other`), and
an optional `notes` field. Every contact event with a person can be logged here.
Display "last contacted" date (and modality) per person on both the person list
and the detail view. Allow logging an interaction from the person detail page.

**Research Rationale:**  
Hall (2019) demonstrated that without deliberate maintenance, friendships decay
predictably once contact drops below a threshold of hours together. Stafford &
Canary (1991) identified five behavioral strategies that maintain relationships —
all require knowing when you last engaged. The contact log is the minimal data
structure needed to make the rest of the app aware of relationship recency.

---

### Task 2 — "Neglected Relationships" / Overdue Contacts View

**Priority:** P1 &nbsp; **Size:** M

**Description:**  
Based on a person's relationship tier (see Task 3) and their last logged
interaction, surface contacts who are overdue for contact. Present these as a
dashboard section or dedicated view: "You haven't spoken to these people in a
while," sorted by how overdue they are. Show the last interaction date and
the person's name and tier.

**Research Rationale:**  
Liu et al. (2023) found that people dramatically underestimate how much others
appreciate being contacted — especially out of the blue. The barrier to reaching
out is psychological, not logistical; a visible "overdue" list removes the
cognitive overhead of deciding who to contact. Dunbar's tier model provides
scientifically grounded contact-frequency thresholds by relationship depth.

---

## Section 2: Relationship Tiers & Prioritization

Dunbar's social brain hypothesis (1993, 2021) establishes that humans have a
finite cognitive budget. The research-backed insight is not that we should have
fewer relationships, but that we should allocate attention proportionally to
relationship depth. A tier system operationalizes this.

---

### Task 3 — Relationship Tier Field on Persons

**Priority:** P1 &nbsp; **Size:** S

**Description:**  
Add a `tier` field to the `persons` table (enum: `intimate`, `close`, `active`,
`acquaintance`). Display tier as a visual badge on the person list and detail
view. Allow filtering and sorting the person list by tier. Show the default
recommended contact cadence for each tier as a tooltip or label (e.g., intimate
= weekly+, close = monthly, active = quarterly, acquaintance = 1–2x/year).

**Research Rationale:**  
Dunbar (1993, 2021) identified nested social layers of approximately 5, 15, 50,
and 150 people, each requiring different investment levels. Granovetter (1973)
showed that even the outermost tier (acquaintances) has outsized value for
information and opportunity — the tier field enables the CRM to treat all tiers
as worth maintaining, just at different frequencies.

---

### Task 4 — Suggested Contact Cadence per Person

**Priority:** P1 &nbsp; **Size:** S

**Description:**  
Allow setting a custom contact frequency per person (options: `weekly`,
`monthly`, `quarterly`, `yearly`, `as_needed`). Pre-populate with the tier
default (from Task 3), but allow override. Use this cadence — combined with the
last interaction date from Task 1 — as the "overdue" detection threshold for
Task 2 and Task 20.

**Research Rationale:**  
Hall (2019) found that good friends require ~90 hours together and close friends
~200+ hours to maintain their tier. Stafford & Canary (1991) showed that
stopping maintenance behaviors predicts measurable relationship decline.
Per-person cadence gives users finer control than tier alone, reflecting that
real relationships don't all fit neatly in tiers.

---

## Section 3: Upcoming Dates Dashboard

Temporal landmarks trigger receptivity to outreach (Dai et al., 2014). The
research is unambiguous: people are more likely to respond positively to contact
around meaningful dates, and recognizing milestones signals care in a way that
generic contact does not. Critically, this value requires *advance notice* — the
date itself is too late to act meaningfully.

---

### Task 5 — Upcoming Important Dates Dashboard / View

**Priority:** P0 &nbsp; **Size:** S

**Description:**  
A dedicated view (or prominent dashboard section) listing all upcoming important
dates — both birthdays from `persons.birthdate` and named dates from the
`importantDates` table — within a configurable window (30, 60, or 90 days).
Each entry shows: person name, date name, days until date, and a quick-link to
the person detail page. Sort by soonest first. Allow filtering by window size.

**Research Rationale:**  
Dai et al. (2014) demonstrated the "fresh start effect" — people are
significantly more receptive to new beginnings, acts of connection, and outreach
around temporal landmarks such as birthdays and anniversaries. Amabile & Kramer
(2011) found that recognizing milestones significantly boosts relationship
quality. The advance window is essential: contact on the day is table stakes;
a thoughtful message or gesture delivered *before* or *with* preparation is what
signals genuine investment.

---

### Task 6 — Birthday Advance Alerts

**Priority:** P0 &nbsp; **Size:** S

**Description:**  
Birthdays from `persons.birthdate` should surface prominently in the upcoming
dates view (Task 5) with a configurable advance notice window (default: 7 days
before). Add a "coming up this week" and "coming up this month" grouping.
Display age-turning (if birthdate year is stored) alongside the name and date.
Ensure birthdays repeat annually rather than appearing only once.

**Research Rationale:**  
Birthdays are among the clearest examples of temporal landmarks (Dai et al.,
2014). Reis & Shaver (1988) established that feeling *remembered and understood*
is the core subjective experience of intimacy — receiving a birthday
acknowledgment from someone who clearly planned ahead is direct evidence of
being remembered. The advance window enables a gift, a handwritten message, or
a planned call rather than a last-minute text.

---

## Section 4: Enriched Notes & Follow-up Tracking

Risko & Gilbert (2016) showed that external memory systems extend effective
cognitive capacity and relationship-maintenance ability. The "callback effect" —
following up on things someone mentioned previously — is one of the
highest-impact relationship behaviors precisely because it is rare and signals
genuine attention. Notes are only valuable if they are structured, accessible,
and surfaced at the right moments.

---

### Task 7 — Follow-up Items / Action Items on Notes

**Priority:** P1 &nbsp; **Size:** M

**Description:**  
Allow marking any note (or a flagged excerpt within a note) as a follow-up item.
Add a `followUps` table or a boolean + resolution field on the existing `notes`
table. Surface outstanding follow-up items: (a) per person on their detail page,
and (b) in a global "open follow-ups" view. Allow marking a follow-up as
resolved. Show resolved follow-ups in a collapsed/archived state.

**Research Rationale:**  
The "callback effect" (documented in Reis & Shaver, 1988 on responsiveness; and
in CRM research by Peppers & Rogers, 1993) identifies following up on previously
mentioned information as uniquely powerful — it demonstrates listening, memory,
and investment simultaneously. Risko & Gilbert (2016) showed that the benefit of
external memory systems is precisely that they *remove the cognitive load* of
remembering, freeing attention for the actual interaction.

---

### Task 8 — Note Categories / Tags

**Priority:** P2 &nbsp; **Size:** S

**Description:**  
Allow notes to be tagged with one or more categories (e.g., `health`, `career`,
`family`, `interest`, `life_update`, `follow_up`, `gratitude`). Tags can be
predefined or user-defined. Enable filtering notes by tag on the person detail
page. This makes it possible to surface context before reaching out ("what do I
know about their career situation?") without reading all notes.

**Research Rationale:**  
Personalized outreach (referencing specifics from past conversations) is
dramatically more effective than generic contact (Chen et al., 2010; Liu et al.,
2023). Structured tags make relevant context retrievable rather than buried in
chronological notes. Risko & Gilbert (2016) note that the value of external
memory is maximized when retrieval is fast — categorization directly enables
this.

---

### Task 9 — Link Interactions to Notes ("Conversation Log")

**Priority:** P2 &nbsp; **Size:** M

**Description:**  
When logging an interaction (Task 1), optionally attach one or more notes from
that conversation. This creates a structured timeline: "On March 3rd, we had a
phone call. Notes: she mentioned a job interview next week." Per person, surface
this as a "conversation history" view — chronological interactions with attached
notes expanded below each entry.

**Research Rationale:**  
Pillemer (2001) found that specific, autobiographical shared memories are
particularly powerful triggers for reconnection and deepening relationships.
The conversation log operationalizes this: rather than a flat pile of notes, the
user has a *narrative* of the relationship. This also makes the "callback effect"
more actionable — the previous conversation's notes surface naturally the next
time you log an interaction with that person.

---

## Section 5: Gratitude Features

Seligman et al. (2005) found that writing and delivering a gratitude letter
produced the single largest effect size of any positive psychology intervention
tested — and effects persisted for weeks. Algoe (2012) showed that gratitude
"finds, reminds, and binds" — it strengthens relationships for both the giver
and the receiver. Despite this, gratitude is consistently underperformed: most
people feel it but never express it.

---

### Task 10 — Gratitude Notes / "What I Appreciate About Them"

**Priority:** P2 &nbsp; **Size:** S

**Description:**  
Add a dedicated section per person for capturing things you're grateful for
about them. This can be implemented as a special note category (`gratitude`) or
a lightweight separate panel on the person detail page. Display these separately
from operational notes — they are meant for reflection, not action. Optionally,
show a count of gratitude notes as a subtle reminder of relationship richness.

**Research Rationale:**  
Algoe's "find, remind, bind" model (2012) positions gratitude as a relational
function: gratitude *reminds* us of the value of existing relationships. Gordon
et al. (2012) found that expressed gratitude predicts relationship maintenance
and commitment over time. A dedicated, visible gratitude space creates a
low-friction path to what Seligman et al. (2005) identified as the
highest-leverage interpersonal intervention.

---

### Task 11 — Gratitude Prompt / Reminder

**Priority:** P3 &nbsp; **Size:** S

**Description:**  
Periodically surface a gentle prompt: "You haven't expressed gratitude to
[person] recently — here's what you've noted about them." Link directly to
their gratitude notes (Task 10) and their contact history. Cadence should be
configurable and unobtrusive — this is a nudge, not a nag. Could appear as a
highlighted card on the dashboard for one person at a time.

**Research Rationale:**  
Seligman et al. (2005) showed that the gratitude letter intervention is
dramatically underperformed in daily life — people feel grateful but don't act
on it. Liu et al. (2023) demonstrated that the same gap exists for outreach
generally: the ROI of expressing appreciation is high but the activation energy
is overestimated. A targeted prompt reduces that activation energy to near zero.

---

## Section 6: Acts of Kindness Tracking

Nelson et al. (2016) found that acts of kindness for others boost the *giver's*
wellbeing more than self-focused positive activities. Ko et al. (2021) found that
even *recalling* past acts of kindness boosts wellbeing. Tracking kindness serves
two purposes: it provides context for relationship-maintenance behavior (gifts,
favors, introductions), and it creates a record of positive acts the user can
reflect on.

---

### Task 12 — Kindness / Gestures Log per Person

**Priority:** P2 &nbsp; **Size:** S

**Description:**  
Track acts of kindness given and received per person: date, description,
direction (`gave` / `received`), and an optional category (gift, favor,
introduction, support). Surface these on the person detail page as a simple
log. Could be a lightweight sub-table (`kindness_gestures`) or a special note
category. Include a global view of recent kindness acts across all relationships.

**Research Rationale:**  
Nelson et al. (2016) found prosocial acts boost giver wellbeing beyond
self-focused activities. Ko et al. (2021) showed that recalling past kindness
also boosts wellbeing — making a log doubly valuable. Dunn, Aknin & Norton
(2008) confirmed the effect of giving-to-others on happiness across 136
countries. The log also surfaces reciprocity patterns: users can notice if a
relationship has become one-sided.

---

### Task 13 — Gift Ideas per Person

**Priority:** P3 &nbsp; **Size:** S

**Description:**  
A lightweight place to capture gift ideas, wishlist items, or things someone
mentioned wanting ("she mentioned she's been wanting to try that new cookbook").
Display these on the person detail page and surface them when that person has an
upcoming date (Task 5). Could be a special note tag (`gift_idea`) or a minimal
dedicated section.

**Research Rationale:**  
Temporal landmarks (Dai et al., 2014) and milestone recognition (Amabile &
Kramer, 2011) create moments where a thoughtful, personalized gesture has
amplified impact. The challenge is that the *insight* ("she mentioned that book")
happens weeks before the *moment* (her birthday). A gift-idea capture bridges
this gap — turning a passing observation into a future relationship asset.

---

## Section 7: Relationship Health & Insights

Waldinger & Schulz (2023) coined the term "social fitness" — the ongoing,
active maintenance of relationships as a practice comparable to physical fitness.
A health dashboard operationalizes this metaphor: it gives users a
lightweight, honest view of where their relationship investments are and where
they are atrophying.

---

### Task 14 — Relationship Health Dashboard

**Priority:** P1 &nbsp; **Size:** L

**Description:**  
An overview dashboard showing: (a) relationships overdue for contact by tier,
(b) upcoming dates in the next 30 days, (c) total interactions logged over the
past 30/90/365 days, (d) distribution of logged contacts across tiers (are
you spending time where it matters?), and (e) open follow-up items. The goal is
a "social fitness" scorecard that is honest without being anxiety-inducing.
Design for insight, not gamification.

**Research Rationale:**  
Waldinger & Schulz (2023) use the "social fitness" framing explicitly: just as
physical health requires ongoing active investment, so does relationship health.
Dunbar's tier frequencies provide the normative benchmarks. Hall (2019) decay
curves show that inaction has predictable costs. Making the current state visible
is a prerequisite for intentional action — this dashboard is the weekly review
for one's relationship life.

---

### Task 15 — Last Modality Tracking on Interactions

**Priority:** P2 &nbsp; **Size:** S

**Description:**  
Extend the person list and detail view to show not just "last contacted" but
"last contacted by modality" — i.e., when was the last in-person visit, last
video call, last phone call. For high-tier relationships (intimate, close),
surface a prompt if the last *high-quality* contact (in-person or video) was
more than a threshold ago even if lower-quality contact (text) was recent.

**Research Rationale:**  
Vlahovic, Roberts & Dunbar (2012) established a clear hierarchy of contact
modality: face-to-face is most effective for endorphin release and relationship
maintenance, followed by video, phone, then text. A relationship "maintained"
entirely by text messages over a year is not in the same state as one with
regular calls. Tracking modality separately surfaces this distinction and prompts
users to upgrade the quality of contact for their most important relationships.

---

## Section 8: Quick Capture & Frictionless Use

Risko & Gilbert (2016) found that external memory systems are only used when
friction is near-zero. A CRM that requires navigating to a person's page,
scrolling to a notes section, and filling out a form will be abandoned. The
behaviors this app is designed to support happen in brief windows — right after
a conversation ends, in a transit moment, on a phone call's last minute.

---

### Task 16 — Quick Note / Interaction Capture from Person List

**Priority:** P1 &nbsp; **Size:** S

**Description:**  
Add a quick-capture affordance on each person row in the person list: a single
button or gesture that opens a minimal modal allowing the user to log an
interaction (date, type, optional note) without navigating to the full person
detail page. The modal should be completable in under 10 seconds for the common
case (log a call, no notes). Dismiss and return to the list on save.

**Research Rationale:**  
Risko & Gilbert (2016) — cognitive offloading is only effective when capturing
is faster than the cost of not capturing. If logging a 5-minute phone call
requires 8 clicks, users will stop logging. Liu et al. (2023) showed that
*having* reasons to reach out (follow-ups, upcoming dates) depends on having
logged *past* interactions — the entire system's utility degrades without
fast capture. Every second of friction reduces adoption.

---

### Task 17 — Person Search and Filtering Improvements

**Priority:** P1 &nbsp; **Size:** S

**Description:**  
Add full-text search by name across the person list. Add filter controls for:
tier, label, overdue contact (based on tier cadence from Tasks 3–4), and
"upcoming date this month." Allow combining filters. Sort options: alphabetical,
last contacted (ascending/descending), tier, upcoming date. Persist the last
used filter state across sessions.

**Research Rationale:**  
All relationship health features (overdue detection, upcoming dates, follow-ups)
are only actionable if users can efficiently navigate to the right people. Search
and filtering are the usability foundation on which Tasks 2, 5, 14, and 20 rest.
Without this, a growing contact list becomes a cognitive burden rather than a
relationship asset.

---

## Section 9: Shared Context / Relationship History

Pillemer (2001) found that specific, shared autobiographical memories are among
the most powerful triggers for reconnection and deepening intimacy. The research
on responsiveness (Reis & Shaver, 1988) shows that feeling known and remembered
is the experiential core of close relationships. A relationship history view
makes that accumulated context visible and accessible.

---

### Task 18 — Relationship Timeline View

**Priority:** P2 &nbsp; **Size:** M

**Description:**  
Per person, show a chronological timeline combining: interactions logged (with
attached notes), notes added, important dates that occurred, kindness gestures
(if Task 12 is implemented), and follow-up items created and resolved. Presented
as a vertical timeline in reverse-chronological order. This is the "story of
this relationship" — useful both for reviewing history before reaching out and
for appreciating the depth of a connection.

**Research Rationale:**  
Pillemer (2001) showed that autobiographical shared memories are powerful for
reconnection. The "callback effect" requires knowing what was discussed
previously — a timeline makes this navigable at a glance. Reis & Shaver (1988)
showed that responsiveness (demonstrating knowledge of someone's life) is the
primary mechanism of intimacy; the timeline is the data structure that enables
responsiveness at scale.

---

### Task 19 — Shared Connections / Mutual Friends

**Priority:** P3 &nbsp; **Size:** L

**Description:**  
Allow linking two persons in the CRM as "connected" (they know each other), with
an optional relationship type (introduced through, met at event, colleagues, etc.)
and who made the introduction. Surface shared connections on the person detail
page: "Also knows: [name]." Enable searching for paths between contacts
("who do I know who knows [person]?").

**Research Rationale:**  
Stafford & Canary's (1991) "social networking" maintenance strategy — spending
time with shared friends and extended networks — is one of five behaviors
that predict relationship quality. Putnam (2000) distinguished bridging capital
(connections across different social clusters) as uniquely valuable. Granovetter
(1973) showed that weak-tie bridges between clusters drive information flow and
opportunity. Mapping connections makes the social network structure visible and
enables intentional bridging.

---

## Section 10: Reach-Out Prompts & Motivation

The core behavioral barrier this section addresses is identified in Liu et al.
(2023): people consistently underestimate how appreciated outreach is, especially
to people they haven't contacted in a while. The perceived awkwardness of
reaching out is reliably higher than the actual experience of either party.
Prompts and briefing tools convert intention into action.

---

### Task 20 — "Reach Out" Suggestions

**Priority:** P1 &nbsp; **Size:** M

**Description:**  
Proactively surface reach-out suggestions based on: (a) overdue contact by tier
cadence, (b) upcoming dates for the person or people they care about, (c) open
follow-up items that are time-sensitive. Each suggestion shows: person name,
reason for the prompt ("It's been 3 months — they mentioned job hunting last
time"), last interaction date, and relevant context from notes. Allow
dismissing or snoozing a suggestion.

**Research Rationale:**  
Liu et al. (2023) found that people underestimate by a significant margin how
positively others experience unexpected outreach. Granovetter (1973) showed that
weak ties require active maintenance or they dissolve — a prompt converts the
abstract intention to maintain a weak tie into a concrete action. Stafford &
Canary (1991) identified positivity and assurance as key maintenance behaviors;
a contextual prompt enables both by surfacing *why* to reach out and *what* to
say.

---

### Task 21 — "Pre-Contact Brief" / What's Going On in Their Life

**Priority:** P2 &nbsp; **Size:** S

**Description:**  
On the person detail page (or as a dedicated "prepare to reach out" panel),
surface a compiled brief: last interaction date and modality, recent notes
(last 3–5), upcoming dates for this person, open follow-up items, and any
gratitude notes. This is a 10-second "briefing page" before picking up the
phone or drafting a message. Optionally, trigger this view when dismissing an
overdue contact prompt (Task 20).

**Research Rationale:**  
The "callback effect" (Reis & Shaver, 1988; Peppers & Rogers, 1993) depends on
having relevant context *at the moment of contact*. Personalization research
(Chen et al., 2010; Liu et al., 2023) shows that even minor personalization
("I saw this and thought of you — how did that interview go?") dramatically
outperforms generic outreach. The brief solves the "I know there was something
important, but I can't remember what" problem — the single largest friction
point between intention to reach out and actually doing it well.

---

## Summary Table

| # | Task | Section | Priority | Size |
|---|------|---------|----------|------|
| 1 | Contact / Interaction Log | Contact Tracking | **P0** | M |
| 5 | Upcoming Important Dates Dashboard | Upcoming Dates | **P0** | S |
| 6 | Birthday Advance Alerts | Upcoming Dates | **P0** | S |
| 2 | Neglected Relationships / Overdue View | Contact Tracking | **P1** | M |
| 3 | Relationship Tier Field on Persons | Tiers & Prioritization | **P1** | S |
| 4 | Suggested Contact Cadence per Person | Tiers & Prioritization | **P1** | S |
| 7 | Follow-up Items on Notes | Enriched Notes | **P1** | M |
| 14 | Relationship Health Dashboard | Health & Insights | **P1** | L |
| 16 | Quick Note / Interaction Capture | Quick Capture | **P1** | S |
| 17 | Person Search and Filtering | Quick Capture | **P1** | S |
| 20 | "Reach Out" Suggestions | Reach-Out Prompts | **P1** | M |
| 8 | Note Categories / Tags | Enriched Notes | **P2** | S |
| 9 | Link Interactions to Notes | Enriched Notes | **P2** | M |
| 10 | Gratitude Notes Section | Gratitude | **P2** | S |
| 12 | Kindness / Gestures Log | Acts of Kindness | **P2** | S |
| 15 | Last Modality Tracking | Health & Insights | **P2** | S |
| 18 | Relationship Timeline View | Relationship History | **P2** | M |
| 21 | Pre-Contact Brief | Reach-Out Prompts | **P2** | S |
| 11 | Gratitude Prompt / Reminder | Gratitude | **P3** | S |
| 13 | Gift Ideas per Person | Acts of Kindness | **P3** | S |
| 19 | Shared Connections / Mutual Friends | Relationship History | **P3** | L |

---

## Recommended Build Order

Given the dependencies between features, the following sequencing is suggested:

**Phase 1 — Foundation (P0, enables everything else)**
1. Task 1: Contact / Interaction Log *(all health features depend on this)*
2. Task 5: Upcoming Dates Dashboard
3. Task 6: Birthday Advance Alerts

**Phase 2 — Core Value (P1 with no blockers)**
4. Task 3: Relationship Tier Field *(small, unlocks Tasks 2, 4, 14)*
5. Task 4: Suggested Contact Cadence *(builds on Task 3)*
6. Task 17: Search & Filtering *(usability foundation)*
7. Task 16: Quick Capture from List *(requires Task 1)*
8. Task 2: Overdue Contacts View *(requires Tasks 1, 3, 4)*
9. Task 7: Follow-up Items on Notes
10. Task 20: Reach-Out Suggestions *(requires Tasks 1–4, 7)*

**Phase 3 — Depth (P1 dashboard + P2 enrichment)**
11. Task 14: Relationship Health Dashboard *(requires Tasks 1–4, 7)*
12. Task 9: Link Interactions to Notes *(requires Task 1)*
13. Task 8: Note Categories / Tags
14. Task 10: Gratitude Notes
15. Task 15: Last Modality Tracking *(requires Task 1)*
16. Task 21: Pre-Contact Brief *(requires Tasks 1, 7, 8, 10)*
17. Task 12: Kindness / Gestures Log
18. Task 18: Relationship Timeline *(requires Tasks 1, 7, 9, 12)*

**Phase 4 — Polish (P3)**
19. Task 11: Gratitude Reminder
20. Task 13: Gift Ideas
21. Task 19: Shared Connections

---

## Research Citations

| Author(s) | Year | Work |
|-----------|------|------|
| Waldinger & Schulz | 2023 | *The Good Life* (Harvard Study of Adult Development) |
| Dunbar | 1993, 2021 | Dunbar's Number / Social Brain Hypothesis |
| Hall | 2019 | Friendship formation and maintenance hours |
| Stafford & Canary | 1991 | Relationship Maintenance Behaviors |
| Granovetter | 1973 | "The Strength of Weak Ties" |
| Liu et al. | 2023 | Undervalued Maintenance of Social Connections |
| Vlahovic, Roberts & Dunbar | 2012 | Contact modality and relationship strength |
| Reis & Shaver | 1988 | Intimacy theory / responsiveness |
| Risko & Gilbert | 2016 | Cognitive Offloading |
| Pillemer | 2001 | Autobiographical memory and social bonding |
| Dai et al. | 2014 | Fresh Start Effect / Temporal Landmarks |
| Amabile & Kramer | 2011 | *The Progress Principle* / Milestone Recognition |
| Seligman et al. | 2005 | Gratitude Letter Intervention |
| Algoe | 2012 | "Find, Remind, Bind" Model of Gratitude |
| Gordon et al. | 2012 | Expressed gratitude and relationship maintenance |
| Nelson et al. | 2016 | Acts of kindness and wellbeing |
| Ko et al. | 2021 | Recalling past kindness and wellbeing |
| Lyubomirsky et al. | 2005 | Concentrated acts of kindness and happiness |
| Cacioppo | 2008 | *Loneliness* |
| Christakis & Fowler | 2009 | *Connected* |
| Peppers & Rogers | 1993 | CRM and relationship quality outcomes |
| Chen et al. | 2010 | Interest matching and communication warmth |
| Putnam | 2000 | Bridging capital / *Bowling Alone* |
