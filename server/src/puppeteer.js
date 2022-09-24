const puppeteer = require('puppeteer');

(async () =>
{
    try
    {
        // create a browser with Puppeteer
        const browser = await puppeteer.launch();

        // open a page to use for site navigation
        const page = await browser.newPage();

        /*
         * Test common browser widths...
         */

        // 1920 View
        await page.setViewport({width: 1920, height: 1080});
        await page.goto(`http://localhost:3001/#/AppPage/`);
        await page.screenshot({path: './puppeteer_results/AppPage1920.png'});

        // 1280 View
        await page.setViewport({width: 1280, height: 800});
        await page.goto(`http://localhost:3001/#/AppPage/`);
        await page.screenshot({path: './puppeteer_results/AppPage1280.png'});

        // 962 View
        await page.setViewport({width: 962, height: 601});
        await page.goto(`http://localhost:3001/#/AppPage/`);
        await page.screenshot({path: './puppeteer_results/AppPage0962.png'});

        // 800 View
        await page.setViewport({width: 800, height: 1280});
        await page.goto(`http://localhost:3001/#/AppPage/`);
        await page.screenshot({path: './puppeteer_results/AppPage0800.png'});

        // 768 View
        await page.setViewport({width: 768, height: 1024});
        await page.goto(`http://localhost:3001/#/AppPage/`);
        await page.screenshot({path: './puppeteer_results/AppPage0768.png'});

        // 601 View
        await page.setViewport({width: 601, height: 962});
        await page.goto(`http://localhost:3001/#/AppPage/`);
        await page.screenshot({path: './puppeteer_results/AppPage0601.png'});

        await browser.close();
    }
    catch (e)
    {
        console.log(e);
    }

})();
