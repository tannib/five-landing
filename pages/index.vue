<template>
  <div class="flex flex-1 flex-col">
    <Menu />
    <section class="flex flex-col items-center min-h-90 bg-gradient bg-top bg-cover clipped w-full px-3 xl:px-0 relative">
      <Header />
      <div class="flex flex-grow flex-row items-center container mx-auto z-10">
        <div class="flex flex-1 flex-col lg:flex-row pt-48 xl:pt-40 pb-32 lg:pb-40 items-center">
          <div class="flex-1 mt-4 text-center lg:text-left mb-16 lg:mb-8 lg:mb-0">
            <h1 class="text-white text-3xl sm:text-4xl font-bold mb-5 leading-snug">
              Il primo fanta quotidiano su <br>tutto il mondo dello sport.
            </h1>
            <h3 class="text-white text-base font-light mb-10">
              Schiera nella stessa formazione tutti i più forti atleti al <br class="hidden md:block">Mondo e gioca gratis per vincere premi ogni giorno.
            </h3>
            <div class="flex flex-1 justify-center lg:justify-start">
              <button
                class="w-32 bg-green-600 hover:bg-green text-white text-xl font-bold py-3 px-5 rounded"
                @click="toggleModal('RegisterModal')"
              >
                <a class="signup">Registrati</a>
              </button>
              <button
                class="w-32 bg-transparent hover:bg-white border border-white text-white hover:text-green text-xl font-bold py-3 px-5 rounded ml-5"
                @click="toggleModal('LoginModal')"
              >
                <a class="login">Login</a>
              </button>
            </div>
          </div>
          <div class="flex-1">
            <img
              src="~assets/images/mockups/desktop.png"
              class="w-full hidden md:block"
              alt="The5Game Desktop"
              title="The5Game Desktop"
            >
            <img
              src="~assets/images/mockups/iphone.png"
              class="w-1/2 block md:hidden m-auto"
              alt="The5Game Desktop"
              title="The5Game Desktop"
            >
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-row items-center min-h-75 w-full">
      <div class="flex px-3 flex-col lg:flex-row container mx-auto py-32 lg:py-40">
        <div class="flex flex-1 flex-col overflow-hidden text-center lg:text-left mb-16 lg:mb-0">
          <h3 class="text-3xl lg:text-4xl text-green-light font-normal mb-0">
            Cos'è
          </h3>
          <h1 class="text-5xl lg:text-6xl font-black mb-10 lg:mb-16 leading-tight text-green-600 relative games-heading pb-0 lg:pb-5">
            THE5GAME?
          </h1>
          <div class="slider relative flex items-center content-center pl-0 lg:pl-6 mb-0 lg:-mb-6">
            <div class="athlete h-full absolute top-0 m-auto lg:m-0 left-0 right-0">
              <img
                :key="currentIndex"
                class="m-auto lg:m-0 h-full lg:w-auto"
                :src="require(`~/assets/images/player/single_athlete--${currentIndex}.png`)"
              >
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-start content-start">
          <div class="bg-gradiend-green flex flex-1 flex-col p-5 lg:p-8 h-full rounded">
            <div class="mb-16">
              <h2 class="text-3xl lg:text-4xl text-white font-medium mb-5 leading-snug mb-8">
                The5Game è un fantasy game sportivo online.
              </h2>
              <h4 class="text-white text-xl lg:text-2xl font-light has-divider leading-relaxed relative pb-8">
                Crea ogni giorno una selezione virtuale di cinque atleti i cui risultati dipenderanno da eventi sportivi reali.
              </h4>
              <h4 class="text-white text-xl lg:text-2xl mt-8 font-light leading-relaxed">
                Hai a disposizione un budget per comporre la tua fanta-squadra e schierare tutti insieme i più forti sportivi del Mondo.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center min-h-screen section2-bg bg-top bg-cover clipped-double w-full">
      <div class="flex px-3 xl:px-0 flex-col flex-grow flex-row items-center container mx-auto justify-center py-32 lg:py-40 lg:py-56">
        <h1 class="mb-16 text-white uppercase text-4xl lg:text-5xl text-center">
          Come si gioca <span class="normal-case">a The5Game</span>?
        </h1>
        <div class="steps rounded-lg overflow-hidden w-full flex flex-col lg:flex-row items-center">
          <div class="flex flex-1 bg-white relative clipped-x-right w-full items-center justify-center h-auto lg:h-full py-10 mx-0 mb-5 lg:mb-0 lg:-mr-2">
            <div class="flex flex-col px-16 items-center step-card text-center justify-center lg:justify-start">
              <img src="~assets/images/icon_registration.png">
              <h3 class="text-yellow-600 mb-5 text-3xl">
                Registrazione
              </h3>
              <p class="text-lg text-center">
                <b class="text-dark-blue">Crea un account</b> inserendo solamente nome, cognome, user, mail e password.
              </p>
            </div>
          </div>
          <div class="flex flex-1 bg-white relative clipped-x-both w-full items-center justify-center h-auto lg:h-full py-10 mx-0 mb-5 lg:mb-0 lg:-mx-2">
            <div class="flex flex-col px-16 items-center step-card text-center justify-center lg:justify-start ml-2">
              <img src="~assets/images/icon_lineup.png">
              <h3 class="text-yellow-600 mb-5 text-3xl">
                Formazione
              </h3>
              <p class="text-lg text-center">
                <b class="text-dark-blue">Scegli i tuoi cinque atleti preferiti</b> tra quelli a disposizione e schiera il tuo quintetto.
              </p>
            </div>
          </div>
          <div class="flex flex-1 bg-white relative clipped-x-both w-full items-center justify-center h-auto lg:h-full py-10 mx-0 mb-5 lg:mb-0 lg:-mx-2">
            <div class="flex flex-col px-16 items-center step-card text-center justify-center lg:justify-start ml-2">
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
          <div class="flex flex-1 bg-white relative clipped-x-left w-full items-center justify-center h-auto lg:h-full py-10 mx-0 mb-0 lg:mb-0 lg:-ml-2">
            <div class="flex flex-col px-16 items-center step-card text-center justify-center lg:justify-start ml-2">
              <img
                class="w-1/5 h-auto"
                src="~assets/images/icon_match.png"
              >
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
    <section class="flex flex-col lg:flex-row justify-center items-center min-h-75 w-full">
      <div class="flex flex-col container mx-auto py-20 lg:py-40">
        <div class="m-auto flex flex-1 flex-col lg:flex-row items-center lg:items-baseline justify-center mb-16">
          <h1 class="text-5xl lg:text-6xl font-black leading-tight text-green-600 relative pb-0 lg:pb-5">
            Gli sport
          </h1>
          <h3 class="text-4xl text-green-light font-normal mb-0">
            &nbsp;in the5Game
          </h3>
        </div>
        <div class="flex flex-1 flex-col lg:flex-row items-start justify-between">
          <div class="m-auto flex flex-1 flex-row items-start justify-between flex-wrap">
            <div class="box-game flex flex-1 flex-col text-center">
              <div class="flex items-center justify-center p-5 rounded-xl w-20 h-20 lg:w-32 lg:h-32 m-auto calcio-gradient shadow-custom overflow-hidden mb-10">
                <img
                  class=""
                  src="~assets/images/icons/calcio.png"
                >
              </div>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">Serie A & Liga</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">Premier & Bundesliga</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">Eredivise & Ligue 1</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">Champions & Europa League</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">Europeo & Modiali</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">Amichevoli & Qualificazioni</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">Copa Libertadores</span>
              <span class="py-2 uppercase text-tiny lg:text-sm">Coppe & Supercoppe</span>
            </div>
            <div class="box-game flex flex-1 flex-col text-center mx-0 lg:mx-4">
              <div class="flex items-center justify-center p-5 rounded-xl w-20 h-20 lg:w-32 lg:h-32 m-auto basket-gradient shadow-custom overflow-hidden mb-10">
                <img
                  class=""
                  src="~assets/images/icons/basket.png"
                >
              </div>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">NBA REGULAR SEASON</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">NBA PLAYOFF</span>
              <span class="py-2 uppercase text-tiny lg:text-sm">NBA FINALS</span>
            </div>
            <div class="box-game flex flex-1 flex-col text-center mx-0 lg:mx-4">
              <div class="flex items-center justify-center p-5 rounded-xl w-20 h-20 lg:w-32 lg:h-32 m-auto football-gradient shadow-custom overflow-hidden mb-10">
                <img
                  class=""
                  src="~assets/images/icons/nfl.png"
                >
              </div>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">NFL REGULAR SEASON</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">NFL PLAYOFF</span>
              <span class="py-2 uppercase text-tiny lg:text-sm">SUPER BOWL</span>
            </div>
            <div class="box-game flex flex-1 flex-col text-center mx-0 lg:mx-4">
              <div class="flex items-center justify-center p-5 rounded-xl w-20 h-20 lg:w-32 lg:h-32 m-auto tennis-gradient shadow-custom overflow-hidden mb-10">
                <img
                  class=""
                  src="~assets/images/icons/tennis.png"
                >
              </div>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">GRANDI SLAM ATP</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">MASTER 1000 ATP</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">ATP 500 & 250</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">ATP FINALS</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">COPPA DAVIS</span>
              <span class="py-2 uppercase text-tiny lg:text-sm">NEXT GEN</span>
            </div>
            <div class="box-game flex flex-1 flex-col text-center mx-0 lg:mx-4">
              <div class="flex items-center justify-center p-5 rounded-xl w-20 h-20 lg:w-32 lg:h-32 m-auto motori-gradient shadow-custom overflow-hidden mb-10">
                <img
                  class=""
                  src="~assets/images/icons/motori.png"
                >
              </div>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">FORMULA 1</span>
              <span class="py-2 uppercase text-tiny lg:text-sm">MOTOGP</span>
            </div>
            <div class="box-game flex flex-1 flex-col text-center">
              <div class="flex items-center justify-center p-5 rounded-xl w-20 h-20 lg:w-32 lg:h-32 m-auto baseball-gradient shadow-custom overflow-hidden mb-10">
                <img
                  class=""
                  src="~assets/images/icons/calcio.png"
                >
              </div>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">MLB REGULAR SEASON</span>
              <span class="py-2 border-b border-gray-300 uppercase text-tiny lg:text-sm">MLB PLAYOFF</span>
              <span class="py-2 uppercase text-tiny lg:text-sm">WORLD SERIES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center min-h-screen section2-bg bg-top bg-cover clipped-double w-full px-3 xl:px-0">
      <div class="flex flex-col flex-grow flex-row items-center container mx-auto justify-center py-40 lg:py-56">
        <div class="flex flex-col">
          <h1 class="text-3xl sm:text-4xl text-white text-center lg:text-left leading-none mb-3 sm:mb-auto">
            THE5MOST
          </h1>
          <h1 class="mb-16 lg:mb-24 faq-heading text-5xl lg:text-6xl text-center leading-none">
            Frequently Asked Questions
          </h1>
        </div>
        <div class="w-full flex flex-col lg:flex-row items-start justify-between mb-0 lg:mb-16">
          <div class="p-8 xl:p-10 bg-white rounded-lg card-shadow mb-5 lg:mb-0">
            <h3 class="uppercase mb-3 font-bold text-dark-blue">
              è gratuito giocare a the5game?
            </h3>
            <p class="m-0 text-md text-gray-800">
              Sì, The5Game è gratis e lo sarà sempre.
              Per migliorare l'esperienza di gioco sono previsti dei pacchetti premium, ma le funzionalità e le opportunità di vittoria sono le stesse anche in modalità gratuita.
            </p>
          </div>
          <div class="p-8 lg:p-10 bg-white w-full rounded-lg card-shadow mb-5 lg:mb-0 mx-0 lg:mx-16 xl:mx-24">
            <h3 class="uppercase mb-3 font-bold text-dark-blue">
              COME SI GIOCA A THE5GAME?
            </h3>
            <p class="m-0 text-md text-gray-800">
              Crea ogni giorno una formazione composta da cinque atleti scegliendo tra tutti quelli disponibili.
              Gli atleti a disposizione variano di giorno in giorno perchè è possibile schierare solamente quelli che scenderanno in campo o in pista quel giorno.
            </p>
          </div>
          <div class="p-8 lg:p-10 bg-white rounded-lg card-shadow mb-5 lg:mb-0">
            <h3 class="uppercase mb-3 font-bold text-dark-blue">
              COME POSSO COMPORRE LA MIA FORMAZIONE?
            </h3>
            <p class="m-0 text-md text-gray-800">
              Nella scelta dei tuoi cinque atleti hai l'assoluta libertà di scelta, nel rispetto del budget predefinito.
              Puoi mischiare cinque sport differenti come puoi scegliere semplicemente cinque atleti della tua squadra preferita.
            </p>
          </div>
        </div>
        <div class="w-full flex flex-col lg:flex-row items-start justify-between mb-16 lg:mb-24">
          <div class="p-8 lg:p-10 bg-white rounded-lg card-shadow h-2/4 mb-5 lg:mb-0 mx-0 lg:mr-8">
            <h3 class="uppercase mb-3 font-bold text-dark-blue">
              COME SI VINCONO I PREMI?
            </h3>
            <p class="m-0 text-md text-gray-800">
              In The5Game puoi vincere ogni giorno.
              Sono infatti presenti due differenti competizioni: una giornaliera e una settimanale.
              L'utente che con i risultati dei suoi quintetti sarà primo in classifica al termine di ogni competizione si porterà a caso l'intero premio.
            </p>
          </div>
          <div class="p-8 lg:p-10 bg-white rounded-lg card-shadow h-2/4 ml-0 lg:ml-8">
            <h3 class="uppercase mb-3 font-bold text-dark-blue">
              IN COSA CONSISTONO I PREMI?
            </h3>
            <p class="m-0 text-md text-gray-800">
              La nostra volontà è dare ai vincitori un premio che fosse il più simile possibile a soldi veri.
              La legislazione italiana putroppo ci vieta di inviare soldi per cui l'alternativa legale più vicina al denaro sono buoni Amazon, che sono accumulabili e con cui è possibile comprare quello che si vuole.
            </p>
          </div>
        </div>
        <div>
          <p class="text-base sm:text-xl text-white px-0 lg:px-32 text-center lg:text-left leading-relaxed">
            Per tutti i tuoi ulteriori dubbi su cos'è The5Game, chi può partecipare, come si gioca e quando si vince, ti reindirizziamo <a class="font-bold">alla sezione FAQ</a> dove troverai tutte le risposte che cerchi oppure alla pagina <a class="font-bold">REGOLAMENTO</a>.
          </p>
        </div>
      </div>
    </section>
    <Modal>
      <component
        :is="currentModal"
        slot="modal-content"
      />
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { timer } from 'rxjs'
import { mapGetters } from 'vuex'
import Header from '~/components/header/Header.vue'
import Menu from '~/components/menu/Menu.vue'
import Modal from '~/components/modals/common.modal.vue'
import RegisterModal from '~/components/modals/register.modal.vue'
import LoginModal from '~/components/modals/login.modal.vue'

export default Vue.extend({
  components: {
    Header,
    Menu,
    Modal,
    RegisterModal,
    LoginModal
  },
  data () {
    return {
      currentIndex: (1 as number),
      currentModal: 'RegisterModal'
    }
  },
  computed: {
    ...mapGetters({
      modalState: 'modal/modalState'
    })
  },
  watch: {
    modalState (newVal) {
      this.currentModal = newVal.type
    }
  },
  mounted () {
    timer(0, 4000).subscribe(() => this.setCurrentImg(Math.floor(Math.random() * ((45 - 1) - 1 + 1)) + 1))
  },
  methods: {
    setCurrentImg (index: number) {
      this.currentIndex = index
    },
    toggleModal (modalType: string) {
      this.currentModal = modalType
      this.$store.commit('modal/toggleModal', { type: this.currentModal, open: !this.modalState.open })
    }
  }
})
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;0,900;1,400&display=swap')
.bg-gradient
  background-image: linear-gradient(-115deg, rgba(41, 128, 185, 0.95) 0%, rgba(1, 20, 88, 0.95) 80%)
  @apply bg-opacity-95
.bg-gradiend-green
  background: linear-gradient(#7ed56f, #28b485)
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.15)
.slider
  height: 330px
  @media (max-width: 1023px)
    height: 220px
  @media (max-width: 640px)
    height: 180px
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
    @media (max-width: 1023px)
      @apply hidden
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
@media (max-width: 1023px)
  .steps
    @apply h-auto
    .step-card
      min-height: 280px
      @apply relative
.calcio-gradient
  background: radial-gradient(#2ed099, #196e51)
.basket-gradient
  background: radial-gradient(#f68658, #cc440b)
.football-gradient
  background: radial-gradient(#2ed099, #196e51)
.tennis-gradient
  background: radial-gradient(#82a9d7, #33649e)
.motori-gradient
  background: radial-gradient(#555 60%, #111)
.baseball-gradient
  background: radial-gradient(#ff3e5a 50%, #b5001a)
.shadow-custom
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3)
.card-shadow
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.5)
.rounded-xl
  border-radius: 1.5rem
.faq-heading
  background: -webkit-linear-gradient(#7ed56f, #28b485)
  background-clip: text
  -webkit-text-fill-color: transparent
</style>
