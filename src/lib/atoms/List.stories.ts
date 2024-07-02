import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";

const meta = {
  title: "Atoms/List",
  component: List,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultList: Story = {
  args: {
    // children: '['orange', 'pineapple']'
    // items:['orange', 'pineapple']
    
  },
};
