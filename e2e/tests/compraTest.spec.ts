import { test } from "@playwright/test";
import { compraPage } from "../pages/compra.page";

test.describe("Compra en KFC", () => {
  test.beforeEach(async ({ page }) => {
    let compra_in_page = new compraPage(page);
    await compra_in_page.goTokfc();
  });

  test(
    "Busqueda",
    {

    },
    async ({ page }) => {
      let compra_in_page = new compraPage(page);
      await compra_in_page.busqueda();
      await page.pause();
      test.slow();
    });


});