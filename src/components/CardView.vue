<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class CardView extends Vue {
  surprise = require('@/assets/surprise.gif')

  mounted() {
    setTimeout(() => {
      this.$emit('back')
    }, 1700)
  }
}
</script>

<template>
  <div class="CardView">
    <img class="CardView__surprise" :src="surprise" alt="" />
  </div>
</template>

<style lang="scss">
.CardView {
  &__surprise {
    display: block;
    margin: 50px auto;
  }
}
</style>
