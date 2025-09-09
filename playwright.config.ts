import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'e2e/tests',

  // Run all tests in parallel.
  fullyParallel: true,

  // Configure projects for major browsers.
  use:
  {
    headless: true,

  },


  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});


