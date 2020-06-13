<template>
  <div
    class="nav-menu"
    :class="{ open: menuOpen }"
  >
    <div
      class="menu-backdrop fixed left-0 top-0 w-screen h-screen"
      @click="openMenu"
    />
    <div class="container fixed left-0 right-0 m-auto z-50">
      <div class="expandable-pentagon" />
      <div
        class="menu-toggle"
        @click="openMenu"
      >
        <span class="menu-toggle_icon">&nbsp;</span>
      </div>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a
              id="nav__list--signup"
              class="navigation__link mb-2"
            >Registrati</a>
          </li>
          <li class="navigation__item">
            <a
              id="nav__list--login"
              class="navigation__link mb-2"
            >Login</a>
          </li>
          <li class="navigation__item">
            <a
              id="nav__list--rules"
              class="navigation__link mb-2"
            >Regolamento</a>
          </li>
          <li class="navigation__item">
            <a
              id="nav__list--faq"
              class="navigation__link mb-2"
            >FAQ</a>
          </li>
          <li class="navigation__item">
            <a
              id="nav__list--contacts"
              class="navigation__link"
            >Contatti</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
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
<style lang="sass" scoped>
.nav-menu
  z-index: 1
  .navigation__nav
    position: absolute
    right: 0
    top: 50vh
    transform: translateY(-50%) scale(0)
    z-index: 50
    transition: opacity 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)
    transition-delay: .2s
    opacity: 0
    .navigation__link
      display: inline-block
      font-size: 2.5rem
      font-weight: 300
      padding: .5rem 1rem
      color: white
      text-decoration: none
      text-transform: uppercase
      background-image: linear-gradient(105deg, transparent 0%, transparent 50%, white 50%)
      background-size: 220%
      transition: all .4s
      cursor: pointer
      span
        margin-right: 1.5rem
        display: inline-block
      &:hover,
      &:active
        background-position: 100%
        color: #196e51
        transform: translateX(1rem)
  .menu-backdrop
    backdrop-filter: blur(10px)
    background-color: rgba(0, 0, 0, 0.8)
    z-index: -50
    display: none
  .expandable-pentagon
    height: 6rem
    width: 6rem
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)
    position: absolute
    right: 0
    top: 2rem
    background-image: radial-gradient(#28b485, #7ed56f)
    z-index: 3
    transition: all 0.4s ease-in-out
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1)
    transform: scale(1)
    transform-origin: center
    @media (max-width: 1024px)
      right: .75rem
    @media (max-width: 640px)
      height: 4rem
      width: 4rem
  .menu-toggle
    background-color: #196e51
    height: 4.5rem
    width: 4.5rem
    position: absolute
    top: 2.75rem
    right: .75rem
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)
    z-index: 5
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1)
    text-align: center
    cursor: pointer
    &:hover
      .menu-toggle_icon
        &::before
          top: -.75rem
        &::after
          top: .75rem
    .menu-toggle_icon
      position: relative
      margin-top: 2.5rem
      &,
      &::before,
      &::after
        width: 2rem
        height: 2px
        background-color: white
        display: inline-block
      &::before,
      &::after
        content: ""
        position: absolute
        left: 0
        transition: all .2s
      &::before
        top: -.6rem
      &::after
        top: .6rem
    @media (max-width: 1024px)
      right: 1.5rem
    @media (max-width: 640px)
      height: 2.5rem
      width: 2.5rem
      &:hover
        .menu-toggle_icon
          &::before
            top: -.3rem
          &::after
            top: .3rem
      .menu-toggle_icon
        margin-top: 1.25rem
        &,
        &::before,
        &::after
          width: 1.25rem
        &::before
          top: -.3rem
        &::after
          top: .3rem
  &.open
    .expandable-pentagon
      transform: scale(25)
      @media (max-width: 640px)
        transform: scale(40)
    .menu-backdrop
      z-index: 2
      display: flex
    .navigation__nav
      opacity: 1
      transform: translateY(-50%) scale(1)
      transition-delay: 0
    .menu-toggle_icon
      position: relative
      margin-top: 2.5rem
      &
        background-color: transparent
      &::after
        transform: rotate(-135deg)
        top: 0 !important
      &::before
        transform: rotate(135deg)
        top: 0 !important
      @media (max-width: 640px)
        margin-top: 1.25rem
        &,
        &::before,
        &::after
          width: 1.25rem
        &::before
          top: -.3rem
        &::after
          top: .3rem
</style>
