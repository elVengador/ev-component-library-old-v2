import type { Meta, StoryObj } from "@storybook/react";

import { H1 } from "./H1";

const meta = {
  title: "BaseHtml/H1",
  component: H1,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1WithoutHashtag: Story = {
  args: {
    children: "H1 without hashtag",
  },
};

export const H1WithHashtag: Story = {
  args: {
    children: "H1 with hashtag",
    id: "h1-title",
  },
};
