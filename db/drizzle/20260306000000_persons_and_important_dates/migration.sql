-- Rename contacts table to persons
ALTER TABLE "contacts" RENAME TO "persons";
--> statement-breakpoint

-- Rename the primary key constraint
ALTER TABLE "persons" RENAME CONSTRAINT "contacts_pkey" TO "persons_pkey";
--> statement-breakpoint

-- Rename the unique constraint on email
ALTER TABLE "persons" RENAME CONSTRAINT "contacts_email_key" TO "persons_email_key";
--> statement-breakpoint

-- Rename contact_labels table to person_labels
ALTER TABLE "contact_labels" RENAME TO "person_labels";
--> statement-breakpoint

-- Rename the primary key constraint on person_labels
ALTER TABLE "person_labels" RENAME CONSTRAINT "contact_labels_pkey" TO "person_labels_pkey";
--> statement-breakpoint

-- Rename contact_id column in person_labels to person_id
ALTER TABLE "person_labels" RENAME COLUMN "contact_id" TO "person_id";
--> statement-breakpoint

-- Drop old FK constraints referencing the old table/column names
ALTER TABLE "person_labels" DROP CONSTRAINT "contact_labels_contact_id_contacts_id_fkey";
--> statement-breakpoint
ALTER TABLE "person_labels" DROP CONSTRAINT "contact_labels_label_id_labels_id_fkey";
--> statement-breakpoint
ALTER TABLE "notes" DROP CONSTRAINT "notes_contact_id_contacts_id_fkey";
--> statement-breakpoint

-- Rename contact_id column in notes to person_id
ALTER TABLE "notes" RENAME COLUMN "contact_id" TO "person_id";
--> statement-breakpoint

-- Re-add FK constraints with updated names
ALTER TABLE "person_labels" ADD CONSTRAINT "person_labels_person_id_persons_id_fkey" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "person_labels" ADD CONSTRAINT "person_labels_label_id_labels_id_fkey" FOREIGN KEY ("label_id") REFERENCES "labels"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_person_id_persons_id_fkey" FOREIGN KEY ("person_id") REFERENCES "persons"("id");
--> statement-breakpoint

-- Create important_dates table
CREATE TABLE "important_dates" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"person_id" uuid NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"date" date NOT NULL
);
--> statement-breakpoint
ALTER TABLE "important_dates" ADD CONSTRAINT "important_dates_person_id_persons_id_fkey" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE CASCADE;
