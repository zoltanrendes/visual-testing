import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App.tsx", () => {
  it("should render all elements", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();

    expect(screen.getByRole("navigation").textContent?.includes("Shop")).toBeTruthy();
    expect(screen.getByRole("navigation").textContent?.includes("Products")).toBeTruthy();
    expect(screen.getByRole("navigation").textContent?.includes("Deals")).toBeTruthy();
    expect(screen.getByRole("navigation").textContent?.includes("Stores")).toBeTruthy();
    expect(screen.getByRole("navigation").textContent?.includes("Contact")).toBeTruthy();

    expect(screen.getAllByRole("navigation")).toHaveLength(1);
    expect(screen.getAllByRole("img")).toHaveLength(6);
    expect(screen.getAllByRole("textbox")).toHaveLength(1);
    expect(screen.getAllByRole("button")).toHaveLength(2);

    const buttons = screen.getAllByRole("button").values();

    expect((buttons.next().value as HTMLButtonElement).className).toBe("navbar-toggler");
    expect((buttons.next().value as HTMLButtonElement).textContent).toBe("Sign Up");

    expect(screen.getByText(/Online Store Copyright/i)).toBeTruthy();
    expect(screen.getAllByPlaceholderText("Email Address")).toHaveLength(1);
  });
});
