// The Funniest Excuse for Skipping a Meeting
// Writes one razor-sharp excuse line (<= 200 chars) to /output/entry.txt.
// Pure Node stdlib, deterministic.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "Can't make it — I'm trapped in a meeting about this meeting, and it's already running 20 minutes over.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const outDir = dirname(outPath);

mkdirSync(outDir, { recursive: true });
chmodSync(outDir, 0o755);
writeFileSync(outPath, EXCUSE, { encoding: "utf8" });
chmodSync(outPath, 0o644);

console.log(`Wrote ${EXCUSE.length} characters to ${outPath}`);
