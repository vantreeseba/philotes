CREATE TABLE "user_persons" (
	"user_id" uuid,
	"person_id" uuid,
	"contact_frequency" text,
	"how_we_met" text,
	"first_met_date" date,
	"avatar_path" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "user_persons_pkey" PRIMARY KEY("user_id","person_id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"email" text NOT NULL UNIQUE,
	"name" text NOT NULL,
	"password_hash" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "activities" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "addresses" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "contact_infos" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "important_dates" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "interactions" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "labels" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "notes" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "person_labels" ADD COLUMN "user_id" uuid;--> statement-breakpoint
ALTER TABLE "person_relationships" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "tasks" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "persons" DROP COLUMN "avatar_path";--> statement-breakpoint
ALTER TABLE "persons" DROP COLUMN "contact_frequency";--> statement-breakpoint
ALTER TABLE "persons" DROP COLUMN "how_we_met";--> statement-breakpoint
ALTER TABLE "persons" DROP COLUMN "first_met_date";--> statement-breakpoint
ALTER TABLE "person_labels" DROP CONSTRAINT "person_labels_pkey";--> statement-breakpoint
ALTER TABLE "person_labels" ADD PRIMARY KEY ("person_id","label_id","user_id");--> statement-breakpoint
CREATE INDEX "idx_activities_user_id" ON "activities" ("user_id");--> statement-breakpoint
CREATE INDEX "idx_addresses_user_id" ON "addresses" ("user_id");--> statement-breakpoint
CREATE INDEX "idx_contact_infos_user_id" ON "contact_infos" ("user_id");--> statement-breakpoint
CREATE INDEX "idx_important_dates_user_id" ON "important_dates" ("user_id");--> statement-breakpoint
CREATE INDEX "idx_interactions_user_id" ON "interactions" ("user_id");--> statement-breakpoint
CREATE INDEX "idx_labels_user_id" ON "labels" ("user_id");--> statement-breakpoint
CREATE INDEX "idx_notes_user_id" ON "notes" ("user_id");--> statement-breakpoint
CREATE INDEX "idx_person_labels_user_id" ON "person_labels" ("user_id");--> statement-breakpoint
CREATE INDEX "idx_person_relationships_user_id" ON "person_relationships" ("user_id");--> statement-breakpoint
CREATE INDEX "idx_tasks_user_id" ON "tasks" ("user_id");--> statement-breakpoint
CREATE INDEX "idx_user_persons_user_id" ON "user_persons" ("user_id");--> statement-breakpoint
CREATE INDEX "idx_user_persons_person_id" ON "user_persons" ("person_id");--> statement-breakpoint
ALTER TABLE "activities" ADD CONSTRAINT "activities_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "contact_infos" ADD CONSTRAINT "contact_infos_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "important_dates" ADD CONSTRAINT "important_dates_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "interactions" ADD CONSTRAINT "interactions_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "labels" ADD CONSTRAINT "labels_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "person_labels" ADD CONSTRAINT "person_labels_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "person_relationships" ADD CONSTRAINT "person_relationships_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "user_persons" ADD CONSTRAINT "user_persons_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "user_persons" ADD CONSTRAINT "user_persons_person_id_persons_id_fkey" FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE CASCADE;