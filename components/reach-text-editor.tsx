"use client";
import { TextStyle } from "@tiptap/extension-text-style";
import type { Editor, JSONContent } from "@tiptap/react";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import React from "react";
import {
  Undo,
  Redo,
  Bold,
  Italic,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  Quote,
  UnderlineIcon,
  Highlighter,
  LinkIcon,
  SuperscriptIcon,
  SubscriptIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  ChevronDown,
  Moon,
  Sun,
  ImagePlus,
  Loader2,
  SaveAll,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { updateNote } from "@/server/notes";

const extensions = [
  TextStyle,
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3, 4, 5, 6],
    },
  }),
  Underline,
  Link.configure({
    openOnClick: false,
    HTMLAttributes: {
      class: "text-primary underline underline-offset-4",
    },
  }),
  Highlight.configure({
    multicolor: true,
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Superscript,
  Subscript,
];

function MenuBar({ editor, noteId }: { editor: Editor; noteId: string }) {
  const [isDark, setIsDark] = React.useState(
    document.documentElement.classList.contains("dark")
  );
  const [isSaving, setIsSaving] = React.useState(false);

  const handleSave = async () => {
    if (!editor) return;
    setIsSaving(true);
    const content = editor.getJSON();
    await updateNote(noteId, { content });
    setIsSaving(false);
  };

  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        isItalic: ctx.editor.isActive("italic") ?? false,
        isStrike: ctx.editor.isActive("strike") ?? false,
        isCode: ctx.editor.isActive("code") ?? false,
        isUnderline: ctx.editor.isActive("underline") ?? false,
        isHighlight: ctx.editor.isActive("highlight") ?? false,
        isLink: ctx.editor.isActive("link") ?? false,
        isSuperscript: ctx.editor.isActive("superscript") ?? false,
        isSubscript: ctx.editor.isActive("subscript") ?? false,
        isAlignLeft: ctx.editor.isActive({ textAlign: "left" }) ?? false,
        isAlignCenter: ctx.editor.isActive({ textAlign: "center" }) ?? false,
        isAlignRight: ctx.editor.isActive({ textAlign: "right" }) ?? false,
        isAlignJustify: ctx.editor.isActive({ textAlign: "justify" }) ?? false,
        isHeading1: ctx.editor.isActive("heading", { level: 1 }) ?? false,
        isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
        isHeading3: ctx.editor.isActive("heading", { level: 3 }) ?? false,
        isBulletList: ctx.editor.isActive("bulletList") ?? false,
        isOrderedList: ctx.editor.isActive("orderedList") ?? false,
        isCodeBlock: ctx.editor.isActive("codeBlock") ?? false,
        isBlockquote: ctx.editor.isActive("blockquote") ?? false,
        canUndo: ctx.editor.can().chain().undo().run() ?? false,
        canRedo: ctx.editor.can().chain().redo().run() ?? false,
      };
    },
  });

  const getCurrentHeading = () => {
    if (editorState.isHeading1) return "H1";
    if (editorState.isHeading2) return "H2";
    if (editorState.isHeading3) return "H3";
    return "Normal";
  };

  const setLink = React.useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="border-b border-editor-border bg-editor-toolbar sticky top-0 z-10">
      <div className="flex items-center gap-1 p-2 flex-wrap">
        {/* Undo/Redo */}
        <div className="flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editorState.canUndo}
          >
            <Undo className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editorState.canRedo}
          >
            <Redo className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-8 mx-1" />

        {/* Heading Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              {getCurrentHeading()}
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem
              onClick={() => editor.chain().focus().setParagraph().run()}
            >
              Normal
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
            >
              Heading 1
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
            >
              Heading 2
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
            >
              Heading 3
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Lists */}
        <div className="flex items-center gap-0.5">
          <Toggle
            size="sm"
            pressed={editorState.isBulletList}
            onPressedChange={() =>
              editor.chain().focus().toggleBulletList().run()
            }
            className="h-8 w-8 p-0"
          >
            <List className="h-4 w-4" />
          </Toggle>
          <Toggle
            size="sm"
            pressed={editorState.isOrderedList}
            onPressedChange={() =>
              editor.chain().focus().toggleOrderedList().run()
            }
            className="h-8 w-8 p-0"
          >
            <ListOrdered className="h-4 w-4" />
          </Toggle>
        </div>

        {/* Code Block & Quote */}
        <div className="flex items-center gap-0.5">
          <Toggle
            size="sm"
            pressed={editorState.isCodeBlock}
            onPressedChange={() =>
              editor.chain().focus().toggleCodeBlock().run()
            }
            className="h-8 w-8 p-0"
          >
            <Code className="h-4 w-4" />
          </Toggle>
          <Toggle
            size="sm"
            pressed={editorState.isBlockquote}
            onPressedChange={() =>
              editor.chain().focus().toggleBlockquote().run()
            }
            className="h-8 w-8 p-0"
          >
            <Quote className="h-4 w-4" />
          </Toggle>
        </div>

        <Separator orientation="vertical" className="h-8 mx-1" />

        {/* Text Formatting */}
        <div className="flex items-center gap-0.5">
          <Toggle
            size="sm"
            pressed={editorState.isBold}
            onPressedChange={() => editor.chain().focus().toggleBold().run()}
            className="h-8 w-8 p-0"
          >
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle
            size="sm"
            pressed={editorState.isItalic}
            onPressedChange={() => editor.chain().focus().toggleItalic().run()}
            className="h-8 w-8 p-0"
          >
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle
            size="sm"
            pressed={editorState.isStrike}
            onPressedChange={() => editor.chain().focus().toggleStrike().run()}
            className="h-8 w-8 p-0"
          >
            <Strikethrough className="h-4 w-4" />
          </Toggle>
          <Toggle
            size="sm"
            pressed={editorState.isCode}
            onPressedChange={() => editor.chain().focus().toggleCode().run()}
            className="h-8 w-8 p-0"
          >
            <Code className="h-4 w-4" />
          </Toggle>
          <Toggle
            size="sm"
            pressed={editorState.isUnderline}
            onPressedChange={() =>
              editor.chain().focus().toggleUnderline().run()
            }
            className="h-8 w-8 p-0"
          >
            <UnderlineIcon className="h-4 w-4" />
          </Toggle>
          <Toggle
            size="sm"
            pressed={editorState.isHighlight}
            onPressedChange={() =>
              editor.chain().focus().toggleHighlight().run()
            }
            className="h-8 w-8 p-0"
          >
            <Highlighter className="h-4 w-4" />
          </Toggle>
          <Toggle
            size="sm"
            pressed={editorState.isLink}
            onPressedChange={setLink}
            className="h-8 w-8 p-0"
          >
            <LinkIcon className="h-4 w-4" />
          </Toggle>
        </div>

        {/* Superscript/Subscript */}
        <div className="flex items-center gap-0.5">
          <Toggle
            size="sm"
            pressed={editorState.isSuperscript}
            onPressedChange={() =>
              editor.chain().focus().toggleSuperscript().run()
            }
            className="h-8 w-8 p-0"
          >
            <SuperscriptIcon className="h-4 w-4" />
          </Toggle>
          <Toggle
            size="sm"
            pressed={editorState.isSubscript}
            onPressedChange={() =>
              editor.chain().focus().toggleSubscript().run()
            }
            className="h-8 w-8 p-0"
          >
            <SubscriptIcon className="h-4 w-4" />
          </Toggle>
        </div>

        <Separator orientation="vertical" className="h-8 mx-1" />

        {/* Text Alignment */}
        <div className="flex items-center gap-0.5">
          <Toggle
            size="sm"
            pressed={editorState.isAlignLeft}
            onPressedChange={() =>
              editor.chain().focus().setTextAlign("left").run()
            }
            className="h-8 w-8 p-0"
          >
            <AlignLeft className="h-4 w-4" />
          </Toggle>
          <Toggle
            size="sm"
            pressed={editorState.isAlignCenter}
            onPressedChange={() =>
              editor.chain().focus().setTextAlign("center").run()
            }
            className="h-8 w-8 p-0"
          >
            <AlignCenter className="h-4 w-4" />
          </Toggle>
          <Toggle
            size="sm"
            pressed={editorState.isAlignRight}
            onPressedChange={() =>
              editor.chain().focus().setTextAlign("right").run()
            }
            className="h-8 w-8 p-0"
          >
            <AlignRight className="h-4 w-4" />
          </Toggle>
          <Toggle
            size="sm"
            pressed={editorState.isAlignJustify}
            onPressedChange={() =>
              editor.chain().focus().setTextAlign("justify").run()
            }
            className="h-8 w-8 p-0"
          >
            <AlignJustify className="h-4 w-4" />
          </Toggle>
        </div>

        <Separator orientation="vertical" className="h-8 mx-1" />

        {/* Add Button */}
        <Button variant="ghost" size="sm" className="h-8 gap-1">
          <ImagePlus className="h-4 w-4" />
          Add
        </Button>

        <div className="flex-1" />

        {/* Dark Mode Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={toggleDarkMode}
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? (
            <span className="flex items-center justify-center gap-2">
              {" "}
              <Loader2 className="size-4 animate-spin" /> Saving...
            </span>
          ) : (
            <span className="flex gap-2">
              <SaveAll /> Save
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}

interface RichTextEditorProps {
  content?: JSONContent;
  className?: string;
  noteId?: string;
}

export default function RichTextEditor({
  content,
  className,
  noteId,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions,
    content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: cn(
          "prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none focus:outline-none min-h-[500px] p-8",
          className
        ),
      },
    },
  });

  if (editor === null) {
    return null;
  }

  return (
    <div className="border border-editor-border rounded-lg overflow-hidden bg-background shadow-lg">
      <MenuBar editor={editor} noteId={noteId!} />
      <EditorContent editor={editor} />
    </div>
  );
}
