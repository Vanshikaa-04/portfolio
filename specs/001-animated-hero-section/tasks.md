# Tasks: Animated Hero Section

**Input**: Design documents from `specs/001-animated-hero-section/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup

**Purpose**: Ensure the environment is ready for component development.

- [ ] T001 [P] Verify that GSAP (`gsap`) and its React wrapper (`@gsap/react`) are installed by checking `package.json`.
- [X] T002 [P] Verify that Storybook is configured for the project by checking for a `.storybook` directory.
- [ ] T003 Create the main component file `src/components/organisms/Hero/Hero.tsx` with a placeholder div.
- [ ] T004 Create the Storybook file `src/components/organisms/Hero/Hero.stories.tsx` for the Hero component.

---

## Phase 2: User Story 1 - Engaging Introduction (Priority: P1) 🎯 MVP

**Goal**: Create a visually engaging hero section to make a strong first impression on visitors.

**Independent Test**: The Hero component can be developed and tested in isolation using its Storybook story (`Hero.stories.tsx`).

### Implementation for User Story 1

- [ ] T005 [US1] Implement the basic layout of the Hero organism in `src/components/organisms/Hero/Hero.tsx` using TailwindCSS, ensuring it fills the full viewport height (100vh).
- [ ] T006 [P] [US1] Create a `Typography` atom component in `src/components/atoms/Typography/Typography.tsx` to handle consistent text styling for headings and paragraphs.
- [ ] T007 [P] [US1] Create a `CTAButton` molecule in `src/components/molecules/CTAButton/CTAButton.tsx` that renders the "View Projects" and "Download Resume" buttons with their distinct styles.
- [ ] T008 [P] [US1] Create a `SocialLinks` molecule in `src/components/molecules/SocialLinks/SocialLinks.tsx` to display the row of social media icons.
- [ ] T009 [US1] Integrate the `Typography`, `CTAButton`, and `SocialLinks` components into the `Hero` organism in `src/components/organisms/Hero/Hero.tsx`.
- [ ] T010 [P] [US1] Create a custom hook `useTypingEffect` in `src/hooks/useTypingEffect.ts` to encapsulate the GSAP logic for the typing animation.
- [ ] T011 [US1] Integrate the `useTypingEffect` hook into the `Hero` organism in `src/components/organisms/Hero/Hero.tsx` to animate the main heading roles.
- [ ] T012 [US1] Implement the responsive design for the `Hero` component using TailwindCSS utility classes in `src/components/organisms/Hero/Hero.tsx`, ensuring it adapts correctly to mobile, tablet, and desktop breakpoints.
- [ ] T013 [P] [US1] Add the animated scroll indicator icon to the bottom of the `Hero` component in `src/components/organisms/Hero/Hero.tsx`.
- [ ] T014 [US1] Update the Storybook story in `src/components/organisms/Hero/Hero.stories.tsx` to reflect the final component implementation and its different states.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently in Storybook.

---

## Phase 3: Polish & Cross-Cutting Concerns

**Purpose**: Final review and quality checks.

- [ ] T015 [US1] Review the `Hero` component and its sub-components for accessibility (ARIA roles, keyboard navigation, color contrast).
- [ ] T016 [US1] Perform a final performance check of the `Hero` component against the Lighthouse (>90) and 60fps metrics defined in the spec.

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)**: Must be completed before User Story 1 implementation.
- **User Story 1 (Phase 2)**: Depends on Setup completion.
- **Polish (Phase 3)**: Depends on User Story 1 completion.

### Within User Story 1
- **Parallelizable Atoms/Molecules**: `Typography` (T006), `CTAButton` (T007), and `SocialLinks` (T008) can be developed in parallel. The `useTypingEffect` hook (T010) can also be developed in parallel.
- **Integration**: `Hero` layout (T005) should be established first. Integration of child components (T009) and the hook (T011) happens after the components themselves are built.
- **Responsiveness & Polish**: These tasks (T012, T013) can be worked on after the initial integration.

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1: Setup.
2. Complete Phase 2: User Story 1.
3. **STOP and VALIDATE**: Test the Hero component independently using its Storybook story.
4. Complete Phase 3: Polish.
5. The component is now ready for integration into the main application page.
