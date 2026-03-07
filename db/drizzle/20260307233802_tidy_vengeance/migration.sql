CREATE TABLE "interaction_tags" (
	"interaction_id" uuid,
	"label_id" uuid,
	CONSTRAINT "interaction_tags_pkey" PRIMARY KEY("interaction_id","label_id")
);
--> statement-breakpoint
CREATE TABLE "interactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"person_id" uuid NOT NULL,
	"occurred_at" timestamp with time zone DEFAULT now() NOT NULL,
	"channel" text NOT NULL,
	"sentiment" text,
	"note" text
);
--> statement-breakpoint
ALTER TABLE "interaction_tags" ADD CONSTRAINT "interaction_tags_interaction_id_interactions_id_fkey" FOREIGN KEY ("interaction_id") REFERENCES "interactions"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "interaction_tags" ADD CONSTRAINT "interaction_tags_label_id_labels_id_fkey" FOREIGN KEY ("label_id") REFERENCES "labels"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "interactions" ADD CONSTRAINT "interactions_person_id_persons_id_fkey" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE CASCADE;