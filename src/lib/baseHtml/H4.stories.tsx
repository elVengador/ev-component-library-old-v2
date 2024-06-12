import type { Meta, StoryObj } from "@storybook/react";

import { H4 } from "./H4";

const meta = {
  title: "BaseHtml/H4",
  component: H4,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H4WithoutHashtag: Story = {
  args: {
    children: "H4 without hashtag",
  },
};

export const H4WithHashtag: Story = {
  args: {
    children: "H4 with hashtag",
    id: "h4-title",
  },
};
