<template>
  <div class="CompanyDetailsForm">
    <ValidationProvider rules="required|digits:13" v-slot="{ errors }">
      <input v-model="inn" type="text" name="ИНН">
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
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
}
</script>
