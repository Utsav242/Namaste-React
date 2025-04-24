import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should render the Contact component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");

  // Assertion
  expect(button).toBeInTheDocument();
});

describe("Contact Us Page Test Cases", () =>{
    test("should render the input name inside contact component", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("Name");
      
        // Assertion
        expect(inputName).toBeInTheDocument();
      });
      
      it("Should load 2 input boxes on the Contact Component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
      
        // Assertion
        expect(inputBoxes.length).toBe(2);
      });
})


