import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const publicDir = path.resolve("public");

// ── OG IMAGE (1200 × 630) ─────────────────────────────────────────────────
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#1A0E08"/>
  <circle cx="1060" cy="315" r="290" fill="rgba(192,57,43,0.18)"/>
  <circle cx="1150" cy="80" r="160" fill="rgba(192,57,43,0.12)"/>
  <circle cx="160" cy="580" r="130" fill="rgba(192,57,43,0.08)"/>
  <rect x="0" y="0" width="8" height="630" fill="#C0392B"/>
  <text x="80" y="210" font-family="Georgia,serif" font-size="96" font-weight="bold" fill="#FFFFFF">BrandVibe</text>
  <text x="84" y="268" font-family="Arial,Helvetica,sans-serif" font-size="18" fill="rgba(255,255,255,0.5)" letter-spacing="7">STRATEGY  ·  SYSTEMS  ·  GROWTH</text>
  <rect x="80" y="300" width="380" height="2" fill="#C0392B"/>
  <text x="80" y="368" font-family="Arial,Helvetica,sans-serif" font-size="34" fill="rgba(255,255,255,0.88)">Full-Service Branding &amp;</text>
  <text x="80" y="418" font-family="Arial,Helvetica,sans-serif" font-size="34" fill="rgba(255,255,255,0.88)">Marketing Agency</text>
  <text x="80" y="492" font-family="Arial,Helvetica,sans-serif" font-size="22" fill="rgba(255,255,255,0.38)">Nairobi, Kenya  ·  brandvibe.co.ke</text>
</svg>`;

// ── FAVICON SVG (square) ──────────────────────────────────────────────────
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="80" fill="#1A0E08"/>
  <text x="50%" y="54%" font-family="Georgia,serif" font-size="280" font-weight="bold"
        fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">B</text>
  <text x="50%" y="54%" font-family="Georgia,serif" font-size="280" font-weight="bold"
        fill="#C0392B" text-anchor="middle" dominant-baseline="middle" dx="165" dy="-10">V</text>
</svg>`;

async function run() {
  // 1 — OG image PNG
  console.log("Generating og-image.png…");
  await sharp(Buffer.from(ogSvg))
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(publicDir, "og-image.png"));

  const { size } = await fs.stat(path.join(publicDir, "og-image.png"));
  const meta = await sharp(path.join(publicDir, "og-image.png")).metadata();
  console.log(`  ✓ og-image.png  ${meta.width}×${meta.height}  ${(size / 1024).toFixed(0)} KB`);

  // 2 — apple-touch-icon.png (180×180)
  console.log("Generating apple-touch-icon.png…");
  await sharp(Buffer.from(faviconSvg))
    .resize(180, 180)
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDir, "apple-touch-icon.png"));
  console.log("  ✓ apple-touch-icon.png  180×180");

  // 3 — favicon-32.png → used for favicon.ico substitute
  console.log("Generating favicon.ico (32×32 PNG)…");
  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDir, "favicon.ico"));
  console.log("  ✓ favicon.ico  32×32");

  // 4 — favicon-192 for PWA manifest (bonus)
  await sharp(Buffer.from(faviconSvg))
    .resize(192, 192)
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDir, "favicon-192.png"));
  console.log("  ✓ favicon-192.png  192×192");

  console.log("\nImage generation complete.");
}

run().catch((e) => { console.error(e); process.exit(1); });
