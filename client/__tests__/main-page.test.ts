import puppeteer from 'puppeteer';

describe('Integration tests > MainPage', () => {
    let browser: puppeteer.Browser;
    beforeAll(async () => {
        browser = await puppeteer.launch();
    });

    afterAll(async () => {
        await browser.close();
    });

    it('should render main page with default data', async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:9009');
        const image = await page.screenshot({
            fullPage: true,
        });

        expect(image).toMatchImageSnapshot();
    });
});
