import { Pilot } from "@Types/SWSearch";

const swFetcher = () => {
    const url: string = "https://swapi.dev/api";

    async function fetchStarshipsWithReqs(maxCost: number, minHDRating: number) {
        let response = await fetch(`${url}/starships`);
        let data = await response.json();
        let starships = [...data.results]
        while (data.next !== null) {
            response = await fetch(data.next);
            data = await response.json();
            starships = [...starships, ...data.results]
        }
        return starships
            .filter(e => parseInt(e.cost_in_credits, 10) <= maxCost * 1000)
            .filter(e => parseFloat(e.hyperdrive_rating) >= minHDRating);
    }

    async function fetchPilot(pilot: Pilot) {
        const response = await fetch(`${url}/people/?search=${pilot}`);
        const data = await response.json();
        return data.results[0];
    }

    const getStarshipsWithReqs = (maxCost: number, minHDRating: number) => {
        return wrapPromise(fetchStarshipsWithReqs(maxCost, minHDRating));
    }
    const getPilot = (pilot: Pilot) => {
        return wrapPromise(fetchPilot(pilot));
    }

    return {
        getStarshipsWithReqs,
        getPilot,
    }
};

// Note: this is a simplified implementation of Suspense-friendly fetching such as Relay and React Query
// It should not be used for production.
// Origin: https://www.telerik.com/blogs/render-as-you-fetch-with-react-suspense
function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
        (r) => {
            status = "success";
            result = r;
        },
        (e) => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        },
    };
}

export default swFetcher();