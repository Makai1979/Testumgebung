<script setup>
import { RouterLink } from 'vue-router';
import '../styles/styles.sass';
</script>


<template>
    <div class="contentHeading">
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

            <router-link to="/" id="homeLogo" @click="globalState.setActiveButtonIntern(0)"><img class="gel_logo"
                    src="../img/main/logo_gel.png" alt="gelzenleuchter Logo"></router-link>


            <div class="navigationBig">
                <router-link v-for="(route, index) in globalState.routesIntern" :to="route.path" :key="index"
                    :class="{ active: globalState.isActiveIntern(index), inactive: !globalState.isActiveIntern(index) }"
                    @click="globalState.setActiveButtonIntern(index)">
                    <div class="nav-link">{{ route.label }}</div>
                </router-link>


                <!-- Suchfeld -->
                <div class="suchfeld">
                    <form class="d-flex" role="search">
                        <input class="form-control" type="search" placeholder="Suchbegriff" aria-label="Suche" />
                        <button class="btn btn-light" type="submit">Suche</button>
                    </form>
                </div>
            </div>

            <div class="navigationSmall">
                <img class="toggleSymbol" src="../img/icons/naviSymbol.svg" alt="navigation"
                    :class="{ toggleSymbolOn: globalState.isTogglerOn, toggleSymbolOff: !globalState.isTogglerOn }"
                    @click="globalState.toggleMenu">

                <div class="toggle-content" @mouseover="globalState.onMouseOver"
                    @mouseleave="globalState.onMouseLeave" v-if="globalState.showMenu">
                    <router-link v-for="(route, index) in globalState.routesIntern" :to="route.path" :key="index"
                        :class="{ active: globalState.isActiveIntern(index), inactive: !globalState.isActiveIntern(index) }"
                        @click="globalState.setActiveButtonIntern(index)">
                        <div class="nav-link">{{ route.label }}</div>
                    </router-link>


                    <!-- Suchfeld -->
                    <div class="suchfeld">
                        <form class="d-flex" role="search">
                            <input class="form-control" type="search" placeholder="Suchbegriff" aria-label="Suche" />
                            <button class="btn btn-light" type="submit">Suche</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { globalState } from '../router/store.js';


export default {
    setup() {
        const toggleMenu = () => {
            globalState.toggleMenu();
        };

        return {
            globalState,
            toggleMenu,
        };
    },
};
</script>

<style lang="sass">


    
</style>