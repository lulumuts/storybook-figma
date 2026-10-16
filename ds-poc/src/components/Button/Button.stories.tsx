import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_PLACEHOLDER_BUTTON',
    },
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_PLACEHOLDER_BUTTON',
    },
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_PLACEHOLDER_BUTTON',
    },
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_PLACEHOLDER_BUTTON',
    },
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_PLACEHOLDER_BUTTON',
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_PLACEHOLDER_BUTTON',
    },
  },
}
