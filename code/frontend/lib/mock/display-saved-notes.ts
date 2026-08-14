export type Note = {
  id: string;
  title: string | null;
  body: string | null;
  updated_at: string | null;
};

export type NotesResponse = {
  notes: Note[];
  next_cursor: string | null;
  has_more: boolean;
};

export type NotesErrorResponse = {
  error: {
    code: "BAD_REQUEST" | "VALIDATION_FAILED" | "RATE_LIMITED" | "INTERNAL" | "UNAVAILABLE";
    message: string;
    details?: Array<{ field: string; code: string; message: string }>;
    request_id: string;
  };
};

const notesResponse: NotesResponse = {
  notes: [
    {
      id: "0191bd30-427b-7bca-a802-59aa67320cb1",
      title: "Release checklist",
      body: "Confirm deploy window, rollback note, and final read-only board review before launch.",
      updated_at: "2026-08-14T10:04:18Z",
    },
    {
      id: "0191bd30-427b-7bca-a802-59aa67320cb2",
      title: null,
      body: "Database maintenance note kept without a title.",
      updated_at: "2026-08-13T16:20:00Z",
    },
    {
      id: "0191bd30-427b-7bca-a802-59aa67320cb3",
      title: "Malformed date example",
      body: null,
      updated_at: "not-a-date",
    },
  ],
  next_cursor: null,
  has_more: false,
};

export async function getSavedNotes(): Promise<NotesResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return notesResponse;
}
