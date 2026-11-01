import { test as base } from "@playwright/test";
import { PreferencesPage } from "../page-objects/pages/preferences.page";

type Pages = {
    preferencesPage: PreferencesPage;
};

export const test = base.extend<Pages>({
    preferencesPage: async ({ page }, use) => {
        await use(new PreferencesPage(page));
    },
});

export { expect } from "@playwright/test";
