# Figma mapping

Create one Figma variable for each CSS custom property below, using the same name without the leading `--`. Create one component set per component, and name each component property exactly the same as the React prop.

`onClick` and `onChange` are code callbacks. Do not create Figma properties for them.

Primary button labels use `color-surface` for text. This POC has no separate on-primary text token.

## Button

| Prop | Figma property | Type | Values |
| --- | --- | --- | --- |
| `brand` | `brand` | Variant | `grove`, `harbor`, `ember` |
| `variant` | `variant` | Variant | `primary`, `secondary` |
| `size` | `size` | Variant | `sm`, `md` |
| `disabled` | `disabled` | Boolean | `true`, `false` |
| `children` | `children` | Text | Button label |
| `onClick` | — | Code only | Do not create |

## Input

| Prop | Figma property | Type | Values |
| --- | --- | --- | --- |
| `brand` | `brand` | Variant | `grove`, `harbor`, `ember` |
| `label` | `label` | Text | Field label |
| `placeholder` | `placeholder` | Text | Placeholder copy |
| `value` | `value` | Text | Current value |
| `error` | `error` | Text | Empty hides the error state; any other string shows it |
| `disabled` | `disabled` | Boolean | `true`, `false` |
| `onChange` | — | Code only | Do not create |

## Card

| Prop | Figma property | Type | Values |
| --- | --- | --- | --- |
| `brand` | `brand` | Variant | `grove`, `harbor`, `ember` |
| `title` | `title` | Text | Card heading |
| `children` | `children` | Text | Main content |
| `footer` | `footer` | Text | Optional. Leave empty to hide the footer |

## Tokens

| CSS variable | Figma variable | Value |
| --- | --- | --- |
| `--color-primary` | `color-primary` | `#2f6f4e` |
| `--color-secondary` | `color-secondary` | `#e4efe9` |
| `--color-surface` | `color-surface` | `#f6f8f7` |
| `--color-border` | `color-border` | `#c9d6cf` |
| `--color-text` | `color-text` | `#1a2b22` |
| `--color-error` | `color-error` | `#9d3c34` |
| `--space-1` | `space-1` | `4px` |
| `--space-2` | `space-2` | `8px` |
| `--space-3` | `space-3` | `12px` |
| `--space-4` | `space-4` | `16px` |
| `--space-5` | `space-5` | `20px` |
| `--space-6` | `space-6` | `24px` |
| `--radius-sm` | `radius-sm` | `4px` |
| `--radius-md` | `radius-md` | `8px` |
| `--border-width` | `border-width` | `1px` |
| `--font-family` | `font-family` | `system-ui, "Segoe UI", Roboto, sans-serif` |
| `--font-size-sm` | `font-size-sm` | `14px` |
| `--font-size-md` | `font-size-md` | `16px` |
| `--font-size-lg` | `font-size-lg` | `20px` |
| `--font-weight-semibold` | `font-weight-semibold` | `600` |

`color-error`, `border-width`, `font-family`, and `font-weight-semibold` are included so component CSS can express the error state, hairline borders, and type without hardcoded colors or lengths.

The token table above is the Grove mode, which is also the `:root` default. Harbor and Ember are Figma modes on the same variable names. Spacing, border width, font size, and font weight stay the same across brands.

| Token | Harbor | Ember |
| --- | --- | --- |
| `color-primary` | `#1b4f86` | `#8c3b22` |
| `color-secondary` | `#e3eef8` | `#f6e6dc` |
| `color-surface` | `#f3f7fb` | `#fbf6f3` |
| `color-border` | `#c5d5e8` | `#e6d2c6` |
| `color-text` | `#142033` | `#3a2418` |
| `color-error` | `#9d3c48` | `#9d2c2c` |
| `radius-sm` | `2px` | `12px` |
| `radius-md` | `4px` | `20px` |
| `font-family` | `Georgia, "Iowan Old Style", "Palatino Linotype", serif` | `"Avenir Next", "Segoe UI", sans-serif` |

## Design URL placeholders

Replace these strings in each story's `parameters.design.url`:

- `FIGMA_URL_PLACEHOLDER_BUTTON` in `src/components/Button/Button.stories.tsx`
- `FIGMA_URL_PLACEHOLDER_INPUT` in `src/components/Input/Input.stories.tsx`
- `FIGMA_URL_PLACEHOLDER_CARD` in `src/components/Card/Card.stories.tsx`
