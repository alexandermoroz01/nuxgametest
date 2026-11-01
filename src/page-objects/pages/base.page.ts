import { Page } from "@playwright/test";
import { HeaderMenuComponent } from "../components/header-menu.component";

export abstract class BasePage {
    protected abstract readonly path: string;
    readonly headerMenu: HeaderMenuComponent;

    constructor(protected readonly page: Page) {
        this.headerMenu = new HeaderMenuComponent(page);
    }

    async open(): Promise<void> {
        await this.page.goto(this.path);
    }
}
