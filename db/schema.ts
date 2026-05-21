import { relations, sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const relationshipValues = [
  "family",
  "friend",
  "colleague",
  "other",
] as const;

export const contactMethodValues = [
  "call",
  "message",
  "in_person",
  "video_call",
  "email",
  "other",
] as const;

export type Relationship = (typeof relationshipValues)[number];
export type ContactMethod = (typeof contactMethodValues)[number];

export const contacts = sqliteTable(
  "contacts",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    relationship: text("relationship", {
      enum: relationshipValues,
    }).notNull(),
    targetFrequencyDays: integer("target_frequency_days").notNull(),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .notNull()
      .default(sql`(unixepoch() * 1000)`),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .notNull()
      .default(sql`(unixepoch() * 1000)`),
  },
  (table) => [
    index("contacts_name_idx").on(table.name),
    index("contacts_relationship_idx").on(table.relationship),
  ]
);

export const contactHistory = sqliteTable(
  "contact_history",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    contactId: integer("contact_id")
      .notNull()
      .references(() => contacts.id, { onDelete: "cascade" }),
    contactedAt: integer("contacted_at", { mode: "timestamp_ms" }).notNull(),
    method: text("method", {
      enum: contactMethodValues,
    }).notNull(),
    notes: text("notes"),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .notNull()
      .default(sql`(unixepoch() * 1000)`),
  },
  (table) => [
    index("contact_history_contact_id_idx").on(table.contactId),
    index("contact_history_contacted_at_idx").on(table.contactedAt),
  ]
);

export const contactsRelations = relations(contacts, ({ many }) => ({
  history: many(contactHistory),
}));

export const contactHistoryRelations = relations(contactHistory, ({ one }) => ({
  contact: one(contacts, {
    fields: [contactHistory.contactId],
    references: [contacts.id],
  }),
}));

export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
export type ContactHistory = typeof contactHistory.$inferSelect;
export type NewContactHistory = typeof contactHistory.$inferInsert;
