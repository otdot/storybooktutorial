import { describe, it, expect } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Input.stories";

const { Default } = composeStories(stories);

describe("something truthy and falsy", () => {
  //testing that tests work properly
  it("true to be true", () => {
    expect(true).toBe(true);
  });
  it("false to be false", () => {
    expect(false).toBe(false);
  });

  //When button is clicked, "clicked" text appears. fireEvent should be1 replaced by userEvent
  it("button rendered", () => {
    render(<Default />);

    fireEvent.click(screen.getByText("button"));

    expect(screen.getByText(/clicked/i)).toBeTruthy();
  });

  // Creates a snapshot if the rendered component. if later <Default/> changes tests will inform about them.
  it("button rendered", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
