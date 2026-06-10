import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('homepage renders the hero', async ({ page }) => {
    await page.goto('http://localhost:3000')

    await expect(page).toHaveTitle(/Flatirons AI/)

    const heading = page.locator('h1').first()
    await expect(heading).toContainText('Closed-loop AI')
  })

  test('platform page renders', async ({ page }) => {
    await page.goto('http://localhost:3000/platform')
    await expect(page.locator('h1').first()).toContainText('enterprise copilot')
  })

  test('solution pages render', async ({ page }) => {
    await page.goto('http://localhost:3000/solutions/state-banks')
    await expect(page.locator('h1').first()).toContainText('State and federal')
  })

  test('contact form is present', async ({ page }) => {
    await page.goto('http://localhost:3000/contact')
    await expect(page.locator('form #name')).toBeVisible()
    await expect(page.locator('form #email')).toBeVisible()
    await expect(page.locator('form button[type=submit]')).toBeVisible()
  })
})
