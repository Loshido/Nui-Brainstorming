const TOKEN = "cadfd7cc6d8c8b237890cd97a739c0ea"
const ETAT = "FR";
const REGION = "Provence-Alpes-Côte d'Azur"

export interface Tournament {
    id: number,
    name: string,
    startAt: number,
    images: {
        url: string
    }[],
    events: {
        id: number,
        name: string,
        images: {
            url: string
        }[],
    }[]
}

type TournamentsResponse = {
    data: {
        tournaments: {
            nodes: Tournament[]
        }
    }
}

export async function fetchTournamentsGraphQL(perPage: number): Promise<TournamentsResponse> {
    const response = await fetch("https://api.start.gg/gql/alpha", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            query: `
                query TournamentsByCountry($cCode: String!, $state: String!, $perPage: Int!, $after: Timestamp) {
                    tournaments(query: {
                        perPage: $perPage
                        filter: {
                            countryCode: $cCode,
                            addrState: $state,
                            afterDate: $after
                        }
                        sortBy: "startAt",
                        
                    }) {
                        nodes {
                            id
                            name
                            startAt
                            images {
                                url
                            }
                            events {
                                id
                                name
                                images {
                                    url
                                }
                            }
                        }
                    }
                }
            `,
            variables: { 
                perPage, 
                state: REGION,
                cCode: ETAT,
                after: Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 7
            }
        })
    });

    if (!response.ok) {
        console.log(await response.json())
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data as TournamentsResponse
}


export interface Classe {
    placement: number,
    entrant: {
        id: number,
        name: string,
    }
}

type PodiumResponse = {
    data: {
        event: {
            id: number,
            name: string,
            standings: {
                nodes: Classe[]
            }
        }
    }
}

export async function fetchPodium(slug: string) {
    const response = await fetch("https://api.start.gg/gql/alpha", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            query: `
                query EventStandings($eventId: ID!, $perPage: Int!) {
                event(id: $eventId) {
                    id
                    name
                    standings(query: {
                        perPage: $perPage,
                        }){
                            nodes {
                                placement
                                entrant {
                                    id
                                    name
                                }
                            }
                        }
                    }
                },
            `,
            variables: {
                eventId: slug,
                perPage: 100
            }
        })
    });
    
    if (!response.ok) {
        console.log(await response.json())
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data)
    return data as PodiumResponse
}