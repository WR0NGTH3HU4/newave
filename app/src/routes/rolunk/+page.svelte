<main style="font-family: MyCostumFont;">
    
<section>
    <section id="teszt">
        <div class="feature">
            <h2 id="eloadoink_cim">Előadóink</h2>

        <div class="nagydiv">

            <div class="hirek_container">
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                  <p class="eloado_nevek"><a href="green_heart" style="color:black">GREEN HEART</a></p>
                </div>
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt ="Bal oldali kép">
                  <p class="eloado_nevek"><a href="" style="color:black">ZSARNOWSZKY CSABA</a></p>
                </div>
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                  <p class="eloado_nevek"><a href="" style="color:black">ZAZI</a></p>
                </div>
              </div>

              <div class="hirek_container">
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                  <p class="eloado_nevek"><a href="" style="color:black">FATTY</a></p>
                </div>
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt ="Bal oldali kép">
                  <p class="eloado_nevek"><a href="" style="color:black">M-SHEY</a></p>
                </div>
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                  <p class="eloado_nevek"><a href="" style="color:black">PEETY</a></p>
                </div>
              </div>

              <div class="hirek_container">
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                  <p class="eloado_nevek"><a href="" style="color:black">MERKEL</a></p>
                </div>
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt ="Bal oldali kép">
                  <p class="eloado_nevek"><a href="" style="color:black">YUNG FILI</a></p>
                </div>
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                  <p class="eloado_nevek"><a href="" style="color:black">CUNDRAC</a></p>
                </div>
              </div>

        </div>
    </section>
</section>
<footer>
    <p>&copy; 2023 Newave. Minden jog fenntartva. Website and design by: <a href="https://linktr.ee/wr0ngth3hu4" style="color: inherit;">wr0ngth3hu4</a></p>
</footer>
</main>

<style lang="scss">

    @font-face{
        font-family: "MyCustomFont";
        src: url("app/AvenirLTStd-Roman.otf");
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

    .feature, .hirek {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            font-size: 4rem;
            align-self: center;
            margin-bottom: 0.5rem;
            
        }
    }

    #leirasok > div {
        
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
        background-color: #023436;
        font-weight: 600;
        transition-property: transform background-color;
        transition-duration: .3s;
        padding: 10px 20px;
        border-radius: 8px;
        text-decoration: none;
        text-align: center;
        min-width: fit-content;
        margin-top: 15%;
        
        &:hover {
            background-color: #086a6d;
            transition-property: transform background-color;
            transition-duration: .3s;
            transform: scale(.95);
        }
    }

    footer {
    background-color: #023436;
    color: white;
    padding: 20px;
    text-align: center;
  }

  .logo{
    width: 50%;
    height: 20%;
  }

  table{
    padding: 50%;
  }
  th{
    padding: 5px;
  }
  .rectangle {
    display: inline-block;
    width: 200px;
    height: 80px;
    background-color: #01ffcb;
    margin-right: 10px;
    margin-bottom: 10px;
    text-align: center;
    line-height: 80px;
    color: black;
}
.negyzetek{
    width: 100%;
}

.ceodiv{
    text-align: center;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: row;
}

.nagydiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.hirek_container {
  display: flex;
  margin-left: 5%;
}

#hirek{
    margin-top: 10%;
}

.box {
  flex: 1;
  background-color: #023436;
  color: white;
  padding: 5px;
  margin-right: 5%;
  display: flex;
  align-items: center;
  transform: skewX(-20deg); 
}

.box img {
  margin-right: 10px;
  width: 50%; 
  transform: skewX(20deg); 
}


.box p {
  margin: 0;
  flex: 1;
  text-align: center;
  transform: skewX(20deg); 
  font-size: x-large;
}
#eloado{
    background-color: #01ffcb;
    margin-top: 5%;
    font-size: x-large;
}


#atmenet_le{
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(2,52,54,1) 100%);
    height: 100px;

}
#atmenet_fel{
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(2,52,54,1) 100%);
    height: 100px;

}

.hirek_div{
    background-color: #fff;
}
#eloadoink_cim{
  margin-top: 40px;
  text-decoration: underline;

}

#hireink_cim{
  margin-top: 40px;
}
</style>

<script lang="ts">
	import ClickerGenerator from "../../components/ClickerGenerator.svelte";
	import type { Profile } from "../../util/model/Profile";
	import ProfileDisplay from "../../components/ProfileDisplay.svelte";

    let selectedProfileIndex = 0;

    function shapeClick(event: any) {
        let shapeId = event.detail.id;
        selectedProfileIndex = Number(shapeId);
    }

    const shapes = [
        {
            id: "0",
            backgroundImage: 'rolunk/csoka_andras.jpg',
        },
        {
            id: "1",
            backgroundImage: 'rolunk/csaszar_andras.jpg',
        },
        {
            id: "2",
            backgroundImage: 'rolunk/kovago_levente.jpg',
        },
        {
            id: "3",
            backgroundImage: 'rolunk/kulimak_mate.jpg',
        },
        {
            id: "4",
            backgroundImage: 'rolunk/tatrai_dominik.jpg',
        },
    ];

    const rolunk: Profile[] = [
        {
            nev: "Csóka András",
            leiras: "Sziasztok! Én Csóka András vagyok az weboldalnak a quiz részét csináltam én kisebb nagyobb segítségekkel. Szabadidőmben is szívesen foglalkozok programozással és a tudásom bővítésével. Nagyon könnyen beilleszkedek és alkalmazkodok. Az oldal készítése alatt a Bajai SZC Türr István Technikumba járok ahol a 11.a osztály tagja vagyok.",
            kep: "rolunk/csoka_andras.jpg",
            media: [
                {
                    tipus: "github",
                    link: "https://github.com/csokaandras",
                },
            ],
        },
        {
            nev: "Császár András",
            leiras: "halo csaszar andras vagyok, szereny es okos es rendkivul ferfias. turros tanulo vagyok es szamitasaim szerint nem vagyok rossz programozasbol (napi 10 orakat programozok fyi). a projekt nelkulem plain html cssben lenne es github pagesen lenne hostolva",
            kep: "rolunk/csaszar_andras.jpg",
            media: [
                {
                    tipus: "github",
                    link: "https://github.com/csandrisTurr",
                },
            ],
        },
        {
            nev: "Kővágó Levente",
            leiras: "Hello! Kővágó Leventének vagyok. Baján, a Türr Istán technikum 11.a osztályos tanulója vagyok szoftver fejlesztői ágazaton. Szerbiában egy kis faluban élek, Bezdánban. Versenyszinten kajakozok és napi szinten edzek. A projektben az én feladatom volt a Scrum aloldal megtervezése és megvalósítása, illetve a képek/ikonok keresése. Kisebb nehézségek akadtak a reszponzivításal, illetve a gombok pozicionálásával, de sikeresen vettem az akadályt és megoldottam kisebb segítségekkel.",
            kep: "rolunk/kovago_levente.jpg",
            media: [
                {
                    tipus: "github",
                    link: "https://github.com/KovagoLevente",
                },
                {
                    tipus: "instagram",
                    link: "https://instagram.com/_levente_k",
                },
            ],
        },
        {
            nev: "Kulimák Máté",
            leiras: "Sziasztok! Kulimák Máté vagyok, vaskúti lakos, a Bajai SZC Türr István Technikum 11.A osztályos tanulója. A projektben leginkább a kreatív feladatokban vettem részt illetve a Jirát kezeltem illetve a \"rólunk\" oldalt én kezdtem el, viszont ezt a PowerPoint miatt félbe kellett hagynom. Érdekesnek valamint izgalmasnak tartom az informatikát és remélem, hogy ezen a területen tudok majd elhelyezkedni.",
            kep: "rolunk/kulimak_mate.jpg",
            media: [
                {
                    tipus: "github",
                    link: "https://github.com/WR0NGTH3HU4",
                },
                {
                    tipus: "twitter",
                    link: "https://twitter.com/holvanmate",
                },
                {
                    tipus: "instagram",
                    link: "https://instagram.com/wr0ngth3hu4",
                },
            ],
        },
        {
            nev: "Tátrai Dominik Oszkár",
            leiras: "Sziasztok Tátrai Dominik vagyok! Röviden magamról annyit mondanék, hogy szabadidőmben szívesen tervezgetek, tanulok új dolgokat vagy kezdek számomra kreatív projektbe ezek leginkább zenei területeken merülnek ki, viszonylag sok stílusra vevő vagyok, vagy sokhoz alkalmazkodni tudok ha úgy van. Úgy gondolom hogy a hobbijaim segítenek nekem, hogy komolyabb területeken is hasznossá tudjak válni, akárcsak ebben a projektben, a többi csapattársammal egyetemben. Jelenleg a Bajai SZC Türr István Technikumba járok ahol a 11.a osztály tagja vagyok. A feladatom az oldalt illetően a \"Vízesés modell\" aloldal elkészítése volt, felmerültek nehézségek az oldal készítése közben, de a rugalmas csapatmunkánknak köszönhetően idővel mindenre sort tudtunk keríteni és megoldani a problémákat.",
            kep: "rolunk/tatrai_dominik.jpg",
            media: [
                {
                    tipus: "github",
                    link: "https://github.com/TatraiDominik",
                },
                {
                    tipus: "instagram",
                    link: "https://instagram.com/dominiktatrai",
                },
            ],
        },
    ];
</script>
