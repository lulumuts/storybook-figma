import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Forest trail notes',
    children: 'A short record of the path, the light, and what still needs doing.',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    footer: (
      <>
        <span>Ready to save</span>
        <Button variant="secondary" size="sm">
          Save
        </Button>
      </>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_PLACEHOLDER_CARD',
    },
  },
}

export const WithoutFooter: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_PLACEHOLDER_CARD',
    },
  },
}
