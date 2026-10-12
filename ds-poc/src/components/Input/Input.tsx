import { useId } from 'react'
import type { ChangeEvent } from 'react'
import './Input.css'

export interface InputProps {
  /** Visible label associated with the field. */
  label: string
  /** Placeholder shown when the field is empty. */
  placeholder?: string
  /** Current field value. */
  value?: string
  /** Called when the user edits the field. */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /** Error message. When set, the field shows the error state. */
  error?: string
  /** When true, the field cannot be edited. */
  disabled?: boolean
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
}: InputProps) {
  const id = useId()
  const errorId = `${id}-error`
  const invalid = Boolean(error)

  return (
    <div className={invalid ? 'ds-input ds-input--error' : 'ds-input'}>
      <label className="ds-input__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="ds-input__control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? errorId : undefined}
      />
      {invalid ? (
        <p className="ds-input__error" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  )
}
