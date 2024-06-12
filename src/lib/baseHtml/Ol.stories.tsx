import type { Meta, StoryObj } from "@storybook/react";
import { Ol } from "./Ol";

const meta = {
  title: "BaseHtml/Ol",
  component: Ol,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Ol>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OrderedList: Story = {
  args: {
    children: (
      <>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </>
    ),
  },
};
