
const puppeteer = require('puppeteer');

let browser;
let page;

async function setupBrowser() {
  browser = await puppeteer.launch();
}

async function teardownBrowser() {
  await browser.close();
}

async function createPage() {
  page = await browser.newPage();
}

async function closePage() {
  await page.close();
}

async function visit(url) {
  await page.goto(url);
}

async function fillField(selector, value) {
  await page.type(selector, value);
}

async function click(selector) {
  await page.click(selector);
}

async function seeElement(selector) {
  await page.waitForSelector(selector);
}

async function dontSeeElement(selector) {
  try {
    await page.waitForSelector(selector, { timeout: 1000 });
    throw new Error(`Element ${selector} is visible`);
  } catch (error) {
    // Element not found, so it's not visible
    return;
  }
}

module.exports = {
  setupBrowser,
  teardownBrowser,
  createPage,
  closePage,
  visit,
  fillField,
  click,
  seeElement,
  dontSeeElement,
};
