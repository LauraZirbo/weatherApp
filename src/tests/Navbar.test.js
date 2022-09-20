import { render, screen, fireEvent, waitFor } from "../test-utils";
import Navbar from "../components/Navbar";
import List from "../components/List";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
describe("Navbar component", () => {
  test("renders the title in the Navbar", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const helloWorldElement = screen.getByText("TechBreezeWeather");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders the list on searchComponent", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "br" } });
    const list = screen.getByRole("list");
    expect(inputElement.value).toBe("br");
    expect(list).toBeInTheDocument();
  });

  test("does not render anything when there is no input",  () => {
    const data = [
      {
        id: 6,
        name: "Brasov",
        weatherType: "snow",
        lan: 45.760696,
        lon: 21.226788,
        degrees: 24.0,
        weeklyDegrees: [14.0, 19.0, 29.0],
      },
      {
        id: 7,
        name: "Cluj",
        weatherType: "snow",
        lan: 45.760696,
        lon: 21.226788,
        degrees: 24.0,
        weeklyDegrees: [14.0, 19.0, 29.0],
      },
      {
        id: 8,
        name: "Braila",
        weatherType: "snow",
        lan: 45.760696,
        lon: 21.226788,
        degrees: 24.0,
        weeklyDegrees: [14.0, 19.0, 29.0],
      },
    ];

    render(
      <BrowserRouter>
        <List input="br" cities={data} />
      </BrowserRouter>
    );
    const listElement = screen.getByText("Brasov");
    const listElement2 = screen.getByText("Braila");
    expect(listElement2).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
});
});
