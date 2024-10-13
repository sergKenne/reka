<template>
  <div class="checkbox">
    <label class="checkbox__label" :for="props.id" :class="{check : props.subscribed}">
      <input type="checkbox" 
        class="checkbox__input"  
        :id="props.id" 
        :checked="props.subscribed" 
        @input="handleChange">
      <svg class="checkbox__icon">
        <use :xlink:href="`#${check}`" />
      </svg>
      <span class="checkbox__text">{{props.subscribed ? 'Subscribed' : 'Subscribe'}}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
  import check from '../assets/icons/check.svg';
  import {ref, defineProps, onMounted, watch} from 'vue';
  import { useSitesStore } from '../store/sites/useSitesStore';
  import Storage from '../utils/storage'

  const props = defineProps<{subscribed: boolean, id: number}>()
  const store = useSitesStore();
  const {toggleSubscribe} = useSitesStore()

  const handleChange = (e: Event) => {
    toggleSubscribe(props.id, (e.target as HTMLInputElement).checked)
  }

  watch(()=> store.sites ,(sites) => {
    Storage.setItem("sites", sites)
  }, { deep: true })

</script>

<style  lang="scss" scoped>
  @import '../assets/scss/vars.scss';
  .checkbox {
    &__label {
      display: inline-flex;
      align-items: center;
      height: 32px;
      background-color: $main;
      border-radius: 16px;
      padding-left: 12px;
      padding-right: 12px;
      cursor: pointer;
      overflow: hidden;
      &:hover {
        background-color: #0b5ed7;
      }
      &.check {
        background-color: #ECF4FF;
        padding-left: 0;
        height: 32px;
        .checkbox__text {
          color: $main;
        }
        &:hover {
          background-color: #e9edf5;
        }
      }
    }
    &__input {
      display: none;
      &:checked ~ .checkbox__icon {
        display: inline;
      }
    }
    &__icon {
      display: none;
      width: 28px;
      height: 28px;
      margin-right: 8px;
    }
    &__text {
      font-size: 16px;
      color: $white;
      font-weight: 400;
      text-transform: capitalize;
    }
  }
</style>