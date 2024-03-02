import type { Meta, StoryObj } from "@storybook/react";

import { H2 } from "./BaseHtml";

const meta = {
  title: "BaseHtml/H2",
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
