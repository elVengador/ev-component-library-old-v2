import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";
import { Item } from "react-stately";

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
    children: [1, 2, 3].map((c) => <Item>{c}</Item>),
    label: "list example",
  },
};
