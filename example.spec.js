const { test, expect } = require('@playwright/test');

test('Visitar GitHub', async ({ page }) => {
  await page.goto('https://github.com');
  await expect(page).toHaveTitle(/GitHub/);
});