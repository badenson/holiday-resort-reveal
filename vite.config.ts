
import { defineConfig } from 'vite';

export default defineConfig({
  // Matches your GitHub repository name: https://badenson.github.io/holiday-resort-reveal/
  base: 'holiday-resort-reveal',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
