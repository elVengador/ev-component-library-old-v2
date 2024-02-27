import type { Meta, StoryObj } from "@storybook/react";

import { Bold } from "../lib/Text";

const meta = {
  title: "Atoms/Bold",
  component: Bold,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Bold>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BoldText: Story = {
  args: {
    children: `Important text`,
  },
};
