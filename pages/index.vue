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
            class="slider relative flex items-center content-center"
          >
            <div class="athlete absolute top-0">
              <transition name="fade" appear>
                <img
                  :key="currentIndex"
                  :src="require(`~/assets/images/player/single_athlete--${currentIndex}.png`)"
                >
              </transition>
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
      currentIndex: (1 as number)
    }
  },
  mounted () {
    timer(0, 4000).subscribe(() => this.setCurrentImg(Math.floor(Math.random() * ((45 - 1) - 1 + 1)) + 1))
  },
  methods: {
    setCurrentImg (index: number) {
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
  img
    transition: all 1.5s ease
</style>
