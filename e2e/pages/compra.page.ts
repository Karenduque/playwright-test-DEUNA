import { expect, Locator, Page, TestInfo } from '@playwright/test'


export class compraPage {
  readonly page: Page

  readonly locators = {
    busqueda: "Gaseosa Pet 400 Ml",
    searchInput: 'input.block.w-full.text-sm',
    iconLupa: 'button[aria-label="Buscar"]',
    agregarButton: 'button.bg-primary',
    imagePepsi: 'img[alt="Gaseosa Pet 400 Ml"]',
    carritoIcon: 'div.relative.rounded-full.flex.items-center.justify-center.bg-cream',
    pagarButton: '#open-checkout-button'
  }


  /**
  * Constructor to initialize locators.
  * @param page page instance.
  */
  constructor(page: Page) {
    this.page = page
  }

  async goTokfc() {
    await this.page.goto('https://www.kfc.co/');

  }

  async buscarProducto() {
    const searchInput = this.page.locator(this.locators.searchInput);
    await searchInput.fill(this.locators.busqueda);
    this.page.locator(this.locators.iconLupa).dblclick();
    await searchInput.press('Enter');
    const heading = this.page.locator('text=Resultados para "Gaseosa Pet 400 Ml"');
    await expect(heading).toBeVisible();
  }

  async seleccionarProducto() {
    this.page.locator(this.locators.imagePepsi).click();
    const pespsiBlack = this.page.locator('label', { hasText: 'Pepsi Black' });
    await pespsiBlack.click();
    this.page.locator(this.locators.agregarButton).click();
    this.waitForProgressbar();
    const product = this.page.locator(this.locators.carritoIcon)
    await expect(product).toBeVisible({ timeout: 5000 });
    await expect(product).toHaveText(/1/);
    this.page.locator(this.locators.carritoIcon).click();
  }
  async pagarProducto() {
    const pagarButton = this.page.locator(this.locators.pagarButton)
    await expect(pagarButton).toBeInViewport();
    await pagarButton.scrollIntoViewIfNeeded();
    this.page.locator(this.locators.pagarButton).click();

  }

  async waitForProgressbar() {
    let progressBarLocators = this.page.getByRole("progressbar").filter({
      hasNot: this.page.locator(
        'xpath=ancestor::div[contains(@infinite-scroll-distance,"heightAdditional")]'
      ),
    });
    if ((await progressBarLocators.count()) > 0)
      await expect(progressBarLocators).toHaveCount(0);
  }
}