<template>
  <div class="modal">
    <div class="modal__dialog">
      <svg class="modal__icon" @click="props.closeModal">
        <use :xlink:href="`#${close}`" />
      </svg>
      <div class="modal__body">
        <h4 class="modal__title">Are you sure?</h4>
        <p class="modal__description">Please confirm that you want to unsubscribe from all and lose {{store.progessBar}}% fun.</p>
        <div class="modal__wrap-btn">
          <button class="modal__btn" @click="unsubscribeAll">Affirmative</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {defineProps, onMounted} from 'vue'
  import close from '../assets/icons/close.svg'
  import { useSitesStore } from '../store/sites/useSitesStore'

  const props = defineProps<{closeModal: ()=>void, }>()
  const store = useSitesStore()
  const unsubscribeAll = () => {
    store.unsubscribeAll()
    props.closeModal()
  }

  onMounted(() => {
    const modal = document.querySelector('.modal');
    modal.addEventListener('click', function (e:any) {
      if (e.target.className == 'modal') {
        props.closeModal()
      }
    })
  })

</script>

<style lang='scss' scoped>
  @import '../assets/scss/vars.scss';
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100vh;
    background: #0C1C604D;
    display: flex;
    align-items: center;
    justify-content: center;
    &__dialog {
      position: relative;
      background-color: $white;
      width: 512px;
      min-height: 200px;
      border-radius: 8px;
      padding: 20px 24px;
      margin-left: 6px;
      margin-right: 6px;
    }
     &__icon {
      width: 36px;
      height: 36px;
      cursor: pointer;
      position: absolute;
      top: 16px;
      right: 16px;
    }
    &__title {
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      color: $dark-main ;
      margin-bottom: 20px;
    }
    &__description {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: $darker-grey;
      margin-bottom: 24px;
    }
    &__wrap-btn {
      display: flex;
      justify-content: flex-end;
    }
    &__btn {
      border: none;
      font-size: 16px;
      font-weight: 500;
      line-height: 36px;
      width: 118px;
      height: 36px;
      padding: 0px 16px 0px 16px;
      border-radius: 4px;
      background-color: $main;
      color: $white;
      text-transform: capitalize;
      transition: background-color .2s linear;
      cursor: pointer;
      &:hover {
        background-color: #0b5ed7;
      }
    }
  }

</style>