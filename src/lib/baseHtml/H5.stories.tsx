import type { Meta, StoryObj } from "@storybook/react";

import { H5 } from "./H5";

const meta = {
  title: "BaseHtml/H5",
  component: H5,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H5WithoutHashtag: Story = {
  args: {
    children: "H5 without hashtag",
  },
};

export const H5WithHashtag: Story = {
  args: {
    children: "H5 with hashtag",
    id: "h5-title",
  },
};
