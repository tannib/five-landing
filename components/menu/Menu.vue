<template>
  <div class="nav-menu" :class="{ open: menuOpen }">
    <!-- <button class="absolute navigation__button btn btn-transparent right-0 mt-8 flex justify-center items-center outline-none">
      <span class="navigation__icon flex justify-center items-center">&nbsp;</span>
    </button>

    <div class="navigation__container">
      <div class="navigation__background">
        &nbsp;
      </div>
    </div> -->
    <div class="menu-backdrop fixed left-0 top-0 w-screen h-screen" />
    <div class="container fixed left-0 right-0 m-auto z-50">
      <div class="expandable-pentagon" />
      <div class="menu-toggle" @click="openMenu">
        <span class="menu-toggle_icon">&nbsp;</span>
      </div>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a id="nav__list--signup" class="navigation__link mb-2">Registrati</a>
          </li>
          <li class="navigation__item">
            <a id="nav__list--login" class="navigation__link mb-2">Login</a>
          </li>
          <li class="navigation__item">
            <a id="nav__list--rules" class="navigation__link mb-2">Regolamento</a>
          </li>
          <li class="navigation__item">
            <a id="nav__list--faq" class="navigation__link mb-2">FAQ</a>
          </li>
          <li class="navigation__item">
            <a id="nav__list--contacts" class="navigation__link">Contatti</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import './Menu.sass'
export default {
  data () {
    return {
      menuOpen: false
    }
  },
  watch: {
    /* menuOpen (val) {
      const body = document.body
      if (val) {
        body.style.overflow = 'hidden'
      } else {
        body.style.overflow = 'auto'
      }
    } */
  },
  methods: {
    openMenu () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>
