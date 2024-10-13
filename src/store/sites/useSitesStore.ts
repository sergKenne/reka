import type ISite from '@/types/Sites';
import { defineStore } from 'pinia';
import data from '../../subcribe.json';
import Storage from '@/utils/storage';
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';
import card4 from '../../assets/images/card4.png';
import card5 from '../../assets/images/card5.png';
import card6 from '../../assets/images/card6.png';
import card7 from '../../assets/images/card7.png';
const images = [card1, card2, card3, card4, card5, card6, card7];

export type RootState = {
  sites: ISite[];
};

export const useSitesStore = defineStore({
  id: 'sites',
  state: () =>
  ({
    sites: Storage.getItem('sites') || data.map((item, ind) => ({...item, id: ind+1, img: images[ind]}))
  } as RootState),

  actions: {
    toggleSubscribe(id: number, status: boolean) {
      this.sites = this.sites.map((site) =>
        site.id === id ? ({ ...site, subscribed: status }) : site,
      );
    },
    unsubscribeAll() {
      this.sites = this.sites?.map(site => ({ ...site, subscribed: false }))
    }
  },

  getters: {
    progessBar: (state) => {
      const subscribed = [...state.sites].filter(site => site.subscribed)
      return Math.round((100*subscribed.length / state.sites.length ))
    },
  },
});