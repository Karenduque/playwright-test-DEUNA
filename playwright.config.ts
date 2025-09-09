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
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    // Timeout per action (like click) = 60 seconds
    actionTimeout: 60 * 1000,
    // Timeout per navigation = 300 seconds
    navigationTimeout: 300 * 1000,
    video: "on",

  },


  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          args: ["--start-maximized"],
        },
      },
    },
  ],

});


