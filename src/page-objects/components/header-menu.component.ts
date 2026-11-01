import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./base.component";

export class HeaderMenuComponent extends BaseComponent {
    readonly username: Locator;
    constructor(page: Page) {
        super(page, page.locator(".vector-header-container header"));
        this.username = this.root.locator("li#pt-userpage-2");
    }
}
