<template>
  <div class="CompanyDetailsForm">
    <form>
      <label>
        <input v-model="inn" :class="{ empty: inn.length == 0 }" type="text" />
        <span>ИНН</span>
      </label>
      <label>
        <input v-model="bik" :class="{ empty: bik.length == 0 }" type="text" />
        <span>БИК</span>
      </label>

      <label>
        <input v-model="bik" :class="{ empty: bik.length == 0 }" type="text" />
        <span>БИК</span>
      </label>

      <label>
        <input v-model="fullName" :class="{ empty: fullName.length == 0 }" type="text" />
        <span>Полное наименование организации</span>
      </label>

      <label>
        <input v-model="shortName" :class="{ empty: shortName.length == 0 }" type="text" />
        <span>Сокращенное наименование организации</span>
      </label>
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
  inn = ''
  bik = ''
  fullName = ''
  shortName = ''
  legalAddress = ''
  actualAddress = ''
  mailingAddress = ''
}
</script>

<style lang="scss">
.CompanyDetailsForm {
  max-width: 750px;
  margin: 0 auto;
}
</style>
