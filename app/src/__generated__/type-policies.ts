import { dateTimeTypePolicy, dateTypePolicy } from "@/lib/date-type-policy";

export const scalarTypePolicies = {
  Activity: { fields: { createdAt: dateTimeTypePolicy, occurredAt: dateTimeTypePolicy } },
  Address: { fields: { createdAt: dateTimeTypePolicy } },
  ContactInfo: { fields: { createdAt: dateTimeTypePolicy } },
  ImportantDate: { fields: { date: dateTypePolicy } },
  Interaction: { fields: { occurredAt: dateTimeTypePolicy } },
  Person: { fields: { createdAt: dateTimeTypePolicy, updatedAt: dateTimeTypePolicy } },
  Task: { fields: { completedAt: dateTimeTypePolicy, createdAt: dateTimeTypePolicy, dueAt: dateTimeTypePolicy } },
  User: { fields: { createdAt: dateTimeTypePolicy, updatedAt: dateTimeTypePolicy } },
  UserPerson: { fields: { createdAt: dateTimeTypePolicy, firstMetDate: dateTypePolicy } },
};
