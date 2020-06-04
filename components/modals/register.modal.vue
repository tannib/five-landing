<template>
  <div class="text-white">
    <h1 class="text-white text-4xl font-light">
      Registrati
    </h1>
    <div class="flex flex-row items-center text-center justify-center mt-2">
      <p class="text-md text-white font-light">
        Hai già un account?
      </p>
      <span
        class="ml-2 text-md text-blue font-bold cursor-pointer"
        @click="toggleLoginModal"
      >Login</span>
    </div>
    <div class="mt-5 text-left">
      <span class="text-lg text-white font-light">Continua con</span>
      <div class="flex items-center content-between mt-2">
        <button class="flex items-center justify-center flex-1 min-w-25 bg-facebook hover:bg-facebook text-white text-xl font-normal py-1 px-2 rounded-md">
          <img
            class="w-4"
            src="~assets/images/icons/fb.png"
          >
          <a class="signup ml-3">Facebook</a>
        </button>
        <button class="flex items-center justify-center flex-1 ml-5 min-w-25 bg-white text-gray-900 text-xl font-normal py-1 px-2 rounded-md">
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
      id="register-form"
      action=""
      class="registration__form mt-3"
    >
      <input
        class="mb-4 appearance-none outline-none shadow-none rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-none focus:border-gray-900"
        type="text"
        placeholder="Nome"
      >
      <input
        class="mb-4 appearance-none outline-none shadow-none rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-none"
        type="text"
        placeholder="Cognome"
      >
      <input
        class="mb-4 appearance-none outline-none shadow-none rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-none"
        type="text"
        placeholder="Mail"
      >
      <input
        class="mb-4 appearance-none outline-none shadow-none rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-none"
        type="text"
        placeholder="Username"
      >
      <input
        class="mb-4 appearance-none outline-none shadow-none rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-none"
        type="text"
        placeholder="Password"
      >
      <div class="registration__form__radio-group mt-5">
        <input
          id="terms"
          type="checkbox"
          class="registration__form__radio-input"
          name="size"
        >
        <label
          for="terms"
          class="registration__form__radio-label pl-16 flex items-center justify-between"
        >
          <span class="registration__form__radio-button absolute left-0" />
          <span>Accetto le <a class="registration__form__radio-button--bold">Condizioni generali di contratto.</a></span>
        </label>
      </div>
      <button class="flex items-center font-bold mt-8 justify-center flex-1 min-w-25 bg-blue text-white text-xl font-normal p-2 w-full rounded-lg">
        Registrati!
      </button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLoginModal () {
      this.$store.commit('modal/toggleModal', { type: 'LoginModal', open: true })
    }
  }
}
</script>

<style lang="sass" scoped>
.registration__form
  &__radio-input
    display: none
  &__radio-label
    font-size: 1rem
    cursor: pointer
    position: relative
    color: white
  &__radio-button
    height: 1.5rem
    width: 1.5rem
    border: 4px solid #021b79
    border-radius: 0.4rem
    &::after
      content: ""
      display: block
      height: .7rem
      width: .7rem
      border-radius: 3px
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      transition: opacity .2s
      @apply bg-blue opacity-0 absolute
    &--bold
      margin-left: .1rem
      @apply text-blue font-bold cursor-pointer
  &__radio-input:checked ~ &__radio-label &__radio-button::after
    @apply opacity-100
</style>
