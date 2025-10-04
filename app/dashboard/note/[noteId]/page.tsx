import PageWrapper from '@/components/page-wrapper';
import { getNoteById } from '@/server/notes';
import React from 'react'

export default async function Page({params}: {params: {noteId: string}}) {

    const {noteId} = await params;

    const {note} = await getNoteById(noteId);
    
  return (
    <PageWrapper breadcrumbs={[
        {label: "Dashboard",url: "/dashboard"},
        {label: note?.title ?? "Note", url: `/dashboard/note/${noteId}`}
    ]} >
    <div>
      <h1>Note ID: {note?.title}</h1>
    </div>
</PageWrapper>
  )
}
