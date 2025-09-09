import { expect, Locator, Page, TestInfo } from '@playwright/test'


export class compraPage {
  readonly page: Page

  readonly locators = {
    busqueda: "Gaseosa Pet 400 Ml",
    searchInput: 'input.block.w-full.text-sm',
    iconLupa: 'button[aria-label="Buscar"]'
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

  async busqueda() {
    const searchInput = this.page.locator(this.locators.searchInput);
    await searchInput.fill(this.locators.busqueda);
    this.page.locator(this.locators.iconLupa).click();
  }
}