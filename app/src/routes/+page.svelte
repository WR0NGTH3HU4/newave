<main style="font-family: MyCostumFont;">
    <section>
        <div class="back">
           <img src="logo/logo_feher.png" alt="newave_logo" class="logo">
           <h1 class="title">Üdvözöllek a Newave oldalán!</h1>
        </div>
    </section>

    <div id="atmenet_le"></div>

    <section style="background-color: #fff;">
        <div class="feature">
            <div class="feature">
                <h2 style="color: black;">Híreink</h2>
                
                <div class="hirek_container">
                    <div class="box" id="hirek">
                      <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                      <p>HÍR 1</p>
                    </div>
                    <div class="box" id="hirek">
                      <img src="tagok/yung_alvin.png" alt ="Bal oldali kép">
                      <p>HÍR 2</p>
                    </div>
                    <div class="box" id="hirek">
                      <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                      <p>HÍR 3</p>
                    </div>
                  </div>
                  
               <a href="hirek" class="button" >TOVÁBBI HÍREINK!</a>
            </div>
            <div class="not-flex divider">

            </div>
        </div>
    </section>

    <div id="atmenet_fel"></div>

    <section id="teszt">
        <div class="feature">
            <h2 id="eloadoink_cim">Előadóink</h2>

        <div class="nagydiv">

            <div class="hirek_container">
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                  <p class="eloado_nevek">GREEN HEART</p>
                </div>
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt ="Bal oldali kép">
                  <p class="eloado_nevek">ZSARNOWSZKY CSABA</p>
                </div>
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                  <p class="eloado_nevek">ZAZI</p>
                </div>
              </div>

              <div class="hirek_container">
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                  <p class="eloado_nevek">FATTY</p>
                </div>
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt ="Bal oldali kép">
                  <p class="eloado_nevek">M-SHEY</p>
                </div>
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                  <p class="eloado_nevek">PEETY</p>
                </div>
              </div>

              <div class="hirek_container">
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                  <p class="eloado_nevek">MERKEL</p>
                </div>
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt ="Bal oldali kép">
                  <p class="eloado_nevek">YUNG FILI</p>
                </div>
                <div class="box" id="eloado">
                  <img src="tagok/yung_alvin.png" alt="Bal oldali kép">
                  <p class="eloado_nevek">CUNDRAC</p>
                </div>
              </div>

               <!-- <ul>
                    <li class="rectangle">
                        YUNG ALVIN
                    </li>
                </ul>
            </div>
        
                <div>
                <ul>
                  <li class="rectangle">GREEN HEART</li>
                  <li class="rectangle">ZSARNOWSZKY CSABA </li>
                  <li class="rectangle">ZAZI</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li class="rectangle">FATTY</li>
                  <li class="rectangle">M-SHEY</li>
                  <li class="rectangle">PEETY</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li class="rectangle">MERKEL</li>
                  <li class="rectangle">YUNG FILI</li>
                  <li class="rectangle">CUNDRAC</li>
                </ul>
              </div>
        </div>
        -->
        </div>
    </section>
    <div id="atmenet_le">

    </div>
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
    background-color: #fff;
    color: black;
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
.eloado_nevek{
    color: black;
    text-decoration: underline;
}

#atmenet_le{
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(2,52,54,1) 100%);
    height: 200px;

}
#atmenet_fel{
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(2,52,54,1) 100%);
    height: 200px;

}

.hirek_div{
    background-color: #fff;
}

</style>