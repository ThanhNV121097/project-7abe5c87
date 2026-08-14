"use client";

import { useEffect, useState } from "react";
import { getSavedNotes, type Note } from "../lib/mock/display-saved-notes";
import styles from "./DisplaySavedNotes.module.css";

type BoardState = "loading" | "loaded" | "empty" | "error";

function formatUpdatedAt(value: string | null): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return `Updated ${new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date)}`;
}

function NoteCard({ note }: { note: Note }) {
  const date = formatUpdatedAt(note.updated_at);
  return (
    <article className={styles.noteCard}>
      <h3>{note.title || "Untitled note"}</h3>
      {note.body ? <p>{note.body}</p> : null}
      {date ? <span>{date}</span> : null}
    </article>
  );
}

function SkeletonList() {
  return (
    <div className={styles.skeletonList} aria-live="polite" aria-label="Saved notes loading">
      {["a", "b", "c"].map((item) => (
        <div className={styles.skeletonCard} key={item}>
          <span />
          <span />
          <span />
        </div>
      ))}
    </div>
  );
}

function CenterState({ state, onRetry }: { state: "empty" | "error"; onRetry?: () => void }) {
  const isError = state === "error";
  return (
    <section className={styles.centerState} aria-live="polite">
      <div className={isError ? styles.errorIcon : styles.emptyIcon} aria-hidden="true">
        {isError ? "!" : "–"}
      </div>
      <h2>{isError ? "Notes could not load" : "No saved notes yet"}</h2>
      <p>
        {isError
          ? "Try again. Internal error details stay hidden."
          : "Database returned zero notes. No create action is available on this read-only board."}
      </p>
      {isError && onRetry ? (
        <button className={styles.retryButton} type="button" onClick={onRetry}>
          Retry
        </button>
      ) : null}
    </section>
  );
}

export default function DisplaySavedNotes() {
  const [state, setState] = useState<BoardState>("loading");
  const [notes, setNotes] = useState<Note[]>([]);

  async function loadNotes() {
    setState("loading");
    try {
      const result = await getSavedNotes();
      setNotes(result.notes);
      setState(result.notes.length ? "loaded" : "empty");
    } catch {
      setState("error");
    }
  }

  useEffect(() => {
    void loadNotes();
  }, []);

  return (
    <section className={styles.screen} aria-labelledby="note-board-title">
      <div className={styles.intro}>
        <p>Read-only saved notes</p>
        <h1 id="note-board-title">Note Board</h1>
        <span aria-label="Read-only database list">Read-only database list</span>
      </div>
      <section className={styles.board} aria-label="Note Board application screen">
        <header className={styles.toolbar}>
          <div>
            <p>Saved notes</p>
            <h2>Database notes</h2>
          </div>
          <span>{state === "loaded" ? `${notes.length} notes` : "Read-only"}</span>
        </header>
        <div className={styles.body}>
          {state === "loading" ? <SkeletonList /> : null}
          {state === "loaded" ? notes.map((note) => <NoteCard key={note.id} note={note} />) : null}
          {state === "empty" ? <CenterState state="empty" /> : null}
          {state === "error" ? <CenterState state="error" onRetry={loadNotes} /> : null}
        </div>
      </section>
    </section>
  );
}
