/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ButtonA, IButtonAProps } from "mbutton/lib/ButtonA";
// import { MDiv, type MDivProps } from "../../packages/mdiv/src";
// import { action } from "@storybook/addon-actions";
// import { MDiv, type MDivProps } from "mdiv/lib";
import type { Meta, StoryObj } from "@storybook/react";

import { MDiv, type MDivProps } from "../src/index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/MDiv",
  component: MDiv,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: () => {} },
} satisfies Meta<MDivProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const style: React.CSSProperties = {
  background: "red",
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OneMDiv: Story = {
  args: {
    title: "this is div",
    children: "i am content2",
    style: style,
    onClick: () => {
      // action("click mdiv :onClick");
      console.log("click");
    },
  },
};
