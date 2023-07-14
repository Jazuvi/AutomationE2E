import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Text Input' }).click();
  await page.getByRole('heading', { name: 'Text Input' }).click();
  await page.getByPlaceholder('MyButton').click();
  await page.getByPlaceholder('MyButton').fill('Misael');
  await page.getByRole('button', { name: 'Button That Should Change it\'s Name Based on Input Value' }).click();
  await expect(page.getByRole('button', { nane:'Misael' })).toBeVisible();
});