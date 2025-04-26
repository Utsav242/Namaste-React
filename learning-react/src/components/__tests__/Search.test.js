import { fireEvent, render, screen } from "@testing-library/react";
import BodyCom from "../BodyCom";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../../components/mocks/mockResList.json";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component with search button", async () => {
  await act(async () => 
    render(
  <BrowserRouter>
  <BodyCom />
</BrowserRouter>

));

const searchBtn = screen.getByRole("button", {name: "Search"});

const searchInput = screen.getByTestId("searchInput");

fireEvent.change(searchInput, {target: {value: "Burger King"}});

fireEvent.click(searchBtn);

expect(searchBtn).toBeInTheDocument();

});
