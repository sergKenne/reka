import type ISite from '@/types/Sites';
import { defineStore } from 'pinia';
import data from '../../data'
import Storage from '@/utils/storage';

export type RootState = {
  sites: ISite[];
};

export const useSitesStore = defineStore({
  id: 'sites',
  state: () =>
  ({
    sites: Storage.getItem('sites') || data.sites
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