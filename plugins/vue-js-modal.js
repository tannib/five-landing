import Vue from 'vue'
import VModal from 'vue-js-modal'

Vue.use(VModal, {
  dynamic: true,
  injectModalsContainer: true,
  dynamicDefaults: {
    adaptive: true,
    scrollable: true,
    height: 'auto'
  }
})
