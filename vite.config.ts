import { defineConfig } from 'vite'

// Repository name is used as the base path on GitHub Pages
// (https://sergkredo.github.io/github-guide/).
// Set to '/' for local dev / preview by overriding via the BASE env var if needed.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/github-guide/',
})
