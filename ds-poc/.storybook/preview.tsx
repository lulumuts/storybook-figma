import type { Preview } from '@storybook/react-vite'
import '../src/tokens.css'

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const brand = context.args.brand
      return (
        <div
          data-brand={typeof brand === 'string' ? brand : undefined}
          style={{
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
            padding: 'var(--space-4)',
          }}
        >
          <Story />
        </div>
      )
    },
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