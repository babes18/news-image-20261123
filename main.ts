// News-image entry for Monday 23 November 2026 (Node 22, standard library only).
//
// The entry is a newspaper front page summing up the day's world news:
// COP31 collapses in Antalya, the AI stock sell-off sinks Asia's markets
// (Nikkei -5.06%), a 7-year-old boy is pulled alive from the rubble in
// Dymer, Ukraine, tankers burn near the Strait of Hormuz, and the Democrats
// win their biggest House majority since 1992.
//
// The program copies the image the repository holds to the grader's output
// path. The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024
// pixels, and the judge sees exactly the bytes copied. Deterministic: a plain
// file copy, the same bytes on every run. No network, no dependencies.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = new URL("./entry.jpg", import.meta.url);
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
// Verify the copy landed whole: a silent short write would hand the judge
// a truncated image. Fail loudly instead of passing bad bytes on.
const bytes = statSync(dest).size;
if (bytes !== statSync(src).size) {
  throw new Error(`entry.png size mismatch after copy: ${bytes} bytes`);
}
console.log(`wrote ${dest} (${bytes} bytes)`);
