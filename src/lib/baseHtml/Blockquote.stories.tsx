import type { Meta, StoryObj } from "@storybook/react";

import { Blockquote } from "./Blockquote";

const meta = {
  title: "BaseHtml/Blockquote",
  component: Blockquote,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBlockquote: Story = {
  args: {
    // variant: "default",
    source: "Anonym",
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
    est voluptates cupiditate modi velit doloremque pariatur omnis id
    corrupti! Neque nulla molestias expedita soluta distinctio quas est
    necessitatibus reiciendis quisquam.`,
  },
};

export const BaseBlockquote: Story = {
  args: {
    variant: "base",
    source: "Heart's Queen",
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
    est voluptates cupiditate modi velit doloremque pariatur omnis id
    corrupti! Neque nulla molestias expedita soluta distinctio quas est
    necessitatibus reiciendis quisquam.`,
  },
};
