// One-Sentence Absurd Invention Pitch — the entry is a single sentence about
// a fridge light that has joined a union and gone on strike after midnight.
// The laugh comes from the invention itself: a light that refuses to work.

import * as fs from "node:fs";
import * as path from "node:path";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const pitch = "A fridge light that unionized and refuses to switch on after midnight, forcing midnight snackers to grope for leftovers in the dark.";

fs.mkdirSync(targetDir, { recursive: true });
fs.writeFileSync(path.join(targetDir, "entry.txt"), pitch, "utf8");

// Gate check: the pitch is 132 characters — one sentence, inside 1–220.
