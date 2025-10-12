import PageWrapper from '@/components/page-wrapper';
import React from 'react'
import { getNotebookById } from '@/server/notebooks';
import NoteCard from '@/components/note-card';
import CreateNoteBtn from '@/components/create-note-btn';

export default async function Page({params}: {params: {notebookId: string}}) {

    const {notebookId} = await params;

    const {notebook} = await getNotebookById(notebookId);
    
  return (
    <PageWrapper breadcrumbs={[
        {label: "Dashboard",url: "/dashboard"},
        {label: notebook?.name ?? "Notebook", url: `/dashboard/notebook/${notebookId}`}
    ]} >
    
        <div className="flex justify-between items-center">
          <h1 className="text-xl">{notebook?.name}</h1>
          <CreateNoteBtn notebookId={notebookId}/> 
        </div>

        {notebook?.notes && notebook.notes.length < 1 && (
        <div className="flex flex-col gap-4 h-[calc()] justify-center items-center">
          <h4 className="text-2xl">No notebooks found</h4>
          <p>Create your first notebook</p>
        </div>
      )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {notebook?.notes?.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
    
</PageWrapper>
  )
}
