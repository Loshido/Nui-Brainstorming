import { component$ } from "@builder.io/qwik";

import Tournoi2 from "~/assets/accueil/im2.png?jsx";
import Tournoi3 from "~/assets/accueil/im13.png?jsx";
import Tournoi4 from "~/assets/accueil/im14.png?jsx";
import Tournoi5 from "~/assets/accueil/im15.png?jsx";

import "./gallerie.css"
export default component$(() => {
    return <div class="gallerie">
        <h1>Notre E-Gallerie :</h1>
        <div class="container">
            <div class="carousel">
                <div class="carousel-slides">
                    <div class="slide">
                        <Tournoi2 alt="No Media Found" />
                    </div>
                    <div class="slide">
                        <Tournoi3 alt="No Media Found" />
                    </div>
                    <div class="slide">
                        <Tournoi4 alt="No Media Found" />
                    </div>
                    <div class="slide">
                        <Tournoi5 alt="No Media Found" />
                    </div>
                </div>
            </div>
        </div>
</div>
})