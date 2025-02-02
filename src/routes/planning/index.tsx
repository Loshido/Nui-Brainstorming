import { component$, isServer, useStore, useTask$, useVisibleTask$ } from "@builder.io/qwik";

export const Ligne = component$(() => {
    return <div class="ligne"/>
})

interface EventProps {
    date: Date,
    nom: string,
    description: string
    image?: string,
    events: {
        id: number
        name: string,
        image?: string
    }[]
}

import Trophee from "~/assets/planning/trophee.svg?jsx"
export const Evenement = component$((props: EventProps) => {
    return <div class="evenement">
        <div>
            <p>
                {
                    props.date.toLocaleDateString(undefined, {
                        dateStyle: 'medium'
                    })
                }
            </p>
            <Ligne/>
        </div>
        <article>
            <div>
                {
                    props.image 
                    ? <img src={props.image} />
                    : null
                }
                <h2>
                    {
                        props.nom
                    }
                </h2>
            </div>
            <h3>Evenements</h3>
            {
                props.events.map(event => <div>
                    {
                        event.image
                        ? <img src={event.image} />
                        : null
                    }
                    <p>
                        {
                            event.name
                        }
                    </p>
                    <Link href={"/planning/"+event.id}>
                        <Trophee/>
                    </Link>
                </div>)
            }
        </article>
    </div>
})

import "./style.css"
import { fetchTournamentsGraphQL, Tournament } from "~/lib/graphql";
import { cache } from "~/lib/mem";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {

    const events = useStore<Tournament[]>([])

    useTask$(async () => {
        const tournaments = await cache('planning', 60, async () => {
            try {
                const response = await fetchTournamentsGraphQL(30);
    
                return response.data.tournaments.nodes
            } catch{
                return []
            }
        }) 
        console.log(tournaments)
    
        events.push(...tournaments)
    })

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        if(events.length > 0) {
            localStorage.setItem('planning', JSON.stringify([
                [...events],
                Date.now() + 1000 * 60
            ]))
        } else {
            const stored = localStorage.getItem('planning');
            if(!stored) return;
            const [tournaments, expiration] = JSON.parse(stored);
            if(Date.now() > expiration) {
                localStorage.removeItem('planning')
                return
            }

            events.push(...tournaments)
        }

        console.log(events)
    })

    return <main id="planning">
        <div/> {/* La barre verticale */}
        <section>
            <div class="titre">
                <h1>
                    Planning
                </h1>
                <Ligne/>
            </div>
            {
                events.map(event => <Evenement
                    key={event.id}
                    date={new Date(event.startAt * 1000)}
                    nom={event.name}
                    description=""
                    image={event.images.length > 0 ? event.images[0].url : undefined}
                    events={event.events.map(e => ({
                        id: e.id,
                        name: e.name,
                        image: e.images.length > 0 ? e.images[0].url : undefined
                    }))}/>)
            }
        </section>
    </main>
})