import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Lucas from "~/assets/accueil/im9.png?jsx"; // ?jsx traite l'image comme un <img src="..." ...>
import Romain from "~/assets/accueil/im10.png?jsx"; // ?jsx traite l'image comme un <img src="..." ...>
import Baptiste from "~/assets/accueil/im8.png?jsx"; // ?jsx traite l'image comme un <img src="..." ...>
import Smash from "~/assets/accueil/im5.png?jsx"; // ?jsx traite l'image comme un <img src="..." ...>
import Street from "~/assets/accueil/im6.png?jsx"; // ?jsx traite l'image comme un <img src="..." ...>
import Rival from "~/assets/accueil/im7.png?jsx"; // ?jsx traite l'image comme un <img src="..." ...>

import "./style.css";
import FAQ from "~/components/Accueil/FAQ";
import Videos from "~/components/Accueil/Videos";
import Gallerie from "~/components/Accueil/Gallerie";



export default component$(() => {
    return (
        <>
            <div class="pageAccueil">
                <div id="Presentation">
                    {/* <div class="text">
                        <h3>#MystralGagant 💪!</h3>
                        <h4>"Maîtrisez le Jeu, Dominez la Compétition"</h4>
                        </div> */}
                </div>
                {/* <div class="imageAccueil">
                    <Tournoi alt="No Media Found"/>
                </div> */}

                <div class="screen">
                    <h1>Nos jeux favoris ! </h1>
                    <div class="quoiround">
                        <div class="round">
                            <Smash alt="No Media Found" />
                            <p>Super Smash Bros </p>
                        </div>
                        <div class="round">
                            <Street alt="No Media Found" />
                            <p>Street Fighter </p>
                        </div>
                        <div class="round">
                            <Rival alt="No Media Found" />
                            <p>Rivals Of Aether II</p>
                        </div>
                    </div>
                </div>

                <div class="screen color">
                    <h1 id="titre-section">Qui sommes nous ? </h1>
                    <div class="quisquare">
                        <div class="square">
                            <Lucas alt="No Media Found" />
                            <p>Lucas Ferrara - Chopperflame</p>
                            <p>Président</p>
                            <q>
                                Dans chaque partie, il y a un moment décisif qui
                                peut tout changer.
                            </q>
                        </div>
                        <div class="square">
                            <Romain id="image-bizazrre" alt="No Media Found" />
                            <p>Romain Blancard - Gawain</p>
                            <p>Secrétaire</p>
                            <q>
                                Le jeu vidéo nous enseigne que la persévérance
                                et la passion sont les clés du succès.
                            </q>
                        </div>
                        <div class="square">
                            <Baptiste alt="No Media Found" />
                            <p>Baptiste Michet - Necross</p>
                            <p>Trésorier</p>
                            <q>
                                Faisons de chaque événement une aventure
                                inoubliable !
                            </q>
                        </div>
                    </div>
                </div>

                <Gallerie/>

                <Videos/>

                <FAQ/>
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: "Mystral",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};

            