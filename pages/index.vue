<template>
  <div class="flex flex-1 flex-col">
    <section class="flex flex-col items-center min-h-90 bg-gradient bg-top bg-cover clipped w-full">
      <Header />
      <div class="flex flex-grow flex-row items-center container mx-auto z-10">
        <div class="flex flex-1 flex-row py-40 items-center">
          <div class="flex-1 mt-4">
            <h1 class="text-white text-4xl font-black mb-5">
              Il primo fanta quotidiano su <br>tutto il mondo dello sport.
            </h1>
            <h2 class="text-white text-xl font-light mb-10">
              Schiera nella stessa formazione tutti i più forti atleti al <br>Mondo e gioca gratis per vincere premi ogni giorno.
            </h2>
            <div class="flex flex-1 content-between">
              <button class="min-w-25 bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-3 px-5 rounded">
                <a class="signup">Registrati</a>
              </button>
              <button class="min-w-25 bg-transparent hover:bg-white border border-white text-white hover:text-green-600 text-xl font-bold py-3 px-5 rounded ml-5">
                <a class="login">Login</a>
              </button>
            </div>
          </div>
          <div class="flex-1">
            <img
              src="~assets/images/mockups/desktop.png"
              class="w-full"
              alt="The5Game Desktop"
              title="The5Game Desktop"
            >
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-row items-center min-h-75 w-full">
      <div class="flex flex-row items-center container mx-auto py-40">
        <div class="flex flex-1 flex-col overflow-hidden">
          <span class="text-4xl font-black">Cos'è</span>
          <span class="text-6xl font-black mb-8">THE5GAME?</span>
          <div
            ref="playersList"
            class="slider relative flex items-center content-center"
          >
            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--1.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--2.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--3.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--4.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--5.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--6.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--7.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--8.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--9.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--10.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--11.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--12.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--13.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--14.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--15.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--16.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--17.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--18.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--19.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--20.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--21.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--22.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--23.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--24.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--25.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--26.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--27.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--28.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--29.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--30.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--31.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--32.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--33.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--34.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--35.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--36.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--37.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--38.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--39.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--40.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--41.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--42.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--43.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--44.png"
                alt=""
              >
            </div>

            <div class="athlete invisible opacity-0 absolute top-0">
              <img
                src="~assets/images/player/single_athlete--45.png"
                alt=""
              >
            </div>
          </div>
        </div>
        <div class="flex-1" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { timer } from 'rxjs'
import Header from '~/components/header/Header.vue'

export default Vue.extend({
  components: {
    Header
  },
  data () {
    return {
      currentIndex: (0 as number)
    }
  },
  computed: {
    playersList (): any {
      return (this.$refs.playersList as any).getElementsByClassName('athlete')
    }
  },
  mounted () {
    timer(0, 4000).subscribe(() => this.setCurrentImg(Math.floor(Math.random() * ((this.playersList.length - 1) - 0 + 1)) + 0))
  },
  methods: {
    setCurrentImg (index: number) {
      this.playersList[index].classList.remove(...['invisible', 'opacity-0'])
      this.playersList[index].classList.add(...['visible', 'opacity-100'])
      this.playersList[this.currentIndex].classList.remove(...['visible', 'opacity-100'])
      this.playersList[this.currentIndex].classList.add(...['invisible', 'opacity-0'])
      this.currentIndex = index
    }
  }
})
</script>

<style lang="sass" scoped>
.bg-gradient
  background-image: linear-gradient(-115deg, rgba(41, 128, 185, 0.95) 0%, rgba(1, 20, 88, 0.95) 80%)
  @apply bg-opacity-95
.slider
  height: 330px
  .athlete
    transition: all 1s
    @apply absolute
</style>
