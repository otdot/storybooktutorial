import { ComponentStory } from "@storybook/react";
import Input, { IInput } from "./index";
import { within, userEvent, getByRole } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import React from "react";

export default {
  component: Input,
  title: "Input",
  argTypes: {
    //   foo is the property we want to remove from the UI
    onChange: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args: IInput) => {
  const [showClicked, setShowClicked] = React.useState<boolean>(false);

  const handleClick = () => {
    setShowClicked((prev) => !prev);
  };

  return (
    <>
      <Input {...args} onClick={handleClick} /> {showClicked && <p>clicked!</p>}
    </>
  );
};

export const Default: ComponentStory<typeof Input> = Template.bind({});

Default.args = {
  width: "150px",
  value: "prese",
};

export const Filled: ComponentStory<typeof Input> = Template.bind({});

Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId("input"), "test§123", { delay: 100 });
  await userEvent.click(canvas.getByRole("button"));

  await expect(canvas.getByText("clicked!")).toBeInTheDocument();
};
