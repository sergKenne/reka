import type ISite from '@/types/Sites';
import { defineStore } from 'pinia';
import Storage from '@/utils/storage';
import card1 from '@/assets/images/card1.png';
import card2 from '@/assets/images/card2.png';
import card3 from '@/assets/images/card3.png';
import card4 from '@/assets/images/card4.png';
import card5 from '@/assets/images/card5.png';
import card6 from '@/assets/images/card6.png';
import card7 from '@/assets/images/card7.png';
import { computed, ref } from 'vue';
const images = [card1, card2, card3, card4, card5, card6, card7];

export type RootState = {
  sites: ISite[];
};

export const useSitesStore = defineStore('sites', () => {
  const sites = ref<ISite[]>([])

  const toggleSubscribe = (id: number, status: boolean) => {
    sites.value = sites.value?.map((site) =>
      site.id === id ? ({ ...site, subscribed: status }) : site
    );
  }

  const unsubscribeAll = () => {
    sites.value = sites.value.map(site => ({ ...site, subscribed: false }))
  }

  const progessBar = computed(() => {
    const subscribed = [...sites.value].filter((site) => site.subscribed);
    return Math.round((100 * subscribed.length) / sites.value.length);
  });

  const fetchData = async() => {
    try {
      const response = await fetch('/subscribe.json');
      const data = await response.json()

      sites.value = Storage.getItem('sites') || data.map((item: ISite, ind: number) => ({ ...item, id: ind + 1, img: images[ind] }));
      console.log(data)
    } catch (error) {
      console.log("error fetch...")
    }
  }

  return {
    sites,
    toggleSubscribe,
    unsubscribeAll,
    progessBar,
    fetchData
  }
});

