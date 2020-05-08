<template>
  <div class="flex flex-1 flex-col">
    <Header />
    <section class="flex items-center min-h-90 bg-top bg-cover bg-gradient w-full clipped">
      <div class="flex flex-grow flex-row container mx-auto">
        <div class="flex-1 mt-4">
          <h1 class="text-white text-4xl font-black mb-5">
            Il primo fanta quotidiano su <br>tutto il mondo dello sport.
          </h1>
          <h2 class="text-white text-xl font-light mb-10">
            Schiera nella stessa formazione tutti i più forti atleti al <br>Mondo e gioca gratis per vincere premi ogni giorno.
          </h2>
          <div class="flex flex-1 content-between">
            <button class="min-w-25 bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-3 px-5 rounded">
              <a class="signup">Registrati!</a>
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
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/header/Header.vue'

export default Vue.extend({
  components: {
    Header
  }
})
</script>

<style lang="sass" scoped>
.bg-gradient
  background-image: linear-gradient(-115deg, rgba(41, 128, 185, 0.95) 0%, rgba(1, 20, 88, 0.95) 80%)
  @apply bg-opacity-95
</style>
