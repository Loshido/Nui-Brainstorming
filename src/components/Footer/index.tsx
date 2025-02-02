import { component$ } from "@builder.io/qwik";
import Profil from "~/assets/logo.png?jsx" // ?jsx traite l'image comme un <img src="..." ...>
import Youtube from "~/assets/footer/youtube.svg?jsx"
import Twitch from "~/assets/footer/twitch.svg?jsx"
import Twitter from "~/assets/footer/twitter.svg?jsx"
import Linkedin from "~/assets/footer/linkedin.svg?jsx"
import Discord from "~/assets/footer/discord.svg?jsx"
import Email from "~/assets/footer/email.svg?jsx"
import House from "~/assets/header/house.svg?jsx"
import Calendar from "~/assets/header/calendar-days.svg?jsx"

import { Link } from "@builder.io/qwik-city";

import "./style.css";
export default component$(() => {
    return (        
        <footer>
            <nav>
                <div class="haut">
                    <div class="gauche">
                        <div class="haut_milieu">
                            <Profil/> {/* Le logo du site */}
                            <h1>Mystral</h1>
                        </div>
                        <div class="haut_bas">
                            <Link href="https://www.youtube.com/@mystral7560">
                                <Youtube color="white"/>
                            </Link>
                            <Link href="https://www.twitch.tv/mystralesport">
                                <Twitch color="white"/>
                            </Link>
                            <Link href="https://x.com/MystralEsport">
                                <Twitter color="white"/>
                            </Link>
                            <Link href="https://www.linkedin.com/company/mystralesport/">
                                <Linkedin color="white"/>
                            </Link>
                            <Link href="https://discord.com/invite/eePGq8U">
                                <Discord width={24} height={25} color="white"/>
                            </Link>
                            <Link href="mailto:smashurmere@gmail.com">
                                <Email color="white"/>
                            </Link>
                            
                        </div>
                    </div>
                
                    <div class="droite">
                        <div class="navbar">   
                            <Link href="/">
                                Accueil
                            </Link>
                            <House/>
                            <Link href="/planning">
                                Planning
                            </Link>
                            <Calendar/>
                        </div>
                    </div>
                </div>
                <div class="ensemble_div_bas">
                    <p>© 2025 Equipe Brainstorming</p>
                    
                </div>
            </nav>
        </footer>
    );
});
