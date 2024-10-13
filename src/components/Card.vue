<template>
  <div class="card">
    <img :src="props.site.img" alt="picture" class="card__img">
    <div class="card__body">
      <p class="card__description">{{props.site.site}}</p>
      <CheckboxBtn 
        class="card__btn" 
        :subscribed="props.site.subscribed" 
        :id="props.site.id" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import CheckboxBtn from '../components/CheckboxBtn.vue'
  import ISite from '../types/Sites'

  const props = defineProps<{site: ISite}>()

</script>

<style lang="scss" scoped>
  @import '../assets/scss/vars.scss';
  .card {
    padding: 24px;
    background: $white;
    &__img {
      display: block;
      width: 100%;
      margin-bottom: 16px;
    }
    &__description {
        height: 48px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: $black;
        margin-bottom: 16px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2; 
        -webkit-box-orient: vertical;
    }
  }
</style>