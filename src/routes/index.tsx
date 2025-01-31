import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return <>
        <h1>NUIT de l'isen</h1>
        <div>
            1ère heure
        </div>
    </>
});

export const head: DocumentHead = {
    title: "Index",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
