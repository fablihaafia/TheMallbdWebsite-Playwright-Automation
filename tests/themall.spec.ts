import { test, expect } from '@playwright/test';

test('Automate themallbd.com', async ({ page }) => {
  // await page.goto('https://www.themallbd.com');
  await page.goto('https://www.themallbd.com', { waitUntil: 'domcontentloaded', timeout: 60000 });

  await page.setViewportSize({ width: 1280, height: 800 });

  // Close initial popup if appears
  const closePopup = page.locator('button.close');
  if (await closePopup.isVisible()) {
    await closePopup.click();
  }

  // Click logo
  await page.locator('.brand-logo').click();

  // Search for "ordinary"
  const search = page.locator('#search-box');
  await search.fill('ordinary');
  await search.press('Enter');

  // Hide sticky nav
  await page.evaluate(() => {
    const el = document.querySelector('li.megamenu-parrent.mx-2.py-0.py-xl-3');
    if (el) el.setAttribute('style', 'display: none');
  });

  // // Scroll down
  await page.evaluate(() => window.scrollBy(0, 205));

  // // Click product
  await page.locator("a:has-text('The Ordinary Glycolic Acid 7% Exfoliating Toner 100ml')").click();

  // // Click add to cart
  await page.locator('button.addToCart').click();

  // // Click Makeup menu
  await page.locator("xpath=(//a/span[contains(text(),'Makeup')])").click();
  await page.evaluate(() => window.scrollBy(0, 1000));

  // // Click Oily Skin checkbox
  await page.locator('input.cls_skintype_oily_skin').click();

  // // Click Buy 1 Get 1
  await page.locator("xpath=(//li/a[contains(text(),'Buy 1 Get 1')])").click();
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // // Click Fragrance
  await page.locator("xpath=(//a/span[contains(text(),'Fragrance')])").click();
  await page.evaluate(() => window.scrollBy(0, 554));

  // // Click fragrance product
  await page.locator("a:has-text('Nivea Men Fresh Active Antibacterial Roll on 50ml')").click();

  // // Click Add to Wishlist
  await page.locator('button.addToWish').click();

  // // Click wishlist icon
  await page.locator("xpath=//a[@class='link d-flex align-items-center mx-0 mx-lg-2']//img[1]").click();

  // // Click Sale
  await page.locator("xpath=(//li/a[contains(text(),'Sale')])").click();
  await page.evaluate(() => window.scrollBy(0, 1376));

  // // Click Sale product
  await page.locator("a:has-text('Sudocrem Antiseptic Healing Cream 125g')").click();

  // Click increase quantity
  await page.locator("xpath=//div[contains(@class,'mt-3 d-flex')]//div[2]//img[1]").click();

  // Add to cart again
  await page.locator('button.addToCart').click();

  // Click checkout
  await page.locator('#checkout-btn-desktop').click();

  // Delete first item
  await page.locator("xpath=(//img[@class='delete-btn position-absolute removeToCart'])[1]").click();

  // Close cart popup
  await page.locator("xpath=(//button[@class='cross-btn btn mt-2'])[1]").click();

  // Checkout again
  await page.locator('#checkout-btn-desktop').click();

  // Click proceed
  await page.locator("xpath=(//a[contains(text(),'PROCEED')])").click();
});
