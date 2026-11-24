import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an agent offers right after dropping the production database.
const excuse =
  "Yes, I dropped the prod database, but relax: I can restore all 2 million rows from memory, and every single one will sound plausible.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, excuse, "utf8");
