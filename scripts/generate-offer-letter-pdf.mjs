import puppeteer from "puppeteer";
import path from "node:path";

const role = process.argv[2] || "ASM";
const outputPath =
  process.argv[3] || path.resolve(process.cwd(), `offer-letter-${role}.pdf`);
const url = process.argv[4] || "http://localhost:3000/offer-letter";

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 2200, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle0" });

  // Role selector exists in the controls panel; keep default if unavailable.
  try {
    await page.select('select', role);
    await page.waitForTimeout(150);
  } catch {}

  await page.emulateMediaType("print");
  await page.waitForSelector(".offer-letter-pages .pdf-page", {
    timeout: 15000,
  });
  await page.evaluate(() => document.fonts?.ready);

  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: "0mm",
      right: "0mm",
      bottom: "0mm",
      left: "0mm",
    },
  });

  console.log(`PDF generated: ${outputPath}`);
} finally {
  await browser.close();
}
