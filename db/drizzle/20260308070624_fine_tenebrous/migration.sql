CREATE TABLE "activities" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"person_id" uuid NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"location" text,
	"occurred_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "activity_tags" (
	"activity_id" uuid,
	"label_id" uuid,
	CONSTRAINT "activity_tags_pkey" PRIMARY KEY("activity_id","label_id")
);
--> statement-breakpoint
ALTER TABLE "activities" ADD CONSTRAINT "activities_person_id_persons_id_fkey" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "activity_tags" ADD CONSTRAINT "activity_tags_activity_id_activities_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "activities"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "activity_tags" ADD CONSTRAINT "activity_tags_label_id_labels_id_fkey" FOREIGN KEY ("label_id") REFERENCES "labels"("id") ON DELETE CASCADE;