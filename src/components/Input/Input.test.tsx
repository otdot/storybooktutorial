import { screen, render, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Input.stories";

const { Default } = composeStories(stories);

describe("test", () => {
  it("testing Default input component", () => {
    const { getByText } = render(<Default />);

    fireEvent.click(getByText("button"));

    expect("clicked!").toBeInTheDocument();
  });
});
