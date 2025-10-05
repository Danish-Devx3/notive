import PageWrapper from '@/components/page-wrapper';
import { getNoteById } from '@/server/notes';
import ReachTextEditor from '@/components/reach-text-editor'
import React from 'react'
import { JSONContent } from '@tiptap/react';

export default async function Page({params}: {params: {noteId: string}}) {

    const {noteId} = await params;

    const {note} = await getNoteById(noteId);
    
  return (
    <PageWrapper breadcrumbs={[
        {label: "Dashboard",url: "/dashboard"},
        {label: note?.notebook?.name ?? "Notebook", url: `/dashboard/notebook/${note?.notebookId}`},
        {label: note?.title ?? "Note", url: `/dashboard/note/${noteId}`}
    ]} >
    <div>
      <ReachTextEditor content={note?.content as JSONContent[]} noteId={noteId} />
    </div>
</PageWrapper>
  )
}
