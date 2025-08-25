import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello when name is provided", () => {
    render(<Greet name="Sagar" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/sagar/i);
  });

  it("should render login button when name is no provided", () => {
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
