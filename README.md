# shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `nextjs` app:

```bash
pnpm dlx shadcn@latest add button -c apps/nextjs
```

This will place the ui components in the `packages/design-system/src/components` directory.

### NOTE

shadcn cli has a issue with monorepos where utils that are import from the `design-system` package are incorrectly configured. The cli will attempt to import from the local packages `utils` folder and you'll need to manully correct the import to `@repo/design-system/lib/utils` (i.e. `import { cn } from '#src/lib/util'` -> `import { cn } from '@repo/design-system/lib/utils'`)

## Tailwind

Your `tailwind.config.ts` and `shadcn.css` are already set up to use the components from the `design-system` package.

## Using components

To use the components in your app, import them from the `design-system` package.

```tsx
import { Button } from "@repo/design-system/components/button"
```
