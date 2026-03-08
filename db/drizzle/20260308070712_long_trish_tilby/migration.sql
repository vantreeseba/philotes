CREATE TYPE "contact_type" AS ENUM('email', 'phone', 'mobile', 'linkedin', 'twitter', 'instagram', 'website', 'other');--> statement-breakpoint
CREATE TABLE "contact_infos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"person_id" uuid NOT NULL,
	"type" "contact_type" NOT NULL,
	"value" text NOT NULL,
	"label" text,
	"is_primary" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "contact_infos" ADD CONSTRAINT "contact_infos_person_id_persons_id_fkey" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE CASCADE;