import { render } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../../utils/mockData";
import '@testing-library/jest-dom';


test("Should render RestaurantCard Component with all the data", ()=>{
render(<ResturantCard resData={MOCK_DATA} />);

const name = screen.getByText("Burger King");
expect(name).tobeINTheDocument();

})