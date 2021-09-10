import swFetcher from "./swFetcher";
import { pilotOptions } from '@Types/SWSearch';

export default function swFetcher_test() {
    describe("swFetcher", () => {
        it("should be able to fetch all pilots", () => {
            cy.wrap(async () => {
                await Promise.all(pilotOptions.map(p => {
                    const pilot = swFetcher.getPilot(p).read();
                    expect(pilot).to.be.an('object')
                        .that.has.all.keys('name', 'height', 'mass', 'birth_year');
                    expect(pilot.vehicles).to.be.an('array');
                    expect(pilot.starships).to.be.an('array');
                }));
            });
        });
    });
}