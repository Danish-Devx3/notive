import PageWrapper from '@/components/page-wrapper';
import ReachTextEditor from '@/components/reach-text-editor'
import React from 'react'
import { JSONContent } from '@tiptap/react';
import { getNotebookById } from '@/server/notebooks';

export default async function Page({params}: {params: {notebookId: string}}) {

    const {notebookId} = await params;

    const {notebook} = await getNotebookById(notebookId);
    
  return (
    <PageWrapper breadcrumbs={[
        {label: "Dashboard",url: "/dashboard"},
        {label: notebook?.name ?? "Notebook", url: `/dashboard/notebook/${notebookId}`}
    ]} >
    <div>
        <h1>{notebook?.name}</h1>
    </div>
</PageWrapper>
  )
}
