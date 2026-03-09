import { dateTypePolicy } from "@/lib/date-type-policy";

export const scalarTypePolicies = {
  Activity: { fields: { createdAt: dateTypePolicy, occurredAt: dateTypePolicy } },
  Address: { fields: { createdAt: dateTypePolicy } },
  ContactInfo: { fields: { createdAt: dateTypePolicy } },
  ImportantDate: { fields: { date: dateTypePolicy } },
  Interaction: { fields: { occurredAt: dateTypePolicy } },
  Person: { fields: { createdAt: dateTypePolicy, firstMetDate: dateTypePolicy, updatedAt: dateTypePolicy } },
  Task: { fields: { completedAt: dateTypePolicy, createdAt: dateTypePolicy, dueAt: dateTypePolicy } },
};
