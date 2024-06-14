import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./Link";

const meta = {
  title: "Atoms/Link",
  component: Link,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RedirectLink: Story = {
  args: {
    color: "primary",
    children: "Redirect",
  },
};

export const OpenInNewTabLink: Story = {
  args: {
    color: "primary",
    target: "_blank",
    children: "Open in new tab",
  },
};
