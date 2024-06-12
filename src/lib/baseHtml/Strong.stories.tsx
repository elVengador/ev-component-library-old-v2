import type { Meta, StoryObj } from "@storybook/react";

import { Strong } from "./Strong";

const meta = {
  title: "BaseHtml/Strong",
  component: Strong,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Strong>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BoldText: Story = {
  args: {
    children: `Important text`,
  },
};
