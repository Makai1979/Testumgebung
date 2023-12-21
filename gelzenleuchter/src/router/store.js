import { reactive } from 'vue';

function isDesktop() {
  return window.matchMedia('(hover: hover)').matches;
}

export const globalState = reactive({
  windowWidth: window.innerWidth,
  isTogglerOn: true,
  showMenu: false,
  activeButtonIntern: null,
  activeButtonSocialMedia: null,
  activeButtonGelzenleuchter: null,
  activeButtonLinks: null,
  hideMenuTimeout: null,
  
  routesIntern: [
    { path: "/", label: "startseite" },
    { path: "/gelzenritter", label: "gelzenritter" },
    { path: "/inoxan", label: "inoxan" },
    { path: "/inosan", label: "inosan" },
    { path: "/service", label: "service" },
    { path: "/kontakt", label: "kontakt" },
  ],
  routesSocialMedia: [
    { path: "#", label: "facebook" },
    { path: "#", label: "instagram" },
  ],
  routesGelzenleuchter: [
    { path: "#", label: "Impressum" },
    { path: "#", label: "Datenschutzerklärung" },
    { path: "#", label: "AGB" },
  ],
  routesLinks: [
    { path: "#", label: "Atens" },
    { path: "#", label: "Btens" },
    { path: "#", label: "Ctens" },
  ],
  

  toggleMenu() {
    if (isDesktop()) {
      // Logik für Desktop-Geräte mit mouseover und mouseleave
    this.showMenu = !this.showMenu;

    if (this.showMenu) {
      this.isTogglerOn = false;

      this.hideMenuTimeout = setTimeout(() => {
        this.isTogglerOn = true;
        this.showMenu = false;
      }, 2000);
    } else {
      clearTimeout(this.hideMenuTimeout);
      this.isTogglerOn = true;
    }
  } else {
    // Logik für Tablets und Handys mit touchstart und touchend
    if (!this.showMenu) {
      this.showMenu = true;
      this.isTogglerOn = false;
    } else {
      this.showMenu = false;
      this.isTogglerOn = true;
    }
  }
  },

  resetMenuTimeout() {
    if (this.hideMenuTimeout) {
      clearTimeout(this.hideMenuTimeout);
    }
  },

  onMouseOver() {
    if (isDesktop()) {
      clearTimeout(this.hideMenuTimeout);
    }
  },

  onMouseLeave() {
    if (isDesktop() && this.showMenu) {
      clearTimeout(this.hideMenuTimeout);
      this.hideMenuTimeout = setTimeout(() => {
        this.showMenu = false;
        this.isTogglerOn = true;
      }, 2000);
    }
  },

  isTogglerOn() {
    return this.showMenu;
  },
  setActiveButtonIntern(index) {
    this.activeButtonIntern = index;
    this.activeButtonSocialMedia = null;
    this.activeButtonGelzenleuchter = null;
    this.activeButtonLinks = null;
  },
  setActiveButtonSocialMedia(index) {
    this.activeButtonSocialMedia = index;
    this.activeButtonIntern = null;
    this.activeButtonGelzenleuchter = null;
    this.activeButtonLinks = null;
  },
  setActiveButtonGelzenleuchter(index) {
    this.activeButtonGelzenleuchter = index;
    this.activeButtonIntern = null;
    this.activeButtonSocialMedia = null;
    this.activeButtonLinks = null;
  },
  setActiveButtonLinks(index) {
    this.activeButtonLinks = index;
    this.activeButtonIntern = null;
    this.activeButtonSocialMedia = null;
    this.activeButtonGelzenleuchter = null;
  },
  isActiveIntern(index) {
    return this.activeButtonIntern === index;
  },
  isActiveSocialMedia(index) {
    return this.activeButtonSocialMedia === index;
  },
  isActiveGelzenleuchter(index) {
    return this.activeButtonGelzenleuchter === index;
  },
  isActiveLinks(index) {
    return this.activeButtonLinks === index;
  },
});
