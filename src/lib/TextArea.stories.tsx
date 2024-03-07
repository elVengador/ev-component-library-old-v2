import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "./TextArea";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/TextArea",
  component: TextArea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   variant: { control: 'color' },
  //   color:{control:}
  // },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultTextArea: Story = {
  args: {
    label: "Text area",
    variant: "solid",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat ac purus ut pellentesque. Sed faucibus suscipit est sed condimentum. Duis elementum libero ut turpis vulputate consectetur. Phasellus magna arcu, euismod in lacinia at, malesuada sit amet nunc. Quisque consectetur mi ante, vitae faucibus risus congue in. In venenatis eros nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
};

// export const OpenInNewTabLink: Story = {
//   args: {
//     color: "primary",
//     target: "_blank",
//     children: "Open in new tab",
//   },
// };
