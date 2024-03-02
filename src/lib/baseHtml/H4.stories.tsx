import type { Meta, StoryObj } from "@storybook/react";

import { H4 } from "./BaseHtml";

const meta = {
  title: "BaseHtml/H4",
  component: H4,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H4Title: Story = {
  args: {
    children: "H4 title",
  },
};
