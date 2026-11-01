import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/pages/login.page";

const authFile = "playwright/.auth/user.json";

setup("auth", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(process.env.WIKI_USERNAME!, process.env.WIKI_PASSWORD!);

    await page.waitForURL(/en\.wikipedia\.org/);
    await expect(loginPage.headerMenu.username).toHaveText(process.env.WIKI_USERNAME!);
    await page.context().storageState({ path: authFile });
});
