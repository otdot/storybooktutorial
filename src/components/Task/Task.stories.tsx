import React from "react";

import Task from "./index";

interface argType {
  name: string;
}

export default {
  component: Task,
  title: "Task",
  parameters: {
    backgrounds: {
      default: "facebook",
    },
  },
};

const Template = (args: argType) => {
  console.log(args);

  return <Task {...args} />;
};

export const Default: any = Template.bind({});
Default.args = {
  name: "otto",
};
