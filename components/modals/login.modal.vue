<template>
  <div class="text-white">
    <h1 class="text-white text-4xl font-light">
      Bentornato!
    </h1>
    <div class="flex flex-row items-center text-center justify-center mt-2">
      <p class="text-md text-white font-light">
        Non hai ancora un'account?
      </p>
      <span class="ml-2 text-md text-blue-800 font-normal underline">Registrati</span>
    </div>
    <div class="mt-5 text-left">
      <span class="text-lg text-white font-light">Continua con</span>
      <div class="flex items-center content-between mt-1">
        <button class="flex-1 min-w-25 bg-blue-600 hover:bg-blue text-white text-xl font-normal py-1 px-2 rounded">
          <a class="signup">Facebook</a>
        </button>
        <button class="flex-1 ml-5 min-w-25 bg-white text-gray-900 text-xl font-normal py-1 px-2 rounded">
          <a class="signup">Google</a>
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
        class="mb-3 appearance-none outline-none shadow-none rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-none"
        type="text"
        placeholder="Username o Mail"
      >
      <input
        class="mb-3 appearance-none outline-none shadow-none rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-none"
        type="text"
        placeholder="Password"
      >
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
