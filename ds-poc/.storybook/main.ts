import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-designs"
  ],
  "framework": "@storybook/react-vite",
  async viteFinal(viteConfig) {
    if (process.env.GITHUB_ACTIONS) {
      viteConfig.base = "/storybook-figma/";
    }
    return viteConfig;
  },
};

export default config;
