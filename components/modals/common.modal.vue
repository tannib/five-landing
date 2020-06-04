<template>
  <modal
    name="common-modal"
    width="450"
    height="auto"
    @closed="onModalClose"
  >
    <div class="modal-wrapper pb-8 pt-12 px-8 relative text-center">
      <span
        class="login__icon"
        @click="hide"
      >&nbsp;</span>
      <slot name="modal-content" />
    </div>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      modalState: 'modal/modalState'
    })
  },
  watch: {
    modalState (newVal) {
      newVal.open ? this.show() : this.hide()
    }
  },
  methods: {
    onModalClose () {
      this.$store.commit('modal/toggleModal', { type: this.modalState.type, open: false })
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
  border-radius: 1rem !important
  background-image: linear-gradient(#28b485, #7ed56f)
.vm--overlay
  backdrop-filter: blur(10px)
  background-color: rgba(0, 0, 0, .8)
.login
  &__icon
    position: absolute
    top: 2rem
    right: 2rem
    cursor: pointer
    &,
    &::before,
    &::after
      width: 2rem
      height: 2px
      background-color: white
      display: inline-block
    &::before,
    &::after
      content: ""
      position: absolute
      left: 0
      transition: all .2s
    &
      background-color: transparent
    &::before
      top: 0
      transform: rotate(135deg)
    &::after
      top: 0
      transform: rotate(-135deg)
</style>
