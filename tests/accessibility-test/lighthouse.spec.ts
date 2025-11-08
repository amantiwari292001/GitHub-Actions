import { test, expect } from '@playwright/test';
import { urls } from '../../data/urls/urls';

test('Lighthouse audit for homepage', async ({ page }) => {
  await page.goto(urls.baseURL); // Replace with your application's URL

  // dynamically import the ESM-only module
  const { playAudit } = await import('playwright-lighthouse');

  await playAudit({
    page,
    thresholds: {
      performance: 50,
      accessibility: 50,
      'best-practices': 90,
      seo: 50,
      // removed 'pwa' because current Lighthouse doesn't recognize that category
    },
    port: 9222,
  });
});