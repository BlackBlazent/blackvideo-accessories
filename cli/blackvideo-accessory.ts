#!/usr/bin/env node

import fs from "fs";
import path from "path";

const name = process.argv[2];

if (!name) {
  console.log("Usage: bv-accessory <name>");
  process.exit(1);
}

const base = `packages/${name}`;

fs.mkdirSync(base, { recursive: true });

fs.writeFileSync(`${base}/index.ts`, template(name));
fs.writeFileSync(`${base}/package.json`, pkg(name));

console.log(`Accessory created: ${name}`);

function template(name: string) {

  return `
import { BlackVideoAccessory } from "../../core/types/accessories.types";

const ${camel(name)}: BlackVideoAccessory = {

  id: "${name}",
  name: "${name}",
  description: "BlackVideo accessory",

  version: "0.1.0",

  activate(api) {
    console.log("${name} activated");
  },

  deactivate() {
    console.log("${name} deactivated");
  }
};

export default ${camel(name)};
`;
}

function pkg(name: string) {

  return `
{
  "name": "@blackvideo/${name}",
  "version": "0.1.0",
  "private": true
}
`;
}

function camel(str: string) {
  return str.replace(/-./g, x => x[1].toUpperCase());
}
