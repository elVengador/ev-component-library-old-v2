import type { Meta, StoryObj } from "@storybook/react";

import { H3 } from "./H3";

const meta = {
  title: "BaseHtml/H3",
  component: H3,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H3WithoutHashtag: Story = {
  args: {
    children: "H3 without hashtag",
  },
};

export const H3WithHashtag: Story = {
  args: {
    children: "H3 with hashtag",
    id: "h3-title",
  },
};
