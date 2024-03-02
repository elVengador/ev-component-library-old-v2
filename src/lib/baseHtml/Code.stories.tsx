import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "./BaseHtml";

const meta = {
  title: "BaseHtml/Code",
  component: Code,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CodeText: Story = {
  args: {
    children: `console.log('hello')`,
  },
};
