import type { ReactNode } from 'react'
import './Button.css'

export interface ButtonProps {
  /** Visual style. `primary` is the main action; `secondary` is the alternate action. */
  variant?: 'primary' | 'secondary'
  /** Control size. */
  size?: 'sm' | 'md'
  /** When true, the button cannot be clicked. */
  disabled?: boolean
  /** Button label. */
  children: ReactNode
  /** Called when the button is clicked. */
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`ds-button ds-button--${variant} ds-button--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
