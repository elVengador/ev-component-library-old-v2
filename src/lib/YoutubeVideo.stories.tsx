import type { Meta, StoryObj } from "@storybook/react";

import { YoutubeVideo } from "./YoutubeVideo";

const meta = {
  title: "Atoms/YoutubeVideo",
  component: YoutubeVideo,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof YoutubeVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    videoId: "vgY5gNEOAZ0",
  },
};
