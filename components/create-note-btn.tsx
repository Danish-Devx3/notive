"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { createNote } from "@/server/notes";

const formSchema = z.object({
  name: z.string().min(2).max(50),
});

export default function CreateNoteBtn({ notebookId }: { notebookId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      const res = await createNote({
        title: values.name,
        content: {
          type: "doc",
          content: {
            type: "doc",
            content: [
              {
                type: "heading",
                attrs: {
                  level: 1,
                },
                content: [
                  {
                    text: "Welcome to Your Notes",
                    type: "text",
                  },
                ],
              },
              {
                type: "paragraph",
                content: [
                  {
                    text: "Start writing your thoughts here. You can format text using ",
                    type: "text",
                  },
                  {
                    text: "bold",
                    type: "text",
                    marks: [
                      {
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: ", ",
                    type: "text",
                  },
                  {
                    text: "italic",
                    type: "text",
                    marks: [
                      {
                        type: "italic",
                      },
                    ],
                  },
                  {
                    text: ", or even ",
                    type: "text",
                  },
                  {
                    text: "both",
                    type: "text",
                    marks: [
                      {
                        type: "bold",
                      },
                      {
                        type: "italic",
                      },
                    ],
                  },
                  {
                    text: ".",
                    type: "text",
                  },
                ],
              },
              {
                type: "heading",
                attrs: {
                  level: 2,
                },
                content: [
                  {
                    text: "Quick Tips",
                    type: "text",
                  },
                ],
              },
              {
                type: "bulletList",
                content: [
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        content: [
                          {
                            text: "Create organized lists for your tasks",
                            type: "text",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        content: [
                          {
                            text: "Use headings to structure your content",
                            type: "text",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        content: [
                          {
                            text: "Format text to highlight ",
                            type: "text",
                          },
                          {
                            text: "important information",
                            type: "text",
                            marks: [
                              {
                                type: "bold",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: "heading",
                attrs: {
                  level: 3,
                },
                content: [
                  {
                    text: "Example Code Block",
                    type: "text",
                  },
                ],
              },
              {
                type: "paragraph",
                content: [
                  {
                    text: "You can also add inline ",
                    type: "text",
                  },
                  {
                    text: "code snippets",
                    type: "text",
                    marks: [
                      {
                        type: "code",
                      },
                    ],
                  },
                  {
                    text: " or full code blocks:",
                    type: "text",
                  },
                ],
              },
              {
                type: "codeBlock",
                attrs: {
                  language: null,
                },
                content: [
                  {
                    text: "function greet(name) {\n  return `Hello, ${name}!`;\n}",
                    type: "text",
                  },
                ],
              },
              {
                type: "heading",
                attrs: {
                  level: 2,
                },
                content: [
                  {
                    text: "Organize Your Thoughts",
                    type: "text",
                  },
                ],
              },
              {
                type: "orderedList",
                attrs: {
                  start: 1,
                },
                content: [
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        content: [
                          {
                            text: "First, gather your ideas",
                            type: "text",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        content: [
                          {
                            text: "Then, organize them logically",
                            type: "text",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        content: [
                          {
                            text: "Finally, refine and review",
                            type: "text",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: "blockquote",
                content: [
                  {
                    type: "paragraph",
                    content: [
                      {
                        text: '"The secret of getting ahead is getting started." - Mark Twain',
                        type: "text",
                      },
                    ],
                  },
                ],
              },
              {
                type: "paragraph",
                content: [
                  {
                    text: "Happy note-taking! 📝",
                    type: "text",
                  },
                ],
              },
            ],
          },
        },
        notebookId,
      });

      if (res.success) {
        form.reset();
        toast.success("Note created successfully");
        router.refresh();
      } else {
        toast.error(res.message);
      }
    } catch {
      toast.error("Failed to create note");
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-max">Create Note</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Notes</DialogTitle>
          <DialogDescription>Create a your new note.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notebook Name</FormLabel>
                  <FormControl>
                    <Input placeholder="My Notes" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading} type="submit">
              {isLoading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                "Create Notes"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
