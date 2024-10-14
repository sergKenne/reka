<template>
  <div class="sidebar">
    <a href="/" class="sidebar__logo">
      <svg class="sidebar__logo-svg">
        <use :xlink:href="`#${logo}`" />
      </svg>
    </a>
    <h1 class="sidebar__question">How much fun<br/> do you want in your life?</h1>
    <a href="mailto:harry.simon@yahoo.com" class="sidebar__email">harry.simon@yahoo.com</a>
    <div class="sidebar__progress-bar">
      <ProgressBar/>
    </div>
    <p class="sidebar__description"><span>Subscribe</span>to all our fun sites to upgrade your fun progress</p>
    <footer class="sidebar__footer">
      <p class="sidebar__footer-address">EntertainMeMore<br/>11807 Westheimer 550 PMB617<br/>Houston, TX 77077</p>
      <a href="mailto:contact@entertainmemore.com" class="sidebar__footer-email">contact@entertainmemore.com</a>
      <p class="sidebar__footer-policy">Privace Policy</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import ProgressBar from './ProgressBar.vue';
  import logo from '@/assets/images/logo.svg'

</script>

<style lang="scss" scoped>
  .sidebar {
    &__logo {
      display: block;
      margin-bottom: 64px;
    }
    &__logo-svg {
      display: block;
      width: 100%;
    }
    &__question {
        font-size: 16px;
        line-height: 24px;
        color: $black;
        margin-bottom: 64px;
        @media (max-width: 750px) {
          margin-bottom: 30px;
        }
    }
    &__email {
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        color: $black;
        margin-bottom: 16px;
        text-decoration: none;
    }
    &__progress-bar {
      margin-bottom: 16px;
    }
    &__description {
        font-size: 14px;
        line-height: 20px;
        color: $darker-grey;
        margin-bottom: 346px;
        @media (max-width: 750px) {
          margin-bottom: 80px;
        }
        span {
          color: $main;
          text-transform: capitalize;
          padding-right: 4px;
        }
    }
    &__footer-address {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        margin-bottom: 24px;
    }
    &__footer-email {
        display: inline-block;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color:$darker-grey;
        text-decoration: none;
        border-bottom: 1px solid $darker-grey;
        margin-bottom: 24px;
    }
    &__footer-policy {
        display: inline-block;
        font-size: 12px;
        line-height: 18px;
        border-bottom: 1px solid $darker-grey;
        color: $darker-grey;
    }
  }
</style>