import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const meta = {
  title: "Atoms/IconButton",
  component: IconButton,
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
    size: {
      options: ["md", "sm"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    color: "primary",
    variant: "solid",
    children: <FontAwesomeIcon icon={faCircleHalfStroke} />,
    onPress: () => console.log("clicked!!"),
  },
};

export const Flat: Story = {
  args: {
    color: "primary",
    variant: "flat",
    children: <FontAwesomeIcon icon={faCircleHalfStroke} />,
    onPress: () => console.log("clicked!!"),
  },
};

export const Disabled: Story = {
  args: {
    color: "primary",
    variant: "flat",
    children: <FontAwesomeIcon icon={faCircleHalfStroke} />,
    isDisabled: true,
    onPress: () => console.log("clicked!!"),
  },
};
