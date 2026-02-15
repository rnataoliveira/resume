import { defineConfig } from 'vite';

// Production base must match the GitHub Pages repo path when served under
// https://<user>.github.io/<repo>/ — this ensures asset URLs point to /resume/...
export default defineConfig({
  base: '/resume/',
});
