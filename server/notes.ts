"use server"

import { db } from "@/db/drizzle";
import { notebooks, InsertNote, InsertNotebook, notes } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

export const createNote = async (values: InsertNote) => {
  try {
    await db.insert(notes).values(values);
    return { success: true, message: "Note created successfully" };
  } catch {
    return { success: false, message: "Failed to create note" };
  }
};

// export const getNotes = async () => {
//   try {
//     const session = await auth.api.getSession({
//       headers: await headers(),
//     });

//     const userId = session?.user?.id;

//     if (!userId) {
//       return { success: false, message: "Unauthorized", notebooks: [] };
//     }

//     const notesList = await db
//       .select()
//       .from(notes)
//       .where(eq(notes, userId));

//     return { success: true, notes: notes };
//   } catch {
//     return {
//       success: false,
//       message: "Failed to retrieve notebooks",
//       notebooks: [],
//     };
//   }
// };

export const getNoteById = async (id: string) => {
  try {
    const note = await db.query.notes.findFirst({
      where: eq(notes.id, id),
      with: {
        notebook: true,
      }
    });
    if (!note) {
      return { success: false, message: "Note not found" };
    }
    return { success: true, note };
  } catch {
    return { success: false, message: "Failed to retrieve note" };
  }
};

export const updateNote = async (id: string, values: Partial<InsertNote>) => {
  try {
    await db.update(notes).set(values).where(eq(notes.id, id));
    return { success: true, message: "Note updated successfully" };
  } catch {
    return { success: false, message: "Failed to update Note" };
  }
};

export const deleteNote = async (id: string) => {
  try {
    await db.delete(notes).where(eq(notes.id, id));
    return { success: true, message: "Note deleted successfully" };
  } catch {
    return { success: false, message: "Failed to delete note" };
  }
};
