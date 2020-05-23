<template>
  <div class="flex flex-1 flex-col">
    <section class="flex flex-col items-center min-h-90 bg-gradient bg-top bg-cover clipped w-full">
      <Header />
      <div class="flex flex-grow flex-row items-center container mx-auto z-10">
        <div class="flex flex-1 flex-row py-40 items-center">
          <div class="flex-1 mt-4">
            <h1 class="text-white text-4xl font-bold mb-5 leading-snug">
              Il primo fanta quotidiano su <br>tutto il mondo dello sport.
            </h1>
            <h3 class="text-white text-base font-light mb-10">
              Schiera nella stessa formazione tutti i più forti atleti al <br>Mondo e gioca gratis per vincere premi ogni giorno.
            </h3>
            <div class="flex flex-1 content-between">
              <button class="min-w-25 bg-green-600 hover:bg-green text-white text-xl font-bold py-3 px-5 rounded">
                <a class="signup">Registrati</a>
              </button>
              <button class="min-w-25 bg-transparent hover:bg-white border border-white text-white hover:text-green text-xl font-bold py-3 px-5 rounded ml-5">
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
      <div class="flex flex-row container mx-auto py-40">
        <div class="flex flex-1 flex-col overflow-hidden">
          <h3 class="text-4xl text-green-light font-normal mb-0">
            Cos'è
          </h3>
          <h1 class="text-6xl font-black mb-16 leading-tight text-green-600 relative games-heading pb-5">
            THE5GAME?
          </h1>
          <div
            class="slider relative flex items-center content-center pl-6"
          >
            <div class="athlete absolute top-0">
              <img
                :key="currentIndex"
                :src="require(`~/assets/images/player/single_athlete--${currentIndex}.png`)"
              >
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-start content-start">
          <div class="bg-gradiend-green flex flex-1 flex-col p-8 h-full rounded">
            <div class="mb-16">
              <h2 class="text-4xl text-white font-medium mb-5 leading-snug mb-8">
                The5Game è un fantasy game sportivo online.
              </h2>
              <h4 class="text-white text-2xl font-light has-divider leading-relaxed relative pb-8">
                Crea ogni giorno una selezione virtuale di cinque atleti i cui risultati dipenderanno da eventi sportivi reali.
              </h4>
              <h4 class="text-white text-2xl mt-8 font-light leading-relaxed">
                Hai a disposizione un budget per comporre la tua fanta-squadra e schierare tutti insieme i più forti sportivi del Mondo.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center min-h-screen section2-bg bg-top bg-cover clipped-double w-full">
      <div class="flex flex-col flex-grow flex-row items-center container mx-auto justify-center py-56">
        <h1 class="mb-16 text-white uppercase text-5xl text-center">
          Come si gioca <span class="normal-case">a The5Game</span>?
        </h1>
        <div class="steps rounded-lg overflow-hidden w-full flex flex-row items-center">
          <div class="flex flex-1 bg-white relative clipped-x-right h-full items-center justify-center h-full -mr-2">
            <div class="flex flex-col px-16 items-center step-card text-center">
              <img src="~assets/images/icon_registration.png">
              <h3 class="text-yellow-600 mb-5 text-3xl">
                Registrazione
              </h3>
              <p class="text-lg text-center">
                <b class="text-dark-blue">Crea un account</b> inserendo solamente nome, cognome, user, mail e password.
              </p>
            </div>
          </div>
          <div class="flex flex-1 bg-white relative clipped-x-both h-full items-center justify-center h-full -mx-2">
            <div class="flex flex-col px-16 items-center step-card text-center ml-2">
              <img src="~assets/images/icon_lineup.png">
              <h3 class="text-yellow-600 mb-5 text-3xl">
                Formazione
              </h3>
              <p class="text-lg text-center">
                <b class="text-dark-blue">Scegli i tuoi cinque atleti preferiti</b> tra quelli a disposizione e schiera il tuo quintetto.
              </p>
            </div>
          </div>
          <div class="flex flex-1 bg-white relative clipped-x-both h-full items-center justify-center h-full -mx-2">
            <div class="flex flex-col px-16 items-center step-card text-center ml-2">
              <img src="~assets/images/icon_save.png">
              <h3 class="text-yellow-600 mb-5 text-3xl">
                Salvataggio
              </h3>
              <p class="text-lg text-center">
                In base alle tue scelte il computer genererà una formazione da sfidare.
                <b class="text-dark-blue">Salva le formazioni per scendere in campo!</b>
              </p>
            </div>
          </div>
          <div class="flex flex-1 bg-white relative clipped-x-left h-full items-center justify-center h-full -ml-2">
            <div class="flex flex-col px-16 items-center step-card text-center ml-2">
              <img class="w-1/5 h-auto" src="~assets/images/icon_match.png">
              <h3 class="text-yellow-600 mb-5 text-3xl">
                Partita
              </h3>
              <p class="text-lg text-center">
                Goditi gli eventi dei tuoi atleti e raccogli i punti delle loro prestazioni per <b class="text-dark-blue">vincere premi ogni giorno.</b>
              </p>
            </div>
          </div>
        </div>
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
.bg-gradiend-green
  background: linear-gradient(#7ed56f, #28b485)
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.15)
.slider
  height: 330px
.athlete
  img
    transition: all 1.5s ease
.has-divider
  &::before
    content: ''
    height: 3px
    @apply bg-white absolute left-0 bottom-0 w-1/5
.games-heading
  &::before
    content: ''
    height: 3px
    @apply bg-green absolute left-0 bottom-0 w-1/5
.section2-bg
  background: linear-gradient(to right, #2980b9, #011458)
.steps
  height: 25rem
  filter: drop-shadow(0 1.5rem 5rem black)
  .step-card
    min-height: 70%
    @apply absolute
  img
    @apply w-20 mb-3
</style>
