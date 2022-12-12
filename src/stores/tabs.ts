import { defineStore } from 'pinia';

interface State {
  tabs: string[];
  active: string | any;
}

export const useTabs = defineStore('tabs', {
  state: (): State => ({
    tabs: [] ? JSON.parse(localStorage.getItem('tab')) : [],
    active: '' ? '' : localStorage.getItem('active'),
  }),
  getters: {
    tabsss: (state) => state.tabs,
  },
  actions: {
    addTab(payload: string) {
      if (this.tabs == null) this.tabs = [];

      const repeat = this.tabs.find((item) => item === payload);
      if (repeat || payload == null) {
        return;
      } else {
        this.tabs.push(payload);
        localStorage.setItem('tab', JSON.stringify(this.tabs));
      }
    },
    removeTab(num: number, tab: string) {
      const arr: string[] = this.tabs.filter((item: string, index: number) => {
        if (index !== num) return item;
      });
      this.tabs = arr;
      localStorage.setItem('tab', JSON.stringify(arr));
    },
  },
});
