import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import Profil from "~/assets/logo.png?jsx"; // ?jsx traite l'image comme un <img src="..." ...>

import "./style.css"; // On ajoute le style à la page avec vite (le truc qui fait fonctionner Qwik)
import { connectionCtx } from "~/routes/layout";

import House from "~/assets/header/house.svg?jsx"; // ?jsx transforme en composant
import Calendar from "~/assets/header/calendar-days.svg?jsx";
import User from "~/assets/header/user.svg?jsx";
export default component$(() => {
    const conn = useContext(connectionCtx);
    return (
        <header id="tete">
            <div class="logo">
                <Profil /> {/* Le logo du site */}
                <p>Mystral</p>
            </div>
            <nav>
                <Link href="/">
                    <span id="text">Accueil</span>
                    <span id="icon">
                        <House />
                    </span>
                </Link>
                <Link href="/planning">
                    <span id="text"> Planning</span>
                    <span id="icon">
                        <Calendar />
                    </span>
                </Link>
                {conn.value?.connection?.connection.token ? (
                    <Link href="/dash">
                        <span id="text">Profil</span>
                        <span id="icon">
                            <User />
                        </span>
                    </Link>
                ) : (
                    <Link href="/connexion">
                        <span id="text">Se connecter</span>
                        <span id="icon">
                            <User />
                        </span>
                    </Link>
                )}
            </nav>
        </header>
    );
});
