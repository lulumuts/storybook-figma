import type { ReactNode } from 'react'
import type { Brand } from '../../brand'
import './Card.css'

export interface CardProps {
  /** Brand theme. Switches color, radius, and type. Omit to inherit the parent brand. */
  brand?: Brand
  /** Heading shown at the top of the card. */
  title: string
  /** Main card content. */
  children: ReactNode
  /** Optional content rendered below the body, such as actions. */
  footer?: ReactNode
}

export function Card({ brand, title, children, footer }: CardProps) {
  return (
    <section data-brand={brand} className="ds-card">
      <h2 className="ds-card__title">{title}</h2>
      <div className="ds-card__body">{children}</div>
      {footer != null ? <div className="ds-card__footer">{footer}</div> : null}
    </section>
  )
}
