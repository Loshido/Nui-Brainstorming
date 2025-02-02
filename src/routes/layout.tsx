import { component$, createContextId, noSerialize, Signal, Slot, useContextProvider, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import type { Connection } from "~/lib/db";
import db from "~/lib/db";

export const connectionCtx = createContextId<Signal<Connection>>('connection')


export default component$(() => {
    const loc = useLocation()
    const nav = useNavigate()
    const database = useSignal<Connection>();
    useContextProvider(connectionCtx, database);

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(async () => {
        try {
            const connection = await db();
            database.value = noSerialize(connection);

            console.info("Connexion avec la base de données établit")
            
            const token = localStorage.getItem('token');
            if(!token && loc.url.pathname.startsWith('/dash')) {
                nav('/')
                return;
            } else if(!token) return;
            
            await database.value?.authenticate(token);
            console.info("Client authentifié avec succès")
        } catch {
            if(loc.url.pathname.startsWith('/dash')) {
                nav('/')
            }
        }
    })

    return <>
        <Header/>
        <Slot />
        <Footer/>
    </>;
});
