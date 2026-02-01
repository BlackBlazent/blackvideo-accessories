import { BlackVideoAccessory } from "../types/accessories.types";

class AccessoryRegistry {

  private accessories = new Map<string, BlackVideoAccessory>();

  register(accessory: BlackVideoAccessory) {
    this.accessories.set(accessory.id, accessory);
  }

  unregister(id: string) {
    this.accessories.delete(id);
  }

  getAll() {
    return [...this.accessories.values()];
  }

  get(id: string) {
    return this.accessories.get(id);
  }
}

export const AccessoriesRegistry = new AccessoryRegistry();
