import type { Meta, StoryObj } from "@storybook/react";

import { H3 } from "./BaseHtml";

const meta = {
  title: "BaseHtml/H3",
  component: H3,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H3Title: Story = {
  args: {
    children: "H3 title",
  },
};
