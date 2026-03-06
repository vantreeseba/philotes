CREATE TABLE "important_date_tags" (
	"important_date_id" uuid,
	"label_id" uuid,
	CONSTRAINT "important_date_tags_pkey" PRIMARY KEY("important_date_id","label_id")
);
--> statement-breakpoint
ALTER TABLE "important_date_tags" ADD CONSTRAINT "important_date_tags_important_date_id_important_dates_id_fkey" FOREIGN KEY ("important_date_id") REFERENCES "important_dates"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "important_date_tags" ADD CONSTRAINT "important_date_tags_label_id_labels_id_fkey" FOREIGN KEY ("label_id") REFERENCES "labels"("id") ON DELETE CASCADE;