import { component$, useContext, useStore, useVisibleTask$ } from "@builder.io/qwik";

import "./style.css"
import { connectionCtx } from "../layout";
import { useNavigate } from "@builder.io/qwik-city";
export default component$(() => {
    const nav = useNavigate()
    const conn = useContext(connectionCtx)
    const data = useStore({
        email: "",
        pass: "",
        errors: ""
    })

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(async () => {
        if(conn.value?.connection?.connection.token) {
            nav('/dash')
        }
    })

    return <main id="connexion">
        <h1>Connectez-vous !</h1>
        <input 
            onInput$={(_, t) => data.email = t.value}
            type="email"
            placeholder="Entrer votre addresse email"/>
        <input 
            onInput$={(_, t) => data.pass = t.value}
            type="password"
            placeholder="Entrer votre mots de passe"/>
        <input 
            type="submit" 
            value="Connexion"
            onClick$={async () => {
                if(!conn.value) return;
                try {
                    const token = await conn.value.signin({
                        access: 'admin',
                        variables: {
                            email: data.email,
                            pass: data.pass
                        }
                    })
    
                    localStorage.setItem('token', token);
                    data.errors = ''
                    nav('/dash')
                } catch {
                    data.errors = 'Vos identifiants sont incorrectes.'
                }
            }}
         />
        <div>
            {
                data.errors
            }
        </div>
    </main>
})