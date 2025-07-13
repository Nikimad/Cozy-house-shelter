import fs from "fs";
import path from "path";
import { breakpoints } from "../src/styles/breakpoints";

const outputDir = path.resolve("src/generated_styles");
const outputFile = path.join(outputDir, "_breakpoints.scss");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const lines = Object.entries(breakpoints).map(
  ([key, value]) => `$${key}: ${value}px;`
);

const content = lines.join("\n");

fs.writeFileSync(outputFile, content);
console.log("Breakpoints SCSS generated at:", outputFile);
