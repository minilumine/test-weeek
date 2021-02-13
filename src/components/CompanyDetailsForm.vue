<template>
  <form class="CompanyDetailsForm form">
    <label
      class="form__field"
      v-for="{ name, label, tip } of structure"
      :key="name"
      :style="{ 'grid-area': name }"
    >
      <input
        type="text"
        v-model="output[name]"
        class="form__input"
        :class="{ 'form__input--no-empty': output[name].length !== 0 }"
      />
      <span class="form__label">{{ label }}</span>
      <div class="form__help-icon" v-if="tip">
        <div class="form__tooltip">{{ tip }}</div>
      </div>
    </label>
  </form>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class CompanyDetailsForm extends Vue {
  output = {}

  structure = [
    { name: 'inn', label: 'ИНН', tip: 'Это про налоги' },
    { name: 'bik', label: 'БИК', tip: 'Не в курсах' },
    { name: 'fullName', label: 'Полное наименование организации' },
    { name: 'shortName', label: 'Сокращенное наименование организации' },
    { name: 'legalAddress', label: 'Юридический адрес' },
    { name: 'actualAddress', label: 'Фактический адрес' },
    { name: 'mailingAddress', label: 'Почтовый адрес' },
    { name: 'okpo', label: 'ОКПО', tip: 'Какая-то дичь' },
    { name: 'ogrnip', label: 'ОГРНИП', tip: 'Просто забей' },
    { name: 'oktmo', label: 'ОКТМО', tip: 'Рандом' },
    { name: 'okato', label: 'ОКАТО' },
  ]

  created() {
    for (const { name } of this.structure) {
      Vue.set(this.output, name, '')
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
