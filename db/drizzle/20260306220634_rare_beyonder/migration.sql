CREATE TABLE "note_tags" (
	"note_id" uuid,
	"label_id" uuid,
	CONSTRAINT "note_tags_pkey" PRIMARY KEY("note_id","label_id")
);
--> statement-breakpoint
ALTER TABLE "note_tags" ADD CONSTRAINT "note_tags_note_id_notes_id_fkey" FOREIGN KEY ("note_id") REFERENCES "notes"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "note_tags" ADD CONSTRAINT "note_tags_label_id_labels_id_fkey" FOREIGN KEY ("label_id") REFERENCES "labels"("id") ON DELETE CASCADE;