import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "ERROR: Toast ejected early. It has seen things. Please unplug me and pretend this never happened.";

// One line, 1-120 chars: the error message a kitchen toaster shows its owner.
if (!TEXT.trim() || TEXT.length > 120) throw new Error("entry text out of range");
if (TEXT.includes("\n")) throw new Error("entry must be exactly one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
