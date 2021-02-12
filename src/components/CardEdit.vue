<template>
  <div class="CardEdit">
    <div class="CardEdit__menu">
      <ul class="CardEdit__menu-list">
        <li class="CardEdit__menu-item CardEdit__menu-item--active">Реквизиты</li>
        <li class="CardEdit__menu-item">Банковские реквизиты</li>
        <li class="CardEdit__menu-item">Контактная информация</li>
        <li class="CardEdit__menu-item">Оформление</li>
      </ul>
      <div class="CardEdit__save-icon"></div>
    </div>
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
  padding-top: 15px;

  &__menu {
    display: flex;
    border-bottom: 2px solid var(--grey-color-body);
  }

  &__menu-list {
    display: flex;
    justify-content: space-between;
    width: stretch;
    margin: 0;
    padding: 0;
  }

  &__menu-item {
    padding: 10px 0;
    color: var(--grey-color-text);
    list-style: none;

    &--active {
      color: black;
      border-bottom: 3px solid var(--yellow-color);
      box-shadow: 0 2px 0 0 var(--yellow-color);
    }
  }

  &__save-icon {
    content: url('/assets/icons/check.svg');
    margin-left: 50px;
    cursor: pointer;
  }
}
</style>
