import { test, expect } from "../fixture/fixture";

test.describe("Preferences", () => {
    test.beforeEach(async ({ page, preferencesPage }) => {
        await preferencesPage.open();
        if ((await page.locator("html").getAttribute("lang")) !== "en") {
            await preferencesPage.selectLanguage("en");
            await preferencesPage.save();
        }
        await expect(preferencesPage.heading).toHaveText("Preferences");
    });

    test.afterEach(async ({ page, preferencesPage }) => {
        await preferencesPage.open();
        if ((await page.locator("html").getAttribute("lang")) !== "en") {
            await preferencesPage.selectLanguage("en");
            await preferencesPage.save();
        }
        await expect(preferencesPage.heading).toHaveText("Preferences");
    });

    test("TC-01: authorized user can change interface language", async ({ page, preferencesPage }) => {
        await test.step("Open Preferences → User profile", async () => {
            await preferencesPage.open();
            await expect(preferencesPage.heading).toHaveText("Preferences");
            await preferencesPage.openTab("User profile");
            await expect(preferencesPage.languageInput).toBeVisible();
        });

        await test.step("Select Ukrainian in Internationalisation section", async () => {
            await preferencesPage.selectLanguage("uk");
            await expect(preferencesPage.languageInput).toHaveValue("українська");
        });

        await test.step("Save preferences", async () => {
            await preferencesPage.save();
        });

        await test.step("Interface is displayed in Ukrainian", async () => {
            await expect(page.locator("html")).toHaveAttribute("lang", "uk");
            await expect(preferencesPage.heading).toHaveText("Налаштування");
        });
    });
});
