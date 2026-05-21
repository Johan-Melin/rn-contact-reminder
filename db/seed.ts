import type { NewContact, NewContactHistory } from "@/db/schema";

const now = Date.now();
const day = 24 * 60 * 60 * 1000;

export const dummyContacts: NewContact[] = [
  {
    name: "Mum",
    relationship: "family",
    targetFrequencyDays: 7,
  },
  {
    name: "Dad",
    relationship: "family",
    targetFrequencyDays: 10,
  },
  {
    name: "Emma Larsson",
    relationship: "friend",
    targetFrequencyDays: 14,
  },
  {
    name: "Noah Berg",
    relationship: "friend",
    targetFrequencyDays: 21,
  },
  {
    name: "Sara Lind",
    relationship: "colleague",
    targetFrequencyDays: 30,
  },
  {
    name: "Alex Chen",
    relationship: "colleague",
    targetFrequencyDays: 45,
  },
  {
    name: "Grandma Ingrid",
    relationship: "family",
    targetFrequencyDays: 5,
  },
  {
    name: "Priya Nair",
    relationship: "other",
    targetFrequencyDays: 60,
  },
];

export const dummyHistoryByContactName: Record<
  string,
  Omit<NewContactHistory, "contactId">[]
> = {
  Mum: [
    {
      contactedAt: new Date(now - 3 * day),
      method: "call",
      notes: "Weekly check-in.",
    },
    {
      contactedAt: new Date(now - 11 * day),
      method: "message",
    },
  ],
  Dad: [
    {
      contactedAt: new Date(now - 18 * day),
      method: "in_person",
      notes: "Met for lunch.",
    },
  ],
  "Emma Larsson": [
    {
      contactedAt: new Date(now - 20 * day),
      method: "video_call",
    },
    {
      contactedAt: new Date(now - 52 * day),
      method: "message",
      notes: "Planned a summer trip.",
    },
  ],
  "Sara Lind": [
    {
      contactedAt: new Date(now - 29 * day),
      method: "email",
      notes: "Followed up on a shared project.",
    },
  ],
  "Grandma Ingrid": [
    {
      contactedAt: new Date(now - 1 * day),
      method: "call",
    },
  ],
};

export const dummyContactsWithoutHistory = dummyContacts
  .map((contact) => contact.name)
  .filter((name) => !(name in dummyHistoryByContactName));
