import swFetcher from "./swFetcher";
import { pilotOptions } from '@Types/SWSearch';

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