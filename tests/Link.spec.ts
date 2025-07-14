import { test } from '@playwright/test';
import { Link } from '../pages/link';

test('Login with valid user', async ({ page }) => {
  const loginPage = new Link(page);
  await loginPage.gotoLoginPage();
  await loginPage.login(); // Defaults to valid credentials
});
