import type { Meta, StoryObj } from '@storybook/react-vite'; // Changed from @storybook/react-vite to @storybook/react
import Hero from './Hero';

const meta = {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};