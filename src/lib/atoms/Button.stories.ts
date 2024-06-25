import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: [
        "primary",
        "secondary",
        "destructive",
        "foreground",
        "background",
      ],
      control: { type: "radio" },
    },
    size:{
      options: [
        "md",
        "sm"
      ],
      control: {type: "radio"}
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: "Click here",
    onPress: () => console.log("clicked!!"),
  },
};

export const Flat: Story = {
  args: {
    color: "primary",
    variant: "flat",
    children: "Click here",
    onPress: () => console.log("clicked!!"),
  },
};

export const Disabled: Story = {
  args: {
    color: "primary",
    variant: "flat",
    children: "Click here",
    onPress: () => console.log("clicked!!"),
    isDisabled: true
  },
};