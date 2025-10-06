
import { Note } from '@/db/schema';
import { generateHTML } from '@tiptap/core';
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import React from 'react'

export default function ShowNote({note}: {note: Note}) {
    const editor = useEditor({
    extensions: [StarterKit],
    content: note.content!,
    immediatelyRender: false,
    editable: false, // 🧊 read-only
  });

  if (!editor) return null;
  return (
    <div className="max-w-3xl mx-auto mt-8 p-6">
      <h1 className="text-4xl text-center font-semibold mb-10">{note.title}</h1>
      <EditorContent editor={editor} className="prose dark:prose-invert" />
    </div>
  )
}
