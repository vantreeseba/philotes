CREATE TABLE "note_mentions" (
	"note_id" uuid,
	"mentioned_person_id" uuid,
	CONSTRAINT "note_mentions_pkey" PRIMARY KEY("note_id","mentioned_person_id")
);
--> statement-breakpoint
ALTER TABLE "note_mentions" ADD CONSTRAINT "note_mentions_note_id_notes_id_fkey" FOREIGN KEY ("note_id") REFERENCES "notes"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "note_mentions" ADD CONSTRAINT "note_mentions_mentioned_person_id_persons_id_fkey" FOREIGN KEY ("mentioned_person_id") REFERENCES "persons"("id") ON DELETE CASCADE;