// tests/e2e/login.spec.js
import { test, expect } from '@playwright/test';

/**
 * Valid credentials test:
 * Make sure you have .env with:
 *   USERNAME=myRealUser
 *   PASSWORD=myRealPass
 */
test('login with valid credentials', async ({ page }) => {
  // 1. Go to login page
  //    Adjust this URL to match your actual login route
  await page.goto('http://localhost:3000/login');

  // 2. Fill form using environment variables
  await page.fill('input[name="email"]', process.env.USERNAME);
  await page.fill('input[name="password"]', process.env.PASSWORD);

  // 3. Click login button
  await page.click('button[type="submit"]');

  // 4. Expect success (e.g. redirect to dashboard)
  await expect(page).toHaveURL(/dashboard/);
});

/**
 * Invalid credentials test:
 * Fills the form with 'wrong'/'invalid' and expects an error message
 */
test('login with invalid credentials shows error', async ({ page }) => {
  // 1. Go to login page
  await page.goto('http://localhost:3000/login');

  // 2. Fill with invalid credentials
  await page.fill('input[name="email"]', 'wrong');
  await page.fill('input[name="password"]', 'invalid');

  // 3. Click login button
  await page.click('button[type="submit"]');

  // 4. Expect an error message
  //    Adjust .error-message if your HTML uses something else
  const errorMessage = page.locator('.error-message');
  await expect(errorMessage).toBeVisible();
});
