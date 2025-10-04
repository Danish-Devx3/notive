import CreateNotebookBtn from "@/components/create-notebook-dialog";
import PageWrapper from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebooks";
import React from "react";

export default async function Page() {
  const notebooks = await getNotebooks();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", url: "/dashboard" }]}>
      <CreateNotebookBtn/>
      <h1>Notebooks</h1>
      {/* {notebooks.success && <Notebooks notebooks={notebooks} />} */}
      {notebooks.success &&
        notebooks?.notebooks.map((notebook) => (
          <div key={notebook.id}>{notebook.name}</div>
        ))}
    </PageWrapper>
  );
}
