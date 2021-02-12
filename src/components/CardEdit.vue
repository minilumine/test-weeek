<template>
  <div class="CardEdit">
    <nav>
      <ul class="CardEdit__menu">
        <li class="CardEdit__menu-item CardEdit__menu-item--active">Реквизиты</li>
        <li class="CardEdit__menu-item">Банковские реквизиты</li>
        <li class="CardEdit__menu-item">Контактная информация</li>
        <li class="CardEdit__menu-item">Оформление</li>
      </ul>
    </nav>
    <CompanyDetailsForm />
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import CompanyDetailsForm from './CompanyDetailsForm'

@Component({
  components: {
    CompanyDetailsForm,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.CardEdit {
  max-width: 720px;
  margin: 0 auto;
  padding-top: 15px;

  &__menu {
    display: flex;
    justify-content: space-between;
    margin: 0;
    border-bottom: 2px solid var(--grey-color-body);
    /* overflow: visible; */
  }

  &__menu-item {
    padding: 10px 0;
    color: var(--grey-color-text);

    &--active {
      color: black;
      border-bottom: 3px solid var(--yellow-color);
      box-shadow: 0 2px 0 0 var(--yellow-color);
    }
  }
}
</style>
