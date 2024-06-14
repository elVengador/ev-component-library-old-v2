import type { Meta, StoryObj } from "@storybook/react";

import { Collapsible } from "./Collapsible";

const meta = {
  title: "Atoms/Collapsible",
  component: Collapsible,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CollapsibleDefault: Story = {
  args: {
    title: "Title",
    children: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
        exercitationem quasi aspernatur minus harum explicabo id laudantium sit.
        Deleniti ipsum officiis quod tempora fugiat harum qui. Magni ullam
        similique eveniet?
      </p>
    ),
  },
};
