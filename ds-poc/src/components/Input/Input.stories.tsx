import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'
import type { InputProps } from './Input'

function InputPreview(args: InputProps) {
  const [value, setValue] = useState(args.value ?? '')

  useEffect(() => {
    setValue(args.value ?? '')
  }, [args.value])

  return (
    <Input
      {...args}
      value={value}
      onChange={(event) => {
        setValue(event.target.value)
        args.onChange?.(event)
      }}
    />
  )
}

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    disabled: false,
  },
  render: (args) => <InputPreview {...args} />,
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_PLACEHOLDER_INPUT',
    },
  },
}

export const Disabled: Story = {
  args: {
    value: 'ada@example.com',
    disabled: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_PLACEHOLDER_INPUT',
    },
  },
}

export const Error: Story = {
  args: {
    value: 'ada@',
    error: 'Enter a valid email address.',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_PLACEHOLDER_INPUT',
    },
  },
}
