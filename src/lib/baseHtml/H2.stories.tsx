import type { Meta, StoryObj } from "@storybook/react";

import { H2 } from "./H2";

const meta = {
  title: "BaseHtml/H2",
  component: H2,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H2WithoutHashtag: Story = {
  args: {
    children: "H2 without hashtag",
  },
};

export const H2WithHashtag: Story = {
  args: {
    children: "H2 with hashtag",
    id: "h2-title",
  },
};
