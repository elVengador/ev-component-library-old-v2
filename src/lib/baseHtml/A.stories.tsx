import type { Meta, StoryObj } from "@storybook/react";

import { A } from "./A";

const meta = {
  title: "BaseHtml/A",
  component: A,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof A>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnchorDefault: Story = {
  args: {
    children: "Jimy Nicanor",
    href: "http://jimynicanor.com",
  },
};
