import type { Meta, StoryObj } from "@storybook/react";

import { H6 } from "../lib/Text";

const meta = {
  title: "Atoms/H6",
  component: H6,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H6Title: Story = {
  args: {
    children: "H6 title",
  },
};
