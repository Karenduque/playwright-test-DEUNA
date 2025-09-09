import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ 
    headless: false,       // Hace que el navegador sea visible
    channel: 'chrome'      // Usa Chrome en lugar del Chromium por defecto
  });
  const page = await browser.newPage();
  await page.goto('https://github.com');

  // Mantiene abierto el navegador
   await browser.close(); // Cierra cuando desees
})();