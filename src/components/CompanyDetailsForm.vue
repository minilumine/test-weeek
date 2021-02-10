<template>
  <form class="CompanyDetailsForm form">
    <label
      class="form__elem"
      v-for="{ name, label } of structure"
      :key="name"
      :style="{ 'grid-area': name }"
    >
      <input
        type="text"
        v-model="data[name]"
        class="form__input"
        :class="{ 'form__input--no-empty': data[name].length !== 0 }"
      />
      <span class="form__label">{{ label }}</span>
    </label>
  </form>
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
export default class CompanyDetailsForm extends Vue {
  data = {}

  structure = [
    { name: 'inn', label: 'ИНН' },
    { name: 'bik', label: 'БИК' },
    { name: 'fullName', label: 'Полное наименование организации' },
    { name: 'shortName', label: 'Сокращенное наименование организации' },
    { name: 'legalAddress', label: 'Юридический адрес' },
    { name: 'actualAddress', label: 'Фактический адрес' },
    { name: 'mailingAddress', label: 'Почтовый адрес' },
    { name: 'okpo', label: 'ОКПО' },
    { name: 'ogrnip', label: 'ОГРНИП' },
    { name: 'oktmo', label: 'ОКТМО' },
    { name: 'okato', label: 'ОКАТО' },
  ]

  created() {
    for ({ name } of this.structure) {
      this.data[name] = ''
    }
  }
}
</script>

<style lang="scss">
.CompanyDetailsForm {
  max-width: 750px;
  margin: 0 auto;
  grid-template-areas:
    'inn bik'
    'fullName fullName'
    'shortName shortName'
    'legalAddress legalAddress'
    'actualAddress actualAddress'
    'mailingAddress mailingAddress'
    'okpo ogrnip'
    'oktmo okato';
}
</style>
