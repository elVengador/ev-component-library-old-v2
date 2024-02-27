import type { Meta, StoryObj } from "@storybook/react";

import { H1 } from "../lib/Text";

const meta = {
  title: "Atoms/H1",
  component: H1,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1Title: Story = {
  args: {
    children: "H1 title",
  },
};
