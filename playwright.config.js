const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,

  reporter: 'html', 

  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: true,
    slowMo: 500,
    trace: 'on',
    screenshot: 'on',
    video: 'on',

    storageState: undefined,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--disable-autofill', '--disable-password-manager'],
        },
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
});
