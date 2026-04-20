import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';


export default defineConfig({
  plugins: [angular()],
  test: {
    bail:1,
    globals: true,
    setupFiles: ['./setup-vitest.ts'],
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      thresholds: {
        statements: 80,
        branches: 70,
        functions: 80,
        lines: 80
      }
    },
  }
});