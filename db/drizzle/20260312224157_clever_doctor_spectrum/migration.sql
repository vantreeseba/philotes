CREATE INDEX "idx_activities_person_id" ON "activities" ("person_id");--> statement-breakpoint
CREATE INDEX "idx_activities_occurred_at" ON "activities" ("occurred_at");--> statement-breakpoint
CREATE INDEX "idx_addresses_person_id" ON "addresses" ("person_id");--> statement-breakpoint
CREATE INDEX "idx_contact_infos_person_id" ON "contact_infos" ("person_id");--> statement-breakpoint
CREATE INDEX "idx_important_dates_person_id" ON "important_dates" ("person_id");--> statement-breakpoint
CREATE INDEX "idx_important_dates_date" ON "important_dates" ("date");--> statement-breakpoint
CREATE INDEX "idx_interactions_person_id" ON "interactions" ("person_id");--> statement-breakpoint
CREATE INDEX "idx_interactions_person_id_occurred_at" ON "interactions" ("person_id","occurred_at");--> statement-breakpoint
CREATE INDEX "idx_note_mentions_mentioned_person_id" ON "note_mentions" ("mentioned_person_id");--> statement-breakpoint
CREATE INDEX "idx_notes_person_id" ON "notes" ("person_id");--> statement-breakpoint
CREATE INDEX "idx_person_labels_label_id" ON "person_labels" ("label_id");--> statement-breakpoint
CREATE INDEX "idx_person_relationships_from_person_id" ON "person_relationships" ("from_person_id");--> statement-breakpoint
CREATE INDEX "idx_person_relationships_to_person_id" ON "person_relationships" ("to_person_id");--> statement-breakpoint
CREATE INDEX "idx_persons_last_name_first_name" ON "persons" ("last_name","first_name");--> statement-breakpoint
CREATE INDEX "idx_tasks_person_id" ON "tasks" ("person_id");--> statement-breakpoint
CREATE INDEX "idx_tasks_due_at" ON "tasks" ("due_at");