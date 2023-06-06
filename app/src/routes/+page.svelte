<main>
    <section>
        <div class="back">
           <img src="logo/logo_feher.png" alt="newave_logo">
           <h1 class="title">Üdvözöllek a Newave oldalán!</h1>
        </div>
    </section>

    <section id="leirasok">
        <div class="not-flex divider">

        </div>
        <div>
            <div class="feature">
                <h2>Híreink</h2>
               <table>
                <tr>
                    <th>HÍR 1</th>
                    <th>HÍR 2</th>
                    <th>HÍR 3</th>
                    <th>HÍR 4</th>

                </tr>
                <tr>
                    <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam cum veritatis ipsam atque dolore quidem sit repellat voluptatibus quam beatae, enim eos aperiam corrupti doloremque? Quisquam consequuntur repellendus quas.
                    </td>
                    <td>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt cum ducimus pariatur? Ipsam reiciendis minus amet placeat cum, sint vero, eligendi impedit dolor quo nostrum, aperiam quis voluptatem asperiores illum!
                    </td>
                    <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam cum veritatis ipsam atque dolore quidem sit repellat voluptatibus quam beatae, enim eos aperiam corrupti doloremque? Quisquam consequuntur repellendus quas.
                    </td>
                    <td>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt cum ducimus pariatur? Ipsam reiciendis minus amet placeat cum, sint vero, eligendi impedit dolor quo nostrum, aperiam quis voluptatem asperiores illum!
                    </td>
                </tr>
               </table>

               <a href="hirek" class="button" >TOVÁBBI HÍREINK!</a>
            </div>
        <div class="not-flex divider">
           
        </div>
    </section>
    <section id="teszt">
        <div class="feature">
            <h2 id="eloadoink_cim">Előadóink</h2>
            <table id="eloadok">
             <tr>
                <th>YUNG ALVIN</th>

                <th>GREEN HEART</th>

                <th>ZSARNOWSZKY CSABA </th>

                <th>ZAZI</th>

                <th>FATTY</th>

                <th>M-SHEY</th>

                <th>PEETY</th>

                <th>VAKAY</th>

                <th>YUNG FILI</th>
            </tr>
            </table>
        </div>
        <div id="question-wrapper">

        </div>

    </section>
  
        <footer>
            <p>&copy; 2023 Newave. Minden jog fenntartva. Website and design by: <a href="https://linktr.ee/wr0ngth3hu4" style="text-decoration: none; color: inherit;">wr0ngth3hu4</a></p>
        </footer>

</main>

<style lang="scss">

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
        background-color: #023436;
        color: white;
        padding: 1rem;
    }

    section:nth-child(even) {
        justify-content: space-between;
        background-color:white;
        color: black;

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

        .button {
            max-width: 10rem;
            max-height: 4rem;
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

    .button {
        display: inline-block;
        color: white;
        background-color: var(--2);
        font-weight: 600;
        transition-property: transform background-color;
        transition-duration: .3s;
        padding: 10px 20px;
        border-radius: 8px;
        text-decoration: none;
        text-align: center;
        min-width: fit-content;
        
        &:hover {
            background-color: var(--1);
            transition-property: transform background-color;
            transition-duration: .3s;
            transform: scale(.95);
        }
    }

    footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
  }

  img{
    width: 50%;
    height: 20%;
  }

  table{
    padding: 50%;
  }
  th{
    padding: 5px;
  }

</style>