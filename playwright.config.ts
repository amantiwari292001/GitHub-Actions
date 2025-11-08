import { defineConfig } from "@playwright/test";
import { urls } from "./data/urls/urls";

export default defineConfig({
  //Test project configuration.
  testDir: './tests',
  timeout: 50_000,
  expect: { timeout: 5000 },
  workers: 2,
  projects: [{ name: 'Chrome', use: { browserName: 'chromium' } }],
  reporter: [['html', { open: 'always' }]],
  outputDir: 'test-results/',
  globalSetup: "./support/global-setup",
  //Control browser behaviour.
  use: {
    headless: true,
    viewport: {width: 1280, height: 720},
    baseURL: urls.baseURL,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  }
});