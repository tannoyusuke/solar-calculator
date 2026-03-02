import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

(async () => {
    console.log("Starting browser...");
    const browser = await puppeteer.launch({
        headless: 'new',
        defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 }
    });
    const page = await browser.newPage();

    // We want the website to look exactly like the screen, not a typical "print" layout
    await page.emulateMediaType('screen');

    // Pages to capture
    const pages = [
        { url: 'http://localhost:3005/', name: '01_Home' },
        { url: 'http://localhost:3005/about', name: '02_About' },
        { url: 'http://localhost:3005/services', name: '03_Services' },
        { url: 'http://localhost:3005/portfolio', name: '04_Portfolio' },
        { url: 'http://localhost:3005/case-study', name: '05_CaseStudy' },
        { url: 'http://localhost:3005/recruit', name: '06_Recruit' },
    ];

    const pdfBuffers = [];

    for (const p of pages) {
        console.log(`Processing ${p.name}...`);
        try {
            await page.goto(p.url, { waitUntil: 'networkidle0', timeout: 60000 });

            // Allow framer-motion initial animations to settle
            await new Promise(r => setTimeout(r, 2000));

            // Scroll down slowly to trigger all WhileInView animations
            await page.evaluate(async () => {
                await new Promise((resolve) => {
                    let totalHeight = 0;
                    let distance = 600;
                    let timer = setInterval(() => {
                        let scrollHeight = document.body.scrollHeight;
                        window.scrollBy(0, distance);
                        totalHeight += distance;

                        if (totalHeight >= scrollHeight - window.innerHeight) {
                            clearInterval(timer);
                            resolve();
                        }
                    }, 250);
                });
            });

            // Wait a bit more for the final animations to render
            await new Promise(r => setTimeout(r, 2000));

            // Scroll back to the top for the PDF capture
            await page.evaluate(() => {
                window.scrollTo(0, 0);
            });
            await new Promise(r => setTimeout(r, 500));

            // Generate PDF for this page with A3 format for better width fit
            const pdfBuffer = await page.pdf({
                format: 'A3',
                printBackground: true,
                margin: { top: 0, right: 0, bottom: 0, left: 0 }
            });

            pdfBuffers.push(pdfBuffer);
            console.log(`✓ Captured ${p.name}`);
        } catch (err) {
            console.error(`Failed to capture ${p.name}:`, err);
        }
    }

    console.log("Closing browser...");
    await browser.close();

    if (pdfBuffers.length > 0) {
        console.log("Merging PDFs into one...");
        const mergedPdf = await PDFDocument.create();
        for (const pdfBytes of pdfBuffers) {
            const pdf = await PDFDocument.load(pdfBytes);
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            copiedPages.forEach((page) => {
                mergedPdf.addPage(page);
            });
        }

        const outputPath = path.join(process.cwd(), 'Tryfunds_Website_Overview.pdf');
        const mergedPdfFile = await mergedPdf.save();
        fs.writeFileSync(outputPath, mergedPdfFile);
        console.log(`Successfully created: ${outputPath}`);
    } else {
        console.log("No PDFs were generated to merge.");
    }
})();
