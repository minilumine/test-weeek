<template>
  <div class="Card">
    <div class="Card__dashboard">
      <div class="Card__container Card__dashboard-inner">
        <div class="Card__back-icon"></div>
        <div class="Card__switch-mode switch">
          <span class="switch__option switch__option--active">Редактирование</span>
          <span class="switch__option">Просмотр</span>
          <div class="switch__handle"></div>
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
export default class Home extends Vue {}
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
  justify-content: space-around;
  width: 360px;
  height: 40px;
  margin: 5px auto;
  background-color: var(--grey-color-body);
  border-radius: 10px;

  &__option {
    z-index: 2;
    color: var(--grey-color-text);

    &--active {
      color: black;
    }
  }

  &__handle {
    z-index: 1;
    position: absolute;
    top: 4px;
    left: 6px;
    width: 50%;
    height: 30px;
    border-radius: 7px;
    background-color: white;
    box-shadow: 0 2px 3px #e8e8e8;
  }
}
</style>
