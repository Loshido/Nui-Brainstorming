import { component$ } from "@builder.io/qwik";

import "./faq.css"
export default component$(() => {
    return <div class="faq">
        <h1> FAQ </h1>
        <div class="accordion-wrapper">
            <div class="accordion">
                <input type="radio" name="radio-a" id="check1" />
                <label class="accordion-label" for="check1">
                    À qui es-ce que le club s'adresse ?
                </label>
                <div class="accordion-content">
                    <p>
                        Le club s'adresse à toutes personnes, que vous soyez débutant ou confirmé, vous êtes
                        les bienvenus !
                    </p>
                </div>
            </div>

            <div class="accordion">
                <input type="radio" name="radio-a" id="check2" />
                <label class="accordion-label" for="check2">
                    Sur quel tournois nous retrouver ?
                </label>
                <div class="accordion-content">
                    Notre tournoi principal est le Zenith
                </div>
            </div>

            <div class="accordion">
                <input type="radio" name="radio-a" id="check3" />
                <label class="accordion-label" for="check3">
                    Où et quand nous retrouver ?
                </label>
                <div class="accordion-content">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14331.431073214644!2d6.006219953844034!3d43.13008832686361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c919a9c4b6f7df%3A0xc60e2ff9cf3e18a2!2sCoyote%20Coffee%20%7C%20Snack%20Bubble%20Tea!5e1!3m2!1sfr!2sfr!4v1738378342717!5m2!1sfr!2sfr"
                        width="600"
                        height="450"
                        style="border:0;"
                        // @ts-ignore
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <p>
                        Tout les vendredis à 18h au <strong>Coyote coffee</strong> à
                        la Garde
                    </p>
                </div>
            </div>
        </div>
    </div>
})