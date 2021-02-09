<template>
  <div class="CompanyDetailsForm">
    <form>
      <div class="CompanyDetailsForm__row">
        <label>
          <input v-model="inn" :class="{ empty: inn.length == 0 }" type="text" name="ИНН" />
          <span>ИНН</span>
        </label>
        <input class="input--text" type="text" name="БИК" />
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

import '@/utils/CompanyDetailsForm-validate'

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class Home extends Vue {
  inn = 'dfgdf'
}
</script>

<style lang="scss">
.CompanyDetailsForm {
  max-width: 750px;
  margin: 0 auto;
}
</style>
