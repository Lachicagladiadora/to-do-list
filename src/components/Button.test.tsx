import { Button } from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("testing Button componenet", () => {
  it("testing children button", async () => {
    const { debug } = render(
      <Button
        onClick={() => console.log("button was clicked")}
        title="new button"
      >
        click me
      </Button>
    );
    debug();
    const data = await screen.findByText("click me");
    expect(data).toBeInTheDocument();
  });

  it("testing function onclick", async () => {
    const onClickMock = jest.fn();
    const { debug } = render(
      <Button onClick={onClickMock} title="new button">
        click me
      </Button>
    );
    debug();
    const data = await screen.findByText("click me");
    fireEvent.click(data);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
