<template>
  <ValidationObserver v-slot="{ invalid }">
    <form class="CompanyDetailsForm form">
      <ValidationProvider
        v-for="{ id, key, name, tip, rules } of structure"
        :key="key"
        v-slot="{ errors }"
        :rules="rules"
        :style="{ 'grid-area': key }"
        class="form__field field"
      >
        <input
          v-model="output[key]"
          :id="id"
          :name="name"
          type="text"
          class="field__input"
          :class="{
            'form__field--invalid': errors.length > 0,
            'form__field--no-empty': output[key].length > 0,
          }"
        />
        <label class="field__label" :for="id">
          {{ name }}
          <span class="field__error">{{ errors[0] }}</span>
        </label>

        <div class="field__help-icon" v-if="tip">
          <div class="field__tooltip">{{ tip }}</div>
        </div>
      </ValidationProvider>
    </form>
  </ValidationObserver>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { v4 as uuid } from 'uuid'

import '@/utils/CompanyDetailsForm-validate'

@Component({
  components: {
    ValidationProvider,
    ValidationObserver,
  },
})
export default class CompanyDetailsForm extends Vue {
  output = {}

  structure = [
    {
      key: 'inn',
      name: 'ИНН',
      tip: 'Это про налоги',
      rules: { required: true, digits: 12 },
    },
    { key: 'bik', name: 'БИК', tip: 'Не в курсах', rules: { digits: 10 } },
    {
      key: 'fullName',
      name: 'Полное наименование организации',
      rules: { required: true, string: true },
    },
    { key: 'shortName', name: 'Сокращенное наименование организации' },
    {
      key: 'legalAddress',
      name: 'Юридический адрес',
      rules: { required: true },
    },
    { key: 'actualAddress', name: 'Фактический адрес' },
    { key: 'mailingAddress', name: 'Почтовый адрес' },
    { key: 'okpo', name: 'ОКПО', tip: 'Какая-то дичь' },
    { key: 'ogrnip', name: 'ОГРНИП', tip: 'Просто забей' },
    { key: 'oktmo', name: 'ОКТМО', tip: 'Рандом' },
    { key: 'okato', name: 'ОКАТО' },
  ]

  created() {
    let count = 0
    for (const field of this.structure) {
      Vue.set(this.structure, count, { id: uuid(), ...field })
      Vue.set(this.output, field.key, '')

      count++
    }
  }
}
</script>

<style lang="scss">
.CompanyDetailsForm {
  padding: 30px 0;
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
