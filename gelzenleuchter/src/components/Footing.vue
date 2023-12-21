<script setup>
import { RouterLink } from 'vue-router';
import '../styles/styles.sass';
</script>


<template>
    <div class="contentFooting">
        <footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
            <div class="Topper">
                <div class="rowContent">
                    <div class="Balken2">&nbsp;</div>
                    <div class="colText">
                        <div class="toph3"><img class="imgInTextLeft" src="../img/icons/deutscheFahne.svg"
                                alt="deutsche Fahne"><b>Made in Germany!</b><img class="imgInTextRight"
                                src="../img/icons/deutscheFahne.svg" alt="deutsche Fahne"></div>
                    </div>
                    <div class="Balken1">&nbsp;</div>
                </div>

            </div>
            <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">

                <div class="row">
                    <div class="col-lg-3 mb-3">

                        <ul class="list-unstyled small">
                            <li class="mb-2">&copy; 2024 gelzenleuchter GmbH<br>
                                <router-link v-for="(route, index) in globalState.routesGelzenleuchter" :to="route.path" :key="index"
                                :class="{ active: globalState.isActiveGelzenleuchter(index), inactive: !globalState.isActiveGelzenleuchter(index) }"
                                @click="globalState.setActiveButtonGelzenleuchter(index)">
                                <div class="footer-nav-link">{{ route.label }}</div>
                            </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-3 col-lg-2 offset-lg-1 mb-3">
                        <h5>Homepage</h5>
                        <ul class="list-unstyled">
                            <router-link v-for="(route, index) in globalState.routesIntern" :to="route.path" :key="index"
                                :class="{ active: globalState.isActiveIntern(index), inactive: !globalState.isActiveIntern(index) }"
                                @click="globalState.setActiveButtonIntern(index)">
                                <div class="footer-nav-link">{{ route.label }}</div>
                            </router-link>
                        </ul>
                    </div>
                    <div class="col-3 col-lg-2 mb-3">
                        <h5>Social Media</h5>
                        <ul class="list-unstyled">
                            <router-link v-for="(route, index) in globalState.routesSocialMedia" :to="route.path" :key="index"
                                :class="{ active: globalState.isActiveSocialMedia(index), inactive: !globalState.isActiveSocialMedia(index) }"
                                @click="globalState.setActiveButtonSocialMedia(index)">
                                <div class="footer-nav-link">{{ route.label }}</div>
                            </router-link>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-3">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <router-link v-for="(route, index) in globalState.routesLinks" :to="route.path" :key="index"
                                :class="{ active: globalState.isActiveLinks(index), inactive: !globalState.isActiveLinks(index) }"
                                @click="globalState.setActiveButtonLinks(index)">
                                <div class="footer-nav-link">{{ route.label }}</div>
                            </router-link>
                        </ul>
                    </div>
                    
                </div>

            </div>
            <div class="Topper">
                <div class="rowContent">
                    <div class="Balken1">&nbsp;</div>
                    <div class="Balken2">&nbsp;</div>
                </div>


            </div>
        </footer>
    </div>
</template>

<script>
import { globalState } from '../router/store.js';


export default {
  setup() {
    
    return {
      globalState,
    };
  },
};

</script>

<style lang="scss" scoped></style>