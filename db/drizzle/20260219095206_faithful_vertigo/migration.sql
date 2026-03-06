CREATE TABLE "contact_labels" (
	"contact_id" uuid,
	"label_id" uuid,
	CONSTRAINT "contact_labels_pkey" PRIMARY KEY("contact_id","label_id")
);
--> statement-breakpoint
CREATE TABLE "contacts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL UNIQUE,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"birthdate" date
);
--> statement-breakpoint
CREATE TABLE "labels" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"color" text NOT NULL,
	"label" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "notes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"body" text NOT NULL,
	"contact_id" uuid
);
--> statement-breakpoint
ALTER TABLE "contact_labels" ADD CONSTRAINT "contact_labels_contact_id_contacts_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "contacts"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "contact_labels" ADD CONSTRAINT "contact_labels_label_id_labels_id_fkey" FOREIGN KEY ("label_id") REFERENCES "labels"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_contact_id_contacts_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "contacts"("id");