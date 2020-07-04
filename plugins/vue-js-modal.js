import Vue from 'vue'
import VModal from 'vue-js-modal'
import 'vue-js-modal/dist/styles.css'

Vue.use(VModal, {
  dynamic: true,
  injectModalsContainer: true,
  dynamicDefaults: {
    adaptive: true,
    scrollable: true,
    height: 'auto'
  }
})
