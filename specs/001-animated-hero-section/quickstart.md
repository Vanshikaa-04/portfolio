# Quickstart: Hero Component

This guide explains how to use the `Hero` organism in the project.

## 1. Import the Component

The `Hero` component is the primary organism for this feature. Import it into any page or template where it's needed (e.g., `src/pages/HomePage/HomePage.tsx`).

```typescript
import { Hero } from '@/components/organisms/Hero/Hero';
```

## 2. Usage

The component is self-contained and currently requires no props. It fetches all necessary data and manages its own state internally.

```tsx
const HomePage = () => {
  return (
    <div>
      <Hero />
      {/* ... other sections of the page */}
    </div>
  );
};
```

## 3. Component Breakdown

The `Hero` organism is composed of several atoms and molecules:

-   **Organism**: `Hero`
    -   **Molecule**: `CTAButton` (Handles call-to-action buttons)
    -   **Molecule**: `SocialLinks`
    -   **Atom**: `TypingEffect` (Manages the heading animation)
    -   **Atom**: `Typography`
    -   **Atom**: `Icon`

## 4. Storybook

To see all variations and test the component in isolation, run Storybook:

```bash
npm run storybook
```

Navigate to **Organisms > Hero** in the Storybook UI. You can also view and test the individual Atoms and Molecules that make up the Hero section.
