import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";

const meta = {
  title: "Atoms/Switch",
  component: Switch,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: [
        "primary",
        "secondary",
        "destructive",
        "foreground",
        "background",
      ],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSwitch: Story = {
  args: {
    children: "Default Switch",
  },
};

export const DisabledSwitch: Story = {
  args: {
    children: "Disabled Switch",
    color: "foreground",
    size: "md",
    isDisabled: true,
  },
};
// export const Flat: Story = {
//   args: {
//     color: "primary",
//     variant: "flat",
//     children: "Click here",
//     onPress: () => console.log("clicked!!"),
//   },
// };

// export const Disabled: Story = {
//   args: {
//     color: "primary",
//     variant: "flat",
//     children: "Click here",
//     onPress: () => console.log("clicked!!"),
//     isDisabled: true
//   },
// };
