import { BasePage } from "./base.page";
import { Locator } from "@playwright/test";

export class PreferencesPage extends BasePage {
    protected readonly path = "/wiki/Special:Preferences";

    readonly languageInput: Locator = this.page.locator("div.mw-widgets-languageSelectWidget-vue-container input");
    readonly saveButton: Locator = this.page.locator("#prefcontrol");
    readonly heading: Locator = this.page.locator("h1#firstHeading");

    async openTab(name: string): Promise<void> {
        await this.page.getByRole("tab", { name }).click();
    }

    async selectLanguage(code: string): Promise<void> {
        await this.languageInput.fill(code);
        await this.page.getByRole("option", { name: new RegExp(`^${code} · `) }).click();
    }

    async save(): Promise<void> {
        await this.saveButton.click();
    }
}
