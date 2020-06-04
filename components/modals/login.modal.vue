<template>
  <div class="text-white">
    <h1 class="text-white text-4xl font-light">
      Bentornato!
    </h1>
    <div class="flex flex-row items-center text-center justify-center mt-2">
      <p class="text-md text-white font-light">
        Non hai ancora un'account?
      </p>
      <span
        class="ml-2 text-md text-blue font-bold cursor-pointer"
        @click="toggleRegisterModal"
      >Registrati!</span>
    </div>
    <div class="mt-5 text-left">
      <span class="text-lg text-white font-light">Continua con</span>
      <div class="flex items-center content-between mt-2">
        <button class="flex items-center justify-center flex-1 min-w-25 bg-facebook hover:bg-facebook text-white text-xl font-normal py-1 px-2 rounded">
          <img
            class="w-4"
            src="~assets/images/icons/fb.png"
          >
          <a class="signup ml-3">Facebook</a>
        </button>
        <button class="flex items-center justify-center flex-1 ml-5 min-w-25 bg-white text-gray-900 text-xl font-normal py-1 px-2 rounded">
          <img
            class="w-4"
            src="~assets/images/icons/google.png"
          >
          <a class="signup ml-3">Google</a>
        </button>
      </div>
    </div>
    <div class="mt-5 flex flex-row content-between items-center">
      <span class="h-2 flex-1 bg-white">&nbsp;</span>
      <span class="text-white uppercase mx-5 text-md">Oppure</span>
      <span class="h-2 flex-1 bg-white">&nbsp;</span>
    </div>
    <form
      action=""
      class="mt-3"
    >
      <input
        class="mb-4 appearance-none outline-none shadow-none rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-none"
        type="text"
        placeholder="Username o Mail"
      >
      <input
        class="mb-4 appearance-none outline-none shadow-none rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-none"
        type="text"
        placeholder="Password"
      >
      <div class="mt-3 flex flex-1 justify-end items-center text-blue font-normal text-md">
        Password dimenticata?
      </div>
      <button class="flex items-center font-bold mt-8 justify-center flex-1 min-w-25 bg-blue text-white text-xl font-normal p-2 w-full rounded-lg">
        Accedi
      </button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    toggleRegisterModal () {
      this.$store.commit('modal/toggleModal', { type: 'RegisterModal', open: true })
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
