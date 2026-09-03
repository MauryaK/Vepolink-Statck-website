const fs = require("fs");
const path = require("path");
const shared = require("../assets/shared-ui.js");

const root = path.resolve(__dirname, "..");
const ignoredDirectories = new Set([".agents", ".git", "_preserved", "node_modules"]);

const findSharedPages = (directory, relativeDirectory = "") =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.join(relativeDirectory, entry.name);
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return ignoredDirectories.has(entry.name)
        ? []
        : findSharedPages(absolutePath, relativePath);
    }

    if (!entry.isFile() || path.extname(entry.name) !== ".html") {
      return [];
    }

    const html = fs.readFileSync(absolutePath, "utf8");
    return html.includes("<site-header") && html.includes("<site-footer")
      ? [relativePath]
      : [];
  });

const pages = findSharedPages(root);

const normalizeSharedMarkup = (markup) => markup.replace(/[ \t]+$/gm, "");
const header = `<site-header>${normalizeSharedMarkup(shared.renderHeader())}</site-header>`;
const footer = `<site-footer>${normalizeSharedMarkup(shared.renderFooter())}</site-footer>`;
const marquee = shared.renderPartnerMarquee();

const replaceBlock = (html, tagName, replacement) => {
  const pattern = new RegExp(`<${tagName}[^>]*>[\\s\\S]*?<\\/${tagName}>`, "i");
  if (!pattern.test(html)) {
    throw new Error(`Missing <${tagName}> block`);
  }
  return html.replace(pattern, replacement);
};

const replacePartnerMarquee = (html) => {
  const pattern = /<div class="partner-marquee"[\s\S]*?<\/div>\s*<\/div>/i;
  if (!pattern.test(html)) {
    return html;
  }
  return html.replace(pattern, marquee.trim());
};

for (const page of pages) {
  const filePath = path.join(root, page);
  let html = fs.readFileSync(filePath, "utf8");
  html = replaceBlock(html, "site-header", header);
  html = replaceBlock(html, "site-footer", footer);
  html = replacePartnerMarquee(html);
  fs.writeFileSync(filePath, html);
}
