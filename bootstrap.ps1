pnpm init -y
pnpm add react react-dom
pnpm add -D typescript tsup rimraf
npx tsc --init

New-Item pnpm-workspace.yaml -ItemType File -Force

mkdir packages,core,cli,scripts,templates,docs
mkdir core\api,core\loader,core\registry,core\types

New-Item cli\blackvideo-accessory.ts -ItemType File
New-Item tsup.config.ts -ItemType File
