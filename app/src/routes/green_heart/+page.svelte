<main style="font-family: MyCostumFont;">

    <section id="leirasok">
        <div class="teszt">

                <div class="feature">
                <h1 style="font-size: 100px;">GREEN HEART</h1>
                </div>
                <div id="question-wrapper">
                    <img src="tagok/yung_alvin.png" alt="">
                </div>

        </div>
    </section>

    <section id="teszt">
        <div class="feature">
            <p>ide jöhetne valami videó</p>
        </div>
        <div id="question-wrapper">
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem suscipit vero unde! Cum ipsum eum, cumque natus, magni architecto fugit adipisci quis iure dolores officia tenetur et, soluta facilis nostrum!</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis iusto, in, eos maiores doloribus nemo aliquid illo dolorum accusantium cupiditate excepturi quisquam praesentium exercitationem libero recusandae commodi expedita nostrum quas.</span>
        </div>
    </section>

    <section id="teszt">
        <div class="feature">
            <h2>Itt tudod meghallgatni Green Heart zenéit!</h2>

        </div>
        <div id="question-wrapper" class="spotis_cucc">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/2SepJTuZp6R7RGu2LttkEx?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </section>

    <footer>
        <p>&copy; 2023 Newave. Minden jog fenntartva. Website and design by: <a href="https://linktr.ee/wr0ngth3hu4" style="color: inherit;">wr0ngth3hu4</a></p>
    </footer>


</main>

<style lang="scss">

.spotis_cucc{
    margin-top: 100px;
}

    #leirasok > .divider {
        height: fit-content;

        svg {
            vertical-align: middle;
        }
    }

    @media screen and (max-width: 700px) {
        .front {
            .title {
                font-size: 1.5rem !important;
                width: 90vw !important;
            }

            a {
                width: 60vw !important;
            }
        }

        #leirasok > div {
            flex-direction: column !important;
            gap: 1rem;

            & > * {
                flex-basis: auto !important;
            }

            .button {
                max-width: 100% !important;
                width: 100%;
                box-sizing: border-box;
            }
        }

        #veg > div {
            width: auto;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        max-width: 100%;
    }

    section:nth-child(odd) {
        background-color: var(--0);
        color: white;
        padding: 1rem;
    }

    section:nth-child(even) {
        justify-content: space-between;

        & > div:not(.not-flex) {
            padding: 1rem;
        }
    }

    section:nth-child(1) {
        display: grid;
        align-items: center;

        & > * {
            grid-column: 1;
            grid-row: 1;
        }
    }

    .feature {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
    }

    #leirasok > div {
        justify-content: space-evenly;
        align-items: center;

        & > * {
            flex-grow: 0;   
        }

    }

    #leirasok > div:not(.not-flex) {
        display: flex;
        flex-direction: row;
        padding: 0 3rem;

        & > * {
            flex-basis: 50%;
        }
    }

    #leirasok > div:nth-child(2) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
        gap: 1rem;

        .feature {
            align-items: center;
        }
    }

    #teszt {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        & > * {
            flex-basis: 40%;
        }

        #question-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-height: 250px;

            & > img {
                width: 100%;
                height: 100%;
            }
        }
    }

    section:nth-child(4) {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div {
            width: 50%;
        }
    }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .back {
        @extend .center;
        z-index: 0;

        & > svg {
            animation: linear infinite spin 25s;
            height: 60vw;
            width: 60vw;
        }
    }

    .front {
        @extend .center;
        z-index: 1;
        gap: .5rem;

        .title {
            width: 50vw;
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
        }
    }

     footer{
    background-color: #023436;
    color: white;
    padding: 20px;
    text-align: center;
     }
</style>