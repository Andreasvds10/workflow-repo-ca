// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  testMatch: ['**/*.e2e.js'],
  timeout: 30000, // Set a reasonable timeout for tests
  expect: {
    timeout: 10000, // Increase timeout for expect statements
  },
  use: {
    baseURL: 'http://localhost:3000', // Ensure this matches your actual local server URL
    headless: true, // Run tests in headless mode for CI/CD
    trace: 'on-first-retry', // Collect trace when retrying a failed test
    screenshot: 'only-on-failure', // Capture screenshots on failures
    video: 'retain-on-failure', // Record video on test failure
  },
  reporter: [['html', { outputFolder: 'test-results' }]], // Save test reports
  retries: 2, // Retry failed tests twice before marking as failed
  workers: 2, // Use 2 workers to run tests in parallel
});
