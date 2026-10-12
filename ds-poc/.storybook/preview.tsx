import type { Preview } from '@storybook/react-vite'
import '../src/tokens.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        style={{
          background: 'var(--color-surface)',
          color: 'var(--color-text)',
          padding: 'var(--space-4)',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;