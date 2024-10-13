import type ISite from "@/types/Sites";

class Storage {
  static setItem(key: string, data: ISite[] | number | string) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  static getItem(key: string) {
    if (!key || typeof window === 'undefined') {
      return '';
    }
    return JSON.parse(localStorage.getItem(key) || '""');
  }
}

export default Storage


