  // tests/lighthouse.spec.ts
  import { test, expect } from '@playwright/test';
  import { playAudit } from 'playwright-lighthouse';

  test('Lighthouse audit for homepage', async ({ page }) => {
    await page.goto('YOUR_APPLICATION_URL'); // Replace with your application's URL

    await playAudit({
      page,
      thresholds: {
        performance: 50, // Example threshold
        accessibility: 90,
        'best-practices': 90,
        seo: 90,
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