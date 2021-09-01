enum Pilots {
    "Luke Skywalker", "Obi-Wan Kenobi", "Anakin Skywalker", "Chewbacca", "Han Solo"
}
export type Pilot = keyof typeof Pilots;
export const pilotOptions = Object.values(Pilots).filter(value => isNaN(Number(value))).map(value => value as Pilot);

export type SWSearch = {
    budget: number,
    minHDRating: number,
    preferredPilot: Pilot | "",
}

export const defaultSWSearch: SWSearch = {
    budget: 200,
    minHDRating: 1.0,
    preferredPilot: "Luke Skywalker"
};