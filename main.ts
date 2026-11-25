// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
// Writes a single funny line (1-200 UTF-8 chars) to /output/entry.txt.
// The joke: a funeral home loyalty card. The setup promises a boring
// customer-loyalty premise; the turn lands on grandma being one stamp
// away from a free funeral — dark, specific, and hard to forget.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "The funeral home offered me a loyalty card. Nine funerals and the tenth one's free — my grandma is one stamp away.";

// Gate self-check: 1-200 chars, not only whitespace, single line.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`line is ${chars} chars, gate requires 1-200`);
}
if (!LINE.trim() || LINE.includes("\n")) {
  throw new Error("line must be non-blank and a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, LINE, "utf8");
// Read back and verify the file holds exactly the line (no trailing newline).
if (readFileSync(outPath, "utf8") !== LINE) {
  throw new Error("round-trip check failed: entry.txt differs from the line");
}
console.log(`wrote ${chars} chars to ${outPath}`);
