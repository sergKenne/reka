<template>
  <div class="main">
    <div class="main__content-header">
      <h2 class="main__content-title">Ok, let’s change your preferences</h2>
      <button class="main__content-btn" @click="props.openModal" :disabled="!isSubscribe">Unsubscribe from all</button>
    </div>
    <p class="main__content-desc">To unsubscribe, please uncheck the appropriate box(es).</p>
    <div class="main__content-grid">
      <Card v-for="site in sites" :key="site.id" :site="site"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import {computed, defineProps} from 'vue'
  import { useSitesStore } from '@/store/sites/useSitesStore'
  import Card from './Card.vue'

  const props = defineProps<{openModal: ()=>void}>()
  const store = useSitesStore()
  const {sites} = storeToRefs(store)

  const isSubscribe = computed(()=>{
    const subscribed = sites.value.reduce((acc, curr) => curr.subscribed ? [...acc, curr] : acc ,[])
    return (subscribed.length > 0) ? true : false ; 
  }) 

</script>

<style lang="scss" scoped>
  .main {
    &__content-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      @media (max-width: 920px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
      }
    }
    &__content-title {
        font-size: 24px;
        font-weight: 400;
        line-height: 30px;
        color: $black;
    }
    &__content-btn {
        width: 191px;
        height: 36px;
        border-radius: 4px;
        border: 1px solid $grey;
        text-align: center;
        line-height: 36px;
        font-size: 16px;
        font-weight: 500;
        color: $main;
        cursor: pointer;
        transition: all .2s linear;
        &:disabled {
          cursor: not-allowed;
          color: $grey;
          &:hover {
            background-color: transparent;
            color: $grey;
            border-color: $grey;
          }
        }
        &:hover {
          color: $white;
          background-color: $main;
          border-color: $main;
        }
    }
    &__content-desc {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 24px;
        color: $darker-grey;
    }
    &__content-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      @media (max-width: 1225px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 950px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 420px) {
        grid-template-columns: 1fr;
      }
    }
  }
</style>