"use client";

import { Note } from "@/db/schema";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePenLine, Loader2, MoveRight, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteNote } from "@/server/notes";
import { toast } from "sonner";
import StarterKit from "@tiptap/starter-kit";
import { generateHTML } from "@tiptap/react";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const jsonContent =
    typeof note.content === "string" ? JSON.parse(note.content) : note.content;
  const html = generateHTML(jsonContent as unknown as object, [StarterKit]).concat('...');


  async function handleDelete() {
    try {
      setIsDeleting(true);
      const res = await deleteNote(note.id);

      if (res.success) {
        router.refresh();
        toast.success("Notes deleted successfully");
      }
    } catch {
      toast.error("Failed to delete notes");
    } finally {
      setIsDeleting(false);
      setIsOpen(false);
    }
  }

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>{note.title}</CardTitle>
        <Link href={`/dashboard/notebook/${note.notebookId}/note/${note.id}`}>
          <Button className="flex items-center justify-center gap-2">
            Edit <FilePenLine size={28} />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="max-h-20 overflow-hidden">
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
            className="prose"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Link
          href={`/dashboard/notebook/${note.notebookId}/note/?id=${note.id}`}
        >
          <Button variant={"outline"}>View <MoveRight /></Button>
        </Link>

        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogTrigger asChild>
            <Button variant={"destructive"}>
              <Trash2 className="size-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                disabled={isDeleting}
                className="bg-red-500 hover:bg-red-500/60"
                onClick={handleDelete}
              >
                {isDeleting ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  "Delete"
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
