import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.js", readFileSync("src/index.js"));
console.log("Built dist/index.js");
