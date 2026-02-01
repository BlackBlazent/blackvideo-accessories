#!/usr/bin/env bash

set -e  # Exit on error

echo "🚀 Initializing BlackVideo Accessories Project..."

# Initialize project
pnpm init -y

# Install dependencies
pnpm add react react-dom
pnpm add -D typescript tsup rimraf

# Initialize TypeScript
npx tsc --init

# Create pnpm workspace file
touch pnpm-workspace.yaml

# Create directory structure
mkdir -p \
  packages \
  core/api \
  core/loader \
  core/registry \
  core/types \
  cli \
  scripts \
  templates \
  docs

# Create main files
touch cli/blackvideo-accessory.ts
touch tsup.config.ts

echo "✅ Bootstrap completed successfully."
