import type { Meta, StoryObj } from "@storybook/react";

import { Img } from "./BaseHtml";

const meta = {
  title: "BaseHtml/Img",
  component: Img,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageDefault: Story = {
  args: {
    src: "https://cdn.pixabay.com/photo/2023/07/24/09/14/coccinellidae-8146623_1280.jpg",
    alt: "image example",
  },
};
