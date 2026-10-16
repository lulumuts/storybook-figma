import type { Preview } from '@storybook/react-vite'
import { brands } from '../src/brand'
import '../src/tokens.css'

const brandTitles: Record<(typeof brands)[number], string> = {
  grove: 'Grove',
  harbor: 'Harbor',
  ember: 'Ember',
  linen: 'Linen',
  moss: 'Moss',
  clay: 'Clay',
}

const preview: Preview = {
  initialGlobals: {
    brand: 'grove',
  },
  globalTypes: {
    brand: {
      description: 'Brand theme',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: brands.map((brand) => ({
          value: brand,
          title: brandTitles[brand],
        })),
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const brand = context.globals.brand
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
  argTypes: {
    brand: {
      control: false,
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
