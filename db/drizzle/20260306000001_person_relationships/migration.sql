CREATE TABLE "person_relationships" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"from_person_id" uuid NOT NULL,
	"to_person_id" uuid NOT NULL,
	"type" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "person_relationships" ADD CONSTRAINT "person_relationships_from_person_id_persons_id_fkey" FOREIGN KEY ("from_person_id") REFERENCES "persons"("id") ON DELETE CASCADE;
--> statement-breakpoint
ALTER TABLE "person_relationships" ADD CONSTRAINT "person_relationships_to_person_id_persons_id_fkey" FOREIGN KEY ("to_person_id") REFERENCES "persons"("id") ON DELETE CASCADE;
