<template>
  <div class="wrapper">
    <div class="container">
      <div class="site">
        <div class="site__sidebar">
          <Sidebar />
        </div>
        <div class="site__content">
          <MainContent :openModal="openModal" />
        </div>
      </div>
    </div>
    <Teleport to="#modal">
      <Modal v-if="isModal" :closeModal="closeModal"/>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  import {computed, onMounted, ref, watch} from 'vue';
  import Sidebar from './components/Sidebar.vue';
  import MainContent from './components/MainContent.vue';
  import Modal from './components/Modal.vue';
  import { useSitesStore } from './store/sites/useSitesStore';

  const store = useSitesStore()
  const isModal = ref<boolean>(false)

  const closeModal = () => {
    isModal.value = false
  }
  const openModal = () => {
    isModal.value = true
  }

  onMounted(()=>{
    store.fetchData()
  })

  watch(()=> store.sites ,(newSubscribe, oldSubscribe) => {
    console.log("New Subscribes:", JSON.parse(JSON.stringify(newSubscribe)))
    console.log("Old Subscribes:", JSON.parse(JSON.stringify(oldSubscribe)))
  }, { deep: true })

</script>

<style lang="scss" scoped>
  .wrapper {
    padding-bottom: 80px;
  }
  .site {
    display: grid;
    grid-template-columns: 320px 1fr;
    column-gap: 120px;
    margin-bottom: 80px;
      @media (max-width: 1225px) {
        column-gap: 60px;
      }
      @media (max-width: 1024px) {
        grid-template-columns: 280px 1fr;
        column-gap: 40px;
      }
      @media (max-width: 750px) {
        grid-template-columns: 1fr;
      }
    &__sidebar {
      padding: 128px 48px 48px 48px;
      background-color: $white;
      @media (max-width: 1024px) {
        padding: 128px 28px 28px 28px;
      }
      @media (max-width: 750px) {
        padding: 60px 18px 18px 18px;
      }
    }
    &__content {
      padding-top: 128px;
      @media (max-width: 750px) {
        padding-top: 60px;
      }
    }
  }

</style>