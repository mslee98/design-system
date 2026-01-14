import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest", // 스토리북이 아닌 외부 테스트 도구
    "@storybook/addon-a11y", // Accessibility(접근성) 을 위한 도구
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite"
};
export default config;