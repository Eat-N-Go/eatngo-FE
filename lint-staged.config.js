// lint-staged.config.js
module.exports = {
  "*.{js,jsx,ts,tsx,json,md}": ["biome check --write --no-errors-on-unmatched"],
  "*.{test.ts,test.tsx}": (files) => {
    return files.map((file) => `vitest run ${file}`);
  },
};
