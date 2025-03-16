// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Tells Vitest to ignore the e2e folder
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/tests/e2e/**', // ignore E2E tests
    ],
  },
});
