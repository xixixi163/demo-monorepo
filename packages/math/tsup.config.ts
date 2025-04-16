import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  tsconfig: 'tsconfig.json',
  esbuildOptions(options) {
    options.loader = { '.ts': 'ts' };
  },
});