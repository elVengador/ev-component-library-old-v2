import type { Meta, StoryObj } from "@storybook/react";

import { H6 } from "./H6";

const meta = {
  title: "BaseHtml/H6",
  component: H6,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H6WithoutHashtag: Story = {
  args: {
    children: "H6 without hashtag",
  },
};

export const H6WithHashtag: Story = {
  args: {
    children: "H6 with hashtag",
    id: "h6-title",
  },
};
