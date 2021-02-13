<template>
  <div class="Card">
    <div class="Card__dashboard">
      <div class="Card__container Card__dashboard-inner">
        <div class="Card__back-icon"></div>
        <div
          class="Card__switch-mode switch"
          :class="['switch--position--' + switchPosition]"
        >
          <span
            class="switch__option"
            :class="{ 'switch__option--active': activeMode === 'edit' }"
            @click="activeMode = 'edit'"
          >
            Редактирование
          </span>
          <span
            class="switch__option"
            :class="{ 'switch__option--active': activeMode === 'view' }"
            @click="activeMode = 'view'"
          >
            Просмотр
          </span>
        </div>
        <div class="Card__more-icon"></div>
      </div>
    </div>
    <CardEdit class="Card__container" />
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import CardEdit from './CardEdit'

@Component({
  components: {
    CardEdit,
  },
})
export default class Card extends Vue {
  activeMode = 'edit' // or view

  get switchPosition() {
    return this.activeMode === 'edit' ? 'left' : 'right'
  }
}
</script>

<style lang="scss" scoped>
.Card {
  &__container {
    max-width: 750px;
    margin: 0 auto;
  }

  &__dashboard {
    border-bottom: 2px solid var(--grey-color-body);
  }

  &__dashboard-inner {
    display: flex;
    justify-content: space-between;
  }

  &__switch-mode {
  }

  &__back-icon {
    content: url('/assets/icons/arrow-left.svg');
  }

  &__more-icon {
    content: url('/assets/icons/dots.svg');
  }
}

.switch {
  position: relative;
  display: flex;
  align-items: center;
  width: 360px;
  height: 40px;
  margin: 5px auto;
  padding: 5px;
  background-color: var(--grey-color-body);
  border-radius: 10px;
  transition: 0.1s;

  &::before {
    content: '';
    position: absolute;
    display: inline;
    z-index: 1;
    top: 4px;
    width: 50%;
    height: 30px;
    border-radius: 7px;
    background-color: white;
    box-shadow: 0 2px 3px #e8e8e8;
    transition: inherit;
  }

  &--position--left::before {
    left: 5px;
  }

  &--position--right::before {
    left: calc(50% - 5px);
  }

  &__option {
    z-index: 2;
    flex-basis: 50%;
    color: var(--grey-color-text);
    text-align: center;
    transition: inherit;

    &--active {
      color: black;
    }
  }
}
</style>
