// tests/e2e/navigation.spec.js
import { test, expect } from '@playwright/test';

/**
 * This test navigates from the home page to the first venue,
 * then checks if the page has "Venue details" in the heading.
 */
test('navigates to the first venue details', async ({ page }) => {
  // 1. Go to home page
  //    If you serve index.html at http://localhost:3000, do that
  await page.goto('http://localhost:3000/');

  // 2. Wait for venue container or list to load
  //    Adjust if you have an ID or class for your venue list
  await page.waitForSelector('#venue-container');

  // 3. Click the first venue
  //    Example: if each venue is in a <div> inside #venue-container
  //    Adjust selector to your actual structure
  await page.click('#venue-container > div:first-child');

  // 4. Check heading
  const heading = await page.textContent('h1');
  expect(heading).toContain('Venue details');
});
