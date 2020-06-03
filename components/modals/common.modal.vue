<template>
  <modal
    name="common-modal"
    width="450"
    height="auto"
    @closed="onModalClose"
  >
    <div class="modal-wrapper pb-5 pt-12 px-8 relative text-center">
      <slot name="modal-content" />
    </div>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      modalOpen: 'modal/modalOpen'
    })
  },
  watch: {
    modalOpen (newVal) {
      newVal ? this.show() : this.hide()
    }
  },
  methods: {
    onModalClose () {
      this.$store.commit('modal/openModal')
    },
    show () {
      this.$modal.show('common-modal')
    },
    hide () {
      this.$modal.hide('common-modal')
    }
  }
}
</script>

<style lang="sass">
.vm--modal
  border-radius: 1rem
  background-image: linear-gradient(#28b485, #7ed56f)
.vm--overlay
  backdrop-filter: blur(10px)
  background-color: rgba(0, 0, 0, .8)
</style>
