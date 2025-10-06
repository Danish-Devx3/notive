"use client"
import PageWrapper from "@/components/page-wrapper";
import ShowNote from "@/components/show-note";
import { getNoteById } from "@/server/notes";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [note, setNote] = useState<any>()

  const searchParams = useSearchParams()
 
  const id = searchParams.get('id')

  useEffect(() => {
    if(id){
      getNoteById(id).then((res) => {
        setNote(res.note)
      })
    }
  }, [])
  
  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", url: "/dashboard" },
        { label: note?.notebook?.name ??"Notebook", url: `/dashboard/notebook/${note?.notebookId}` },
        { label: note?.title ??"Note", url: `/dashboard/notebook/${note?.notebookId}/note?id=${id}` },
      ]}
    >
      {
        note ?
        <ShowNote note={note}/>
        :
        <div>Loading...</div>
      }
    </PageWrapper>
  );
}
