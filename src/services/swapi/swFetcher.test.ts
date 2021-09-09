import swFetcher from "./swFetcher";
import { pilotOptions } from '@Types/SWSearch';

/* 
Jest doesn't properly support ECMAScript Modules import/export yet (I tried
following their directions, but couldn't make it work), so I will either have to
wait or find another testing framework.

So far the plan was to implement Puppeteer with Jest, as seen in the following
Academind video:
https://www.youtube.com/watch?v=r9HdJ8P6GQI&ab_channel=Academind 

But I don't know if Puppeteer works without Jest. More research needed.
*/

test("swFetcher should be able to fetch all pilots", async () => {
    await Promise.all(pilotOptions.map(p => {
        const pilot = swFetcher.getPilot(p).read();
        expect(pilot).toHaveProperty("name");
        expect(pilot).toHaveProperty("height");
        expect(pilot).toHaveProperty("mass");
        expect(pilot).toHaveProperty("birth_year");
        expect(Array.isArray(pilot.vehicles)).toBe(true);
        expect(Array.isArray(pilot.starships)).toBe(true);
    }));
});