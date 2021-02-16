<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  watch: {
    activeMenuItem(item) {
      const menuItemElem = <HTMLElement>document.querySelector(`.CardEdit__link-to-${item}`)
      const menuMarkElem = <HTMLElement>document.querySelector('.CardEdit__menu-mark')

      menuMarkElem.style.cssText = `left: ${menuItemElem.offsetLeft}px; width: ${menuItemElem.offsetWidth}px;`
    },
  },
})
export default class CardEdit extends Vue {
  menuList = {
    companyDetails: 'Реквизиты',
    bankDedails: 'Банковские реквизиты',
    contactInfo: 'Контактная информация',
    registration: 'Оформление',
  }

  activeMenuItem: string = ''

  mounted() {
    setTimeout(() => {
      this.activeMenuItem = 'companyDetails'
    }, 200)
  }
}
</script>

<template>
  <div class="CardEdit">
    <div class="CardEdit__menu">
      <ul class="CardEdit__menu-list">
        <li
          v-for="(value, key) in menuList"
          :key="key"
          class="CardEdit__menu-item"
          :class="[
            `CardEdit__link-to-${key}`,
            { 'CardEdit__menu-item--active': key === activeMenuItem },
          ]"
          @click="activeMenuItem = key"
        >
          {{ value }}
        </li>
      </ul>
      <div class="CardEdit__menu-mark"></div>
      <div class="CardEdit__save-icon"></div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.CardEdit {
  padding-top: 15px;

  &__menu {
    position: relative;
    display: flex;
    border-bottom: 2px solid var(--grey-color-body);
  }

  &__menu-list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  &__menu-item {
    position: relative;
    padding: 10px 0;
    color: var(--grey-color-text);
    list-style: none;
    transition: 0.1s;

    &--active {
      color: black;
    }
  }

  &__menu-mark {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 5px;
    background-color: var(--yellow-color);
    transition: 0.2s;
  }

  &__save-icon {
    content: url('/assets/icons/check.svg');
    margin-left: 50px;
    cursor: pointer;
  }
}
</style>
