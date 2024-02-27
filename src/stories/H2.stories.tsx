import type { Meta, StoryObj } from "@storybook/react";

import { H2 } from "../lib/Text";

const meta = {
  title: "Atoms/H2",
  component: H2,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H2Title: Story = {
  args: {
    children: "H2 title",
  },
};
