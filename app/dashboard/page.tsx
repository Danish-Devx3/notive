import CreateNotebookBtn from "@/components/create-notebook-dialog";
import NotebookCard from "@/components/notebook-card";
import PageWrapper from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebooks";
import React from "react";

export default async function Page() {
  const notebooks = await getNotebooks();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", url: "/dashboard" }]}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Notebooks</h1>
        <CreateNotebookBtn/>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {notebooks.success &&
        notebooks?.notebooks.map((notebook) => (
          <NotebookCard notebook={notebook} key={notebook.id}/>
        ))}</div>
    </PageWrapper>
  );
}
