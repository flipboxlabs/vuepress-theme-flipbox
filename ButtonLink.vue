<template>
  <button @click="goToUrl()" class="button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: ['url'],

    methods: {
      goToUrl() {
        window.location.href = this.url;
      }
    }
  }
</script>

<style lang="stylus">
@import './styles/config.styl'

.button
  border: 1px solid $accentColor
  color: $accentColor
  font-size 16px
  padding 10px 12px
  border-radius 3px
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer
    border-color: lighten($accentColor, 20%)
    color: #FFF
    background-color: $accentColor
  }
</style>