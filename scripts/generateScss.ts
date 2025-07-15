import fs from "fs";
import path from "path";
import { breakpoints } from "../src/styles/breakpoints";
import { variables } from "../src/styles/variables";

const generateScss = (
  outputFileName: string,
  origin: { [key: string]: string | number },
  convertToPx: boolean,
  msg: string
) => {
  const outputDir = path.resolve("src/generated_styles");
  const outputFile = path.join(outputDir, outputFileName);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const lines = Object.entries(origin).map(
    ([key, value]) => `$${key}: ${value}${convertToPx ? "px" : ""};`
  );

  const content = lines.join("\n");

  fs.writeFileSync(outputFile, content);
  console.log(msg, outputFile);
};

generateScss(
  "_breakpoints.scss",
  breakpoints,
  true,
  "Breakpoints SCSS generated at:"
);
generateScss(
  "_variables.scss",
  variables,
  true,
  "Variables SCSS generated at:"
);
