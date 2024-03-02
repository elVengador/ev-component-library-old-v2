import type { Meta, StoryObj } from "@storybook/react";

import { Pre } from "./BaseHtml";

const meta = {
  title: "BaseHtml/Pre",
  component: Pre,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Pre>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PreText: Story = {
  args: {
    children: `
function sayHello() {
  console.log("Hello, World!");
}
    `,
  },
};
