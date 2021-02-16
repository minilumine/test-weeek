<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

import CardView from '@/components/CardView.vue'
import CardEdit from '@/components/CardEdit.vue'

@Component({
  components: {
    CardView,
    CardEdit,
  },
})
export default class Card extends Vue {
  @Prop(String)
  readonly id!: string

  activeMode: string = 'edit'

  lockedSwitch: boolean = false

  onSwitchMode(event: Event, mode: string) {
    if (this.lockedSwitch) event.preventDefault()
    else this.activeMode = mode
  }

  @Watch('activeMode')
  lockSwitch(newValue: string, oldValue: string) {
    if (newValue === 'edit' && oldValue === 'view') this.lockedSwitch = true
  }
}
</script>

<template>
  <div class="Card">
    <div class="Card__dashboard">
      <div class="Card__container Card__dashboard-inner">
        <div class="Card__back-icon"></div>
        <div
          class="Card__switch-mode switch"
          :class="[
            `switch--position--${activeMode === 'edit' ? 'left' : 'right'}`,
            { 'switch--locked': lockedSwitch },
          ]"
        >
          <span
            class="switch__option"
            :class="{ 'switch__option--active': activeMode === 'edit' && !lockedSwitch }"
            @click="onSwitchMode($event, 'edit')"
          >
            Редактирование
          </span>
          <span
            class="switch__option"
            :class="{ 'switch__option--active': activeMode === 'view' && !lockedSwitch }"
            @click="onSwitchMode($event, 'view')"
          >
            Просмотр
          </span>
        </div>
        <div class="Card__more-icon"></div>
      </div>
    </div>
    <!-- <div class="Card__container">
      <CardEdit v-if="activeMode === 'edit'" />
      <CardView v-else />
    </div> -->
    <component
      :is="activeMode === 'edit' ? 'CardEdit' : 'CardView'"
      class="Card__container"
      @back="activeMode = 'edit'"
    />
  </div>
</template>

<style lang="scss">
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
  transition: left 0.1s;

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

  &--locked::before {
    visibility: hidden;
  }

  &--locked &__option {
    cursor: default;
  }

  &__option {
    z-index: 2;
    flex-basis: 50%;
    color: var(--grey-color-text);
    text-align: center;
    transition: inherit;
    cursor: pointer;

    &--active {
      color: black;
    }
  }
}
</style>
