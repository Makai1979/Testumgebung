<script setup>
import { RouterLink } from 'vue-router'

</script>


<template>
    <div class="Navigation">
        <!--Streifen über der Navigation-->
        <div class="Topper">
            <div>
                <div class="rowContent">
                    <div class="Balken1">&nbsp;</div>
                    <div class="colText" id="text_topper">
                        <div class="toph3"><b>Qualität für die Hygiene!</b></div>
                    </div>
                    <div class="Balken2">&nbsp;</div>
                </div>
            </div>

        </div>

        <!--Navigationsleiste-->

        <nav class="navigator">

            <router-link to="/" id="homeLogo" @click="setActiveButton(0)"><img class="gel_logo" src="../img/main/logo_gel.png"
                    alt="gelzenleuchter Logo"></router-link>



            <div class="navigationSmall" v-if="windowWidth <= 1120">

                <img class="toggleSymbolOff" src="../img/icons/naviSymbol.svg" alt="navigation"
                    :class="{ toggleSymbolOn: isTogglerOn(), toggleSymbolOff: !isTogglerOn() }" @click="toggleMenu">

                <div class="toggler-content" v-if="showMenu">

                    <router-link to="/" id="home" :class="{ active: isActive(0), inactive: !isActive(0) }"
                        @click="setActiveButton(0)">
                        <div class="links">startseite</div>
                    </router-link>
                    <router-link to="/gelzenritter" id="gelzenritter"
                        :class="{ active: isActive(1), inactive: !isActive(1) }" @click="setActiveButton(1)">
                        <div class="links">gelzenritter</div>
                    </router-link>
                    <router-link to="/inoxan" id="inoxan" :class="{ active: isActive(2), inactive: !isActive(2) }"
                        @click="setActiveButton(2)">
                        <div class="links">inoxan</div>
                    </router-link>
                    <router-link to="/inosan" id="inosan" :class="{ active: isActive(3), inactive: !isActive(3) }"
                        @click="setActiveButton(3)">
                        <div class="links">inosan</div>
                    </router-link>
                    <router-link to="/service" id="service" :class="{ active: isActive(4), inactive: !isActive(4) }"
                        @click="setActiveButton(4)">
                        <div class="links">service</div>
                    </router-link>
                    <router-link to="/kontakt" id="kontakt" :class="{ active: isActive(5), inactive: !isActive(5) }"
                        @click="setActiveButton(5)">
                        <div class="links">kontakt</div>
                    </router-link>
                    <div class="suchfeld">
                        <form class="d-flex" role="search">
                            <input class="form-control" type="search" placeholder="Suchbegriff" aria-label="Suche">
                            <button class="btn btn-light" type="submit">Suche</button>
                        </form>
                    </div>
                </div>


            </div>


            <div class="navigationBig" v-else>


                <router-link to="/" id="home" :class="{ active: isActive(0), inactive: !isActive(0) }"
                    @click="setActiveButton(0)">
                    <div class="nav-link">startseite</div>
                </router-link>


                <router-link to="/gelzenritter" id="gelzenritter" :class="{ active: isActive(1), inactive: !isActive(1) }"
                    @click="setActiveButton(1)">
                    <div class="nav-link">gelzenritter</div>
                </router-link>


                <router-link to="/inoxan" id="inoxan" :class="{ active: isActive(2), inactive: !isActive(2) }"
                    @click="setActiveButton(2)">
                    <div class="nav-link">inoxan</div>
                </router-link>


                <router-link to="/inosan" id="inosan" :class="{ active: isActive(3), inactive: !isActive(3) }"
                    @click="setActiveButton(3)">
                    <div class="nav-link">inosan</div>
                </router-link>


                <router-link to="/service" id="service" :class="{ active: isActive(4), inactive: !isActive(4) }"
                    @click="setActiveButton(4)">
                    <div class="nav-link">service</div>
                </router-link>


                <router-link to="/kontakt" id="kontakt" :class="{ active: isActive(5), inactive: !isActive(5) }"
                    @click="setActiveButton(5)">
                    <div class="nav-link">kontakt</div>
                </router-link>

                <div class="suchfeld">
                    <form class="d-flex" role="search">
                        <input class="form-control" type="search" placeholder="Suchbegriff" aria-label="Suche">
                        <button class="btn btn-light" type="submit">Suche</button>
                    </form>
                </div>
            </div>

        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth, // Initialisiere die Fensterbreite
            showMenu: false, // Zustand für das Anzeigen oder Ausblenden des Menüs
            activeButton: null, // Hier wird der Index des aktiven Buttons gespeichert
            TogglerOn: null,
            togglerContent: true
        };
    },
    created() {
        // Event-Listener hinzufügen, um die Fensterbreite zu überwachen
        window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
        // Event-Listener entfernen, um Speicherleckagen zu vermeiden
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            // Aktualisiere die Fensterbreite, wenn das Fenster neu skaliert wird
            this.windowWidth = window.innerWidth;
            // Verstecke das Menü, wenn die Fensterbreite größer als 1200px ist
            if (this.windowWidth > 1120) {
                this.showMenu = false;
            }
        },
        toggleMenu() {
            // Funktion zum Ein-/Ausblenden des Menüs beim Klick auf den Toggle-Button
            this.showMenu = !this.showMenu;
            this.TogglerOn = !this.TogglerOn;

        },
        isTogglerOn() {
            return this.TogglerOn === true;
        },
        setActiveButton(index) {
            this.activeButton = index;
        },
        isActive(index) {
            return this.activeButton === index;
        }
    }
};

</script>

<style lang="sass" scoped>

/* mixins */
@mixin BalkenBasic($pad, $mar, $height, $width, $backcol)
    padding: $pad
    margin: $mar
    height: $height
    width: $width
    background-color: $backcol

@mixin colTextBasic($pad:0, $mar, $height:auto, $width, $vert-a:middle ,$t-a:center, $textS)
    padding: $pad
    margin: $mar
    height: $height
    width: $width
    vertical-align: $vert-a
    text-align: $t-a
    text-shadow: $textS

@mixin logoNav($height, $width)
    height: $height
    width: $width

@mixin navigatorBasic($d, $fd, $ai, $jc, $backcol, $min-h, $max-h, $mar, $fs, $ff, $boxS)
    display: $d
    flex-direction: $fd
    align-items: $ai
    justify-content: $jc
    background-color: $backcol
    min-height: $min-h
    max-height: $max-h
    margin: $mar
    font-size: $fs
    font-family: $ff
    box-shadow: $boxS
    

@mixin navigationBigBasic($d, $fd, $jc, $width)
    display: $d
    flex-direction: $fd
    justify-content: $jc
    width: $width

@mixin togglerBasic($width, $height, $pad, $mar, $back, $border, $bor-rad, $boxS)
    width: $width
    height: $height
    padding: $pad
    margin: $mar
    background: $back
    border: $border
    border-radius: $bor-rad
    box-shadow: $boxS

@mixin togglerContentBasic($pos, $d, $fd, $jc, $top, $height, $width, $pad, $backcol, $bor-rad, $boxS)
    position: $pos
    display: $d
    flex-direction: $fd
    justify-content: $jc
    top: $top
    height: $height
    width: $width
    padding: $pad
    background-color: $backcol
    border-radius: $bor-rad
    box-shadow: $boxS

/* colors */
$gel-green: rgb(0 186 174)
$gel-blue: rgb(71 77 164)
$gel-Menu1: rgb(230 255 255)



/* Topper */
.Topper
    padding: 15px 0 0 0
    margin: 0
    .rowContent
        display: flex
        justify-content: center
        width: auto

        .Balken1
            @include BalkenBasic(0, 5px 0 0 0, 12px, 25%, $gel-green)
        
            
        .Balken2
            @include BalkenBasic(0, 5px 0 0 0, 12px, 100%, $gel-green)
            

/* Navigation */
.navigator
    @include navigatorBasic(flex, row, center, center, white, 80px, auto, 0, x-large, sans-serif, 0px 0px 15px black)


.inactive
    font-family: Arial, Helvetica, sans-serif
    color: grey

    &:hover
        text-decoration: underline overline
        text-shadow: 2px 2px 5px rgb(0,186,174)

.active
    font-weight: 700
    font-family: Arial, Helvetica, sans-serif
    text-decoration: overline underline
    color: rgb(71,77,164)

    &:hover
        text-decoration: underline overline
        text-shadow: 2px 2px 5px rgb(0,186,174)



// Media Range //

@media (max-width: 575.97px)
    .Topper
        margin: 0 0 5px 0 
        .colText
            @include colTextBasic(2px, 0 10px 15px 10px, auto, 330px, middle, center, 2px 2px 5px white)
            .toph3
                font-size: small
    
    .navigator
        @include navigatorBasic(flex, column, center, center, white, 100px, auto, 0, small, sans-serif, 0px 0px 15px black)
        .gel_logo
            @include logoNav(6vw, auto)
        .navigationSmall
            display: flex
            flex-direction: row
        
            .toggleSymbolOff
                @include togglerBasic(120px, 30px, 2px, 5px 0 0 5px, linear-gradient(45deg, #B2C8CE 0%, #4899A4 68%, #A5C3C5 100%), 1px outset white, 10px, 2px 2px 10px $gel-green)
                position: relative
                &:hover
                    border: 5px ridge $gel-green
            .toggleSymbolOn
                @include togglerBasic(40px, 30px, 5px, 5px 0 0 5px, radial-gradient(ellipse at center, #B2C8CE 0%, #4899A4 68%, #A5C3C5 100%), 1px ridge $gel-green, 10px, 2px 2px 10px $gel-green)
                position: relative
            .toggler-content
                @include togglerContentBasic(relative, flex, row, space-between, auto, 30px, 430px, 2px, $gel-Menu1, 10px 90px 10px 10px, 2px 2px 5px $gel-green)
                margin: 0
                border: 2px inset $gel-blue
                align-items: center
                right: 8px
                top: 5px
                font-size: small
                .links
                    margin: 4px 0 0 0
                    padding: 0 0px 0 3px
            .d-flex
                display: flex
                flex-direction: row
                align-items: center
                height: 27px

                .form-control
                    height: 20px
                    font-size: xx-small
                    margin: 0 0 0 5px
                    
                .btn
                    height: 20px
                    width: 38px
                    margin: 0 5px 0 2px
                    border-radius: 2px 20px 2px 2px
                    display: flex
                    justify-content: center
                    align-items: flex-start
                    font-size: xx-small
                    background-color: $gel-green
                    color: white
            

@media (min-width: 576.0px) and (max-width: 767.98px)
    .Topper 
        .colText
            @include colTextBasic(2px, -3px 10px 15px 10px, auto, 400px, middle, center, 2px 2px 5px white)
            .toph3
                font-size: 12pt

    .navigator
        @include navigatorBasic(flex, column, center, center, white, 100px, auto, 0, small, sans-serif, 0px 0px 15px black)
        .gel_logo
            @include logoNav(6vw, auto)
        .navigationSmall
            display: flex
            flex-direction: row
        
            .toggleSymbolOff
                @include togglerBasic(120px, 30px, 2px, 5px 0 0 5px, linear-gradient(45deg, #B2C8CE 0%, #4899A4 68%, #A5C3C5 100%), 1px outset white, 10px, 2px 2px 10px $gel-green)
                position: relative
                &:hover
                    border: 5px ridge $gel-green
            .toggleSymbolOn
                @include togglerBasic(40px, 30px, 5px, 5px 0 0 5px, radial-gradient(ellipse at center, #B2C8CE 0%, #4899A4 68%, #A5C3C5 100%), 1px ridge $gel-green, 10px, 2px 2px 10px $gel-green)
                position: relative
            .toggler-content
                @include togglerContentBasic(relative, flex, row, space-between, auto, 30px, 430px, 2px, $gel-Menu1, 10px 90px 10px 10px, 2px 2px 5px $gel-green)
                margin: 0
                border: 2px inset $gel-blue
                align-items: center
                right: 8px
                top: 5px
                font-size: small
                .links
                    margin: 4px 0 0 0
                    padding: 0 0px 0 3px
            .d-flex
                display: flex
                flex-direction: row
                align-items: center
                height: 27px

                .form-control
                    height: 20px
                    font-size: xx-small
                    margin: 0 0 0 5px
                    
                .btn
                    height: 20px
                    width: 38px
                    margin: 0 5px 0 2px
                    border-radius: 2px 20px 2px 2px
                    display: flex
                    justify-content: center
                    align-items: flex-start
                    font-size: xx-small
                    background-color: $gel-green
                    color: white



@media (min-width: 768.0px) and (max-width: 991.98px)
    .Topper
        .colText
            @include colTextBasic(2px, -5px 10px 15px 10px, auto, 500px, middle, center, 2px 2px 5px white)
            .toph3
                font-size: 14pt

    .navigator
        @include navigatorBasic(flex, row, center, center, white, 80px, 80px, 0, small, sans-serif, 0px 0px 15px black)
        .gel_logo
            @include logoNav(50px, auto)
        .navigationSmall
            margin: 0 0 0 20px
        
            .toggleSymbolOff
                @include togglerBasic(80px, 50px, 2px, 0 0 0 5px, linear-gradient(45deg, #B2C8CE 0%, #4899A4 68%, #A5C3C5 100%), 1px outset white, 10px, 2px 2px 10px $gel-green)
                &:hover
                    border: 5px ridge $gel-green
            .toggleSymbolOn
                @include togglerBasic(80px, 50px, 2px, 0 0 0 5px, radial-gradient(ellipse at center, #B2C8CE 0%, #4899A4 68%, #A5C3C5 100%), 1px ridge $gel-green, 10px, 2px 2px 10px $gel-green)
                top: 112px
                position: relative
                
            .toggler-content
                @include togglerContentBasic(relative, flex, column, block, 82px, auto, 250px, 5px, $gel-Menu1, 10px 90px 10px 10px, 2px 2px 5px $gel-green)
                border: 2px inset $gel-blue
                left: 75px
                top: 61px
                .links
                    margin: 5px 0 0 0
                    padding: 0 8px 0 8px
                    font-size: medium


@media (min-width: 992.0px) and (max-width: 1119.98px) 
    .Topper
        .colText
            @include colTextBasic(2px, -7px 10px 15px 10px, auto, 500px, middle, center, 2px 2px 5px white)
            .toph3
                font-size: 15pt

    .navigator
        @include navigatorBasic(flex, row, center, center, white, 80px, 80px, 0, small, sans-serif, 0px 0px 15px black)
        .gel_logo
            @include logoNav(50px, auto)
        .navigationSmall
            margin: 0 0 0 20px
        
            .toggleSymbolOff
                @include togglerBasic(80px, 50px, 2px, 0 0 0 5px, linear-gradient(45deg, #B2C8CE 0%, #4899A4 68%, #A5C3C5 100%), 1px outset white, 10px, 2px 2px 10px $gel-green)
                &:hover
                    border: 5px ridge $gel-green
            .toggleSymbolOn
                @include togglerBasic(80px, 50px, 2px, 0 0 0 5px, radial-gradient(ellipse at center, #B2C8CE 0%, #4899A4 68%, #A5C3C5 100%), 1px ridge $gel-green, 10px, 2px 2px 10px $gel-green)
                top: 112px
                position: relative
                
            .toggler-content
                @include togglerContentBasic(relative, flex, column, block, 82px, auto, 250px, 5px, $gel-Menu1, 10px 90px 10px 10px, 2px 2px 5px $gel-green)
                border: 2px inset $gel-blue
                left: 75px
                top: 61px
                .links
                    margin: 5px 0 0 0
                    padding: 0 8px 0 8px
                    font-size: medium

@media (min-width: 1120.0px) and (max-width: 1399.98px)
    .Topper
        .colText
            @include colTextBasic(2px, -10px 10px 15px 10px, auto, 500px, middle, center, 2px 2px 5px white)
            .toph3
                font-size: 18pt

    .navigator
        @include navigatorBasic(flex, row, center, space-around, white, 80px, 80px, 0, medium, sans-serif, 0px 0px 15px black)
        .gel_logo
            @include logoNav(50px, auto)
        .navigationBig
            @include navigationBigBasic(flex, row, space-between, 700px)
            .nav-link
                margin: 11px 0 0 0
                padding: 0 10px 0 10px
    

@media (min-width: 1400.0px)
    .Topper
        .colText
            @include colTextBasic(2px, -10px 10px 15px 10px, auto, 500px, middle, center, 2px 2px 5px white)
            .toph3
                font-size: 18pt

    .navigator
        @include navigatorBasic(flex, row, center, space-around, white, 80px, 80px, 0, large, sans-serif, 0px 0px 15px black)
        .gel_logo
            @include logoNav(50px, auto)
        .navigationBig
            @include navigationBigBasic(flex, row, space-between, auto)
            .nav-link
                margin: 12px 0 0 0
                padding: 0 0.7vw 0 0.7vw
    
</style>