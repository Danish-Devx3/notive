import PageWrapper from '@/components/page-wrapper';
import ReachTextEditor from '@/components/reach-text-editor'
import React from 'react'
import { JSONContent } from '@tiptap/react';
import { getNotebookById } from '@/server/notebooks';
import NoteCard from '@/components/note-card';

export default async function Page({params}: {params: {notebookId: string}}) {

    const {notebookId} = await params;

    const {notebook} = await getNotebookById(notebookId);
    
  return (
    <PageWrapper breadcrumbs={[
        {label: "Dashboard",url: "/dashboard"},
        {label: notebook?.name ?? "Notebook", url: `/dashboard/notebook/${notebookId}`}
    ]} >
    
        <h1>{notebook?.name}</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {notebook?.notes?.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
    
</PageWrapper>
  )
}
