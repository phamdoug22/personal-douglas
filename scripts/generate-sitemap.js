const { writeFileSync } = require("fs");
const { join } = require("path");

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://douglaspham.com";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

const outputPath = join(process.cwd(), "public", "sitemap.xml");
writeFileSync(outputPath, sitemap, "utf-8");

console.log(`✅ Sitemap generated at ${outputPath}`);
