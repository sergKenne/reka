<template>
  <div class="progress-bar">
    <p class="progress-bar__label">FUN YOU GET</p>
    <div class="progress-bar__box">
      <div class="progress-bar__static">
        <div class="progress-bar__progress" :style="{width: `${store.progessBar}%`}"></div>
      </div>
      <div class="progress-bar__value">{{ store.progessBar }}%</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useSitesStore } from "../store/sites/useSitesStore";
  const store = useSitesStore()
  
</script>

<style lang="scss" scoped>
  @import '../assets/scss/vars.scss';
  .progress-bar {
    &__label {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: $darker-grey;
    }
    &__box {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__static {
      width: 176px;
      height: 16px;
      border-radius: 8px;
      background-color: $black;
      overflow: hidden;
      position: relative;
    }
    &__progress {
      position: absolute;
      top: 0;
      left: 0;
      height: 16px;
      background-color: $orange;
    }
    &__value {
        font-size: 16px;
        line-height: 16px;
        color: $orange;
    }
  }
</style>