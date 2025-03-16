// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Folder containing your E2E tests
  testDir: 'tests/e2e',

  // Explicitly match *.e2e.js files
  testMatch: ['**/*.e2e.js'],

  // Optional: if you're using ESM (type: "module"), you may need:
  // use: {
  //   trace: 'on-first-retry', // example Playwright config
  // },
});
