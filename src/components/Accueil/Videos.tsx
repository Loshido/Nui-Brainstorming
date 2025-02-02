import { component$ } from "@builder.io/qwik";

import "./videos.css"
export default component$(() => {
    return <div class="screen color videos">
    <div class="video">
        <h1>Nos dernieres videos</h1>
        <div class="videoContenue">
            <div class="youtube">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/-oEdK7IZCEI?si=zxpYT8uenxJjKrKU"
                    title="YouTube video player"
                    // @ts-ignore
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                />
            </div>

            <div class="twitch">
                <iframe
                    src="https://player.twitch.tv/?channel=mystralesport&parent=localhost"
                    // @ts-ignore
                    frameborder="0"
                    allowfullscreen="true"
                    scrolling="no"
                    height="315"
                    width="560"
                />
            </div>
        </div>
    </div>
</div>
})