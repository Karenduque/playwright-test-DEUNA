import { test } from "@playwright/test";
import { compraPage } from "../pages/compra.page";

test.describe("Automatización del Flujo de Compra", () => {
  test.beforeEach(async ({ page }) => {
    let compra_in_page = new compraPage(page);
    await compra_in_page.goTokfc();
  });

  test(
    "Compra en KFC",
    {

    },
    async ({ page }) => {
      let compra_in_page = new compraPage(page);
      await compra_in_page.buscarProducto();
      await compra_in_page.seleccionarProducto();
      await compra_in_page.pagarProducto();
      await page.pause();
      test.slow();
    });


});