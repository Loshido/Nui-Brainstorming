import { component$, Slot, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { connectionCtx } from "../layout";
import { useNavigate } from "@builder.io/qwik-city";

// Attends jusqu'à ce que la condition soit validée
async function jusqua(exists: () => boolean, interval: number = 100): Promise<void> {
    await new Promise((resolve) => {
        const intervalId = setInterval(() => {
            if(exists()) {
                clearInterval(intervalId); // Stop checking
                resolve(true); // Resolve the promise
            }
        }, interval); // Check every 100ms (adjust as needed)
    })
}

export default component$(() => {
    const conn = useContext(connectionCtx)
    const nav = useNavigate()

    useVisibleTask$(async () => {
        await jusqua(() => !!conn.value);
        if(!conn.value?.connection?.connection.token) {
            nav('/');
        }

    })

    return <Slot/>
})