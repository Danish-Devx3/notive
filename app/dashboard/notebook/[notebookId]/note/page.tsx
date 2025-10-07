"use client"
import PageWrapper from "@/components/page-wrapper";
import ShowNote from "@/components/show-note";
import { Note, Notebook } from "@/db/schema";
import { getNoteById } from "@/server/notes";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface NoteWithNotebook extends Note {
  notebook: Notebook;
}

export default function Page() {
  const [note, setNote] = useState<NoteWithNotebook>()

  const searchParams = useSearchParams()
 
  const id = searchParams.get('id')

  useEffect(() => {
    if(id){
      getNoteById(id).then((res) => {
        setNote(res.note as NoteWithNotebook)
      })
    }
  }, [id])
  
  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", url: "/dashboard" },
        { label: note?.notebook?.name ??"Notebook", url: `/dashboard/notebook/${note?.notebookId}` },
        { label: note?.title ??"Note", url: `/dashboard/notebook/${note?.notebookId}/note?id=${id}` },
      ]}
    >
      
    
        <ShowNote note={note!}/>
        
      
    </PageWrapper>
  );
}
