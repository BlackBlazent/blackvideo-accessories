import { AccessoriesRegistry } from "../registry/accessories.registry";

export async function loadAccessories() {

  const modules = import.meta.glob(
    "../../packages/*/index.ts"
  );

  for (const path in modules) {

    const mod: any = await modules[path]();

    if (mod.default) {
      AccessoriesRegistry.register(mod.default);
    }
  }
}
