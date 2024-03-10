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
  // decorators: [
  //   (Story) => {
  //     const [value, setValue] = useState(
  //       "loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx  loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx loremx loremxloremxloremxloremx loremxloremxloremx loremxloremx loremxloremxloremx"
  //     );
  //     return <Story args={{ value, onChange: setValue, autoResize: true }} />;
  //   },
  // ],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "Default Text Area",
  },
};
