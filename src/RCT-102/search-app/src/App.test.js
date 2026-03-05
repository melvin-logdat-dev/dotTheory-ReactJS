import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders search app heading", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /search app/i });
  expect(heading).toBeInTheDocument();
});
