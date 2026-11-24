// Say What Actually Broke — entry program.
// Writes one single-line error message (124 chars) to /output/entry.txt.
// The line: a two-factor code rejected because the server clock runs one
// code window behind the user's clock — the code was right, just late.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const LINE =
  "Your code was right \u2014 thirty seconds ago. Our clock is one code behind yours, so wait for the next one. It's already judging you.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE + "\n", "utf8");
