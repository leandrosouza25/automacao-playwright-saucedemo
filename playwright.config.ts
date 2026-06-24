/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!(process && process.env && process.env.CI),

  retries: (process && process.env && process.env.CI) ? 2 : 0,

  workers: (process && process.env && process.env.CI) ? 1 : undefined,

  reporter: 'html',

  use: {
    baseURL: 'https://jsonplaceholder.typicode.com',

    trace: 'on',
    screenshot: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});