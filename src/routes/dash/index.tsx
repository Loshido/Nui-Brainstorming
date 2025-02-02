import { component$, useContext, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { connectionCtx } from "../layout";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
    const nav = useNavigate()
    const conn = useContext(connectionCtx);
    const info = useSignal('')

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(async () => {
        if(!conn.value) return

        const i = await conn.value.info()
        info.value = JSON.stringify(i, undefined, 4)
    })

    return <div style={{
        padding: 50
    }}>

        Coucou tu es connecté
        <pre>
            {info.value}
        </pre>

        <div onClick$={() => {
            if(conn.value?.connection?.connection.token) {
                conn.value.connection.connection.token = undefined
                localStorage.removeItem('token')
                nav('/')
            }
        }}>
            Se déconnecter
        </div>
    </div>
})