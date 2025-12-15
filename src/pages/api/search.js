import glob from "fast-glob";
import fs from "fs/promises";

export async function GET() {
  const files = await glob([
    "src/pages/**/*.{md,mdx,astro}",
    "src/content/**/*.{md,mdx}",
  ]);

  const index = [];

  for (const file of files) {
    let content = await fs.readFile(file, "utf-8");

    // hapus frontmatter
    content = content.replace(/---[\s\S]*?---/, "");

    const title =
      content.match(/^#\s+(.*)/m)?.[1] ||
      file.split("/").pop().replace(/\.(md|mdx|astro)/, "");

    index.push({
      title,
      text: content,
      path:
        "/" +
        file
          .replace(/^src\/pages/, "")
          .replace(/\.(md|mdx|astro)$/, ""),
    });
  }

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
}
