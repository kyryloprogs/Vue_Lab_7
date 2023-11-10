export default class LocalStorageRepository<T> {
    private storageKey: string;
  
    constructor(storageKey: string) {
      this.storageKey = storageKey;
    }
  
    public create(item: T) {
      const items = this.getAll();
      items.push(item);
      localStorage.setItem(this.storageKey, JSON.stringify(items));
    }
  
    public getAll(): T[] {
      const items = localStorage.getItem(this.storageKey);
      return items ? JSON.parse(items) : [];
    }
  
    public update(item: T, id: number) {
      const items = this.getAll();
      const index = items.findIndex((i: T) => (i as any).id === id);
      if (index !== -1) {
        items[index] = item;
        localStorage.setItem(this.storageKey, JSON.stringify(items));
      }
    }
  
    public delete(id: number) {
      const items = this.getAll();
      const index = items.findIndex((i: T) => (i as any).id === id);
      if (index !== -1) {
        items.splice(index, 1);
        localStorage.setItem(this.storageKey, JSON.stringify(items));
      }
    }
  }