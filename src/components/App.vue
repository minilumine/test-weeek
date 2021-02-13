<template>
  <div class="App">
    <div class="App__sidebar">
      <div>
        <div class="App__logo"></div>
        <button class="App__addNewCard">Новая карточка</button>
      </div>
      <div>
        <input type="text" class="App__cardSearch" placeholder="Поиск" />
      </div>
      <ul class="App__list-of-cards">
        <li class="App__link-to-card">ОАО "Ромашка"</li>
        <li class="App__link-to-card">ООО "Белый лебедь"</li>
        <li class="App__link-to-card">ООАОААО "Кокетка"</li>
      </ul>
      <div class="App__user-miniprofile user-miniprofile">
        <img :src="avatar" alt="" class="user-miniprofile__avatar">
        <span class="user-miniprofile__nickname">Джордж Б.</span>
      </div>
    </div>
    <Card />
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import Card from './Card'

import avatar from '/../public/images/avatar.png'

@Component({
  components: {
    Card,
  },
})
export default class App extends Vue {
  avatar = avatar
}
</script>

<style lang="scss">
.App {
  display: grid;
  grid-template-columns: 360px 1fr;
  justify-items: stretch;
  font-size: 0.8rem;
  font-family: 'Golos', sans-serif;

  &__sidebar {
    display: flex;
    flex-direction: column;
    max-width: 360px;
    width: 100%;
    height: 100vh;
    border-right: 2px solid var(--grey-color-line);
    background: var(--grey-color-body);

    & > * {
      padding: 20px;
      border-bottom: 2px solid var(--grey-color-line);
    }
  }

  &__logo {
    height: 30px;
    margin-bottom: 15px;
    background: url('/assets/icons/logo.svg') no-repeat;
  }

  &__addNewCard {
    padding: 15px 0;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: var(--yellow-color);
    font: inherit;
    cursor: pointer;
  }

  &__cardSearch {
    width: 100%;
    padding: 15px 20px;
    outline: none;
    border: none;
    border-radius: 100px;
    background-color: var(--grey-color-elem);
    font: inherit;
  }

  &__list-of-cards {
    height: stretch;
    margin: 0;
    padding: 20px 0;
  }

  &__link-to-card {
    position: relative;
    padding: 5px 20px;
    list-style: none;
    // list-style: url('/assets/icons/file.svg');
    cursor: pointer;

    &::before {
      content: url('/assets/icons/file.svg');
      position: relative;
      top: 3px;
      margin-right: 5px;
    }

    &::after {
      content: url('/assets/icons/dots.svg');
      position: absolute;
      top: 5px;
      right: 20px;
      visibility: hidden;
    }

    &:hover {
      background-color: var(--grey-color-elem);

      &::after {
        visibility: visible;
      }
    }
  }

  &__user-miniprofile {
    padding: 10px 20px;

    img {
      margin-right: 5px;
    }
  }
}
</style>
