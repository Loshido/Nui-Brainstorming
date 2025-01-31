import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface Props {
    connecte: boolean
}

import Profil from "~/assets/logo.png?jsx" // ?jsx traite l'image comme un <img src="..." ...>

import "./style.css" // On ajoute le style à la page avec vite (le truc qui fait fonctionner Qwik)
export default component$(({ connecte }: Props) => {
    return <header id="tete">
        <Profil/> {/* Le logo du site */}
        <nav>
            <Link href="/">
                Accueil
            </Link>
            <Link href="/planning">
                Planning
            </Link>
            <Link href="/classements">
                Classements
            </Link>
            {
                connecte 
                ? <Link>Profil</Link>
                : <Link>Se connecter</Link>
            }
        </nav>
    </header>
})