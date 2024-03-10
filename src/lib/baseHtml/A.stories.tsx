import type { Meta, StoryObj } from "@storybook/react";

import { A } from "./BaseHtml";

const meta = {
  title: "BaseHtml/A",
  component: A,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof A>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PreText: Story = {
  args: {
    children: "Jimy Nicanor",
    href: "http://jimynicanor.com",
  },
};
