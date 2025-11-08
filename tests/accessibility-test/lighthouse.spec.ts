  // tests/lighthouse.spec.ts
  import { test, expect } from '@playwright/test';
  import { playAudit } from 'playwright-lighthouse';
import { urls } from '../../data/urls/urls';

  test('Lighthouse audit for homepage', async ({ page }) => {
    await page.goto(urls.baseURL); // Replace with your application's URL

    await playAudit({
      page,
      thresholds: {
        performance: 50, // Example threshold
        accessibility: 50,
        'best-practices': 90,
        seo: 50,
        pwa: 0,
      },
      port: 9222, // Use a free port
      // Optional: output options for reports
      // output: 'html',
      // formFactor: 'mobile',
      // screenEmulation: {
      //   mobile: true,
      //   width: 360,
      //   height: 640,
      //   deviceScaleFactor: 2,
      // },
    });
  });