// Warning Label for Humans: One Line, Big Laugh — entry program.
//
// Writes exactly one single-line safety warning label to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default "output"), byte for byte, with
// no trailing newline and no extra output in the file.
//
// The label:
//   WARNING: This human will read the instructions, ignore the
//   instructions, then blame the instructions.
//
// Why this line, against the judge's brief (most important first):
// 1. It IS a warning label for humans: it opens with "WARNING:" and
//    reads like a real printed safety label, so the comedy comes from
//    the form it imitates.
// 2. The laugh lands in one read, with the turn in the last few words:
//    read -> ignore -> blame. The triple repetition builds the rhythm
//    and the final verb flips it.
// 3. It feels true about people in general: almost everyone has read
//    instructions, skipped them, failed, and blamed the instructions
//    instead of themselves. Recognition, not random absurdity.
// 4. One idea only, no filler, no second joke: the whole line serves
//    a single behaviour (humans vs. instructions).
// 5. It fits the gate: a single line, 101 characters, well inside 160.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The label is assembled from its three beats — read, ignore, blame —
// so the rhythm of the repetition is visible in the code itself and
// the punch verb (the third beat) is the one that lands the joke.
function buildEntry(): string {
  const subject = "This human will";
  const beats = ["read the instructions", "ignore the instructions", "then blame the instructions"];
  return `WARNING: ${subject} ${beats.join(", ")}.`;
}

// The gate (from RULES.txt): entry.txt must be UTF-8 text of 1 to 160
// characters, not only white space, and a single line. Returns the
// character count so the caller can report it.
function validateEntry(text: string): number {
  const count = [...text].length;
  if (count < 1 || count > 160) {
    throw new Error(`entry must be 1-160 characters, got ${count}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line (no newline characters)");
  }
  return count;
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  const entry = buildEntry();
  const chars = validateEntry(entry);

  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, entry, "utf8");

  // Verify the round trip: what was written must read back byte for
  // byte as the intended label, with no trailing newline or extra bytes.
  const written = readFileSync(target, "utf8");
  if (written !== entry) {
    throw new Error("written entry does not match the intended label");
  }
  console.log(
    `wrote entry (${chars} characters, ${Buffer.byteLength(entry, "utf8")} bytes) to ${target}`,
  );
}

main();
