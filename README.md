# Storybook and Figma

This proof of concept keeps a small set of React components aligned with Figma in three places: the frame embedded next to each story, the component property names, and the design tokens. The app lives in [`ds-poc`](ds-poc).

## The embedded frame

[`@storybook/addon-designs`](https://github.com/storybookjs/addon-designs) is registered in [`ds-poc/.storybook/main.ts`](ds-poc/.storybook/main.ts). Every story sets a `design` parameter:

```ts
parameters: {
  design: {
    type: 'figma',
    url: 'FIGMA_URL_PLACEHOLDER_BUTTON',
  },
}
```

Storybook reads that parameter and adds a **Design** tab beside Controls. The tab embeds the Figma frame for the component you are looking at, so the coded story and the design sit on the same screen.

The URLs are placeholders. Replace each one with the frame URL from Figma (the link that includes the file and the `node-id`):

| Component | Placeholder | File |
| --- | --- | --- |
| Button | `FIGMA_URL_PLACEHOLDER_BUTTON` | [`ds-poc/src/components/Button/Button.stories.tsx`](ds-poc/src/components/Button/Button.stories.tsx) |
| Input | `FIGMA_URL_PLACEHOLDER_INPUT` | [`ds-poc/src/components/Input/Input.stories.tsx`](ds-poc/src/components/Input/Input.stories.tsx) |
| Card | `FIGMA_URL_PLACEHOLDER_CARD` | [`ds-poc/src/components/Card/Card.stories.tsx`](ds-poc/src/components/Card/Card.stories.tsx) |

Until those strings are real Figma URLs, the Design tab stays on "Loading…".

## The same property names

React prop names are the Figma component-set property names. A Button in code and a Button component set in Figma both use `variant` (`primary` | `secondary`), `size` (`sm` | `md`), and `disabled`. Input and Card follow the same rule for `label`, `error`, `title`, `footer`, and the rest.

`onClick` and `onChange` stay in code only. They are not Figma properties.

The full table of property name, Figma type, and allowed values is in [`ds-poc/docs/figma-mapping.md`](ds-poc/docs/figma-mapping.md). Storybook autodocs builds its props table from the JSDoc on those same props.

## The same token names

[`ds-poc/src/tokens.css`](ds-poc/src/tokens.css) is the shared list of colors, spacing, radius, and type. Each CSS variable maps to a Figma variable of the same name without the leading `--`:

| CSS | Figma variable |
| --- | --- |
| `--color-primary` | `color-primary` |
| `--space-1` | `space-1` |
| `--radius-sm` | `radius-sm` |

`--color-primary` is `#2f6f4e`. Component CSS uses these variables only, so a value changed in the token file is the value the components render. Storybook loads the file from [`.storybook/preview.tsx`](ds-poc/.storybook/preview.tsx), and the Vite app loads it from [`src/main.tsx`](ds-poc/src/main.tsx). The complete list, including values, is in the mapping doc.

There is no sync pipeline yet. Updating a token means editing `tokens.css` and the matching Figma variable by hand.

## Run Storybook

```bash
cd ds-poc
npm install
npm run storybook
```

Storybook opens at http://localhost:6006/. Button, Input, and Card are under Components. Open a story, then the Design tab, after the placeholder URL has been replaced.
