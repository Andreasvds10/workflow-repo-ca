// tests/e2e/navigation.e2e.js
import { test, expect } from '@playwright/test';

/**
 * This test navigates from the home page to the first venue,
 * then checks if the page has "Venue details" in the heading.
 */
test('navigates to the first venue details', async ({ page }) => {
  // 1. Go to home page
  await page.goto('/'); // Uses baseURL from config

  // 2. Wait for venue container or list to load
  await page.waitForSelector('#venue-container');

  // 3. Click the first venue
  await page.click('#venue-container > div:first-child');

  // 4. Check heading
  const heading = await page.textContent('h1');
  expect(heading).toContain('Venue details');
});
