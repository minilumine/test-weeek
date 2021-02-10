<template>
  <div class="App">
    <CompanyDetailsForm />
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import CompanyDetailsForm from './CompanyDetailsForm'

@Component({
  components: {
    CompanyDetailsForm
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.App {
  font-family: 'Golos', sans-serif;
}
</style>
