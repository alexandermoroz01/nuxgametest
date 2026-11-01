import { BasePage } from "./base.page";
import { Locator } from "@playwright/test";

export class LoginPage extends BasePage {
    protected readonly path = "/wiki/Special:UserLogin";

    readonly usernameInput: Locator = this.page.locator("input#wpName1");
    readonly passwordInput: Locator = this.page.locator("input#wpPassword1");
    readonly logInButton: Locator = this.page.locator("button#wpLoginAttempt");

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.logInButton.click();
    }
}
