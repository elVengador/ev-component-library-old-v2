import type { Meta, StoryObj } from "@storybook/react";

import { P } from "./P";

const meta = {
  title: "BaseHtml/P",
  component: P,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof P>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
    est voluptates cupiditate modi velit doloremque pariatur omnis id
    corrupti! Neque nulla molestias expedita soluta distinctio quas est
    necessitatibus reiciendis quisquam.`,
  },
};
