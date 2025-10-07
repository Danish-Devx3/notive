import { Note } from "@/db/schema";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Pencil } from "lucide-react";
import Link from "next/link";

import React from "react";

export default function ShowNote({ note }: { note: Note }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: note.content!,
    immediatelyRender: false,
    editable: false,
  });

  if (!editor) return null;
  return (
    <div className="max-w-3xl mx-auto mt-8 p-6">
        <h1 className="text-4xl flex items-center justify-center gap-2 font-semibold mb-10">
          {note.title}
          <Link
            className="flex items-center justify-center gap-4 text-primary cursor-pointer"
            href={`/dashboard/notebook/${note.notebookId}/note/${note.id}`}
          >
            <Pencil size={28} className="size-8" />
          </Link>
        </h1>
      <EditorContent editor={editor} className="prose dark:prose-invert" />
    </div>
  );
}
