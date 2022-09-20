import { render, screen} from "../test-utils";
import CityCard from "../components/cityCard";
import { createMemoryHistory } from "history";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "../App";

export const handlers = [
  rest.get("http://localhost:8080/cities", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "1",
          name: "Brasov",
          weatherType: "sunny",
          degrees: "23",
          weeklyDegrees: ["13", "21", "14"],
        },
        {
          id: "2",
          name: "Braila",
          weatherType: "sunny",
          degrees: "23",
          weeklyDegrees: ["13", "21", "14"],
        },
        {
          id: "3",
          name: "Cluj-Napoca",
          weatherType: "sunny",
          degrees: "23",
          weeklyDegrees: ["13", "21", "14"],
        },
      ])
    );
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("CityCard component", () => {
  test("checks if the properties were given corectly", () => {
    render(
      <BrowserRouter>
        <CityCard
          id={1}
          name="Cluj-Napoca"
          type="sunny"
          degrees={19}
          weeklyDegrees={[15, 13, 23]}
        />
      </BrowserRouter>
    );

    const cityName = screen.getByText("Cluj-Napoca");
    const cityWeatherType = screen.getByTestId("WbSunnyIcon");
    const cityDegrees = screen.getByText("19", { exact: false });
    expect(cityName).toBeInTheDocument();
    expect(cityWeatherType).toBeInTheDocument();
    expect(cityDegrees).toBeInTheDocument();
  });
  
  test("go to city", async () => {
    const historiy = createMemoryHistory();
    const name = "Brasov";
    const location = {
      pathname: `/city/${name.toString()}`,
      state: { fromDashboard: true },
    };
    const location2 = {
      pathname: "/",
      state: { fromDashboard: true },
    };
    historiy.push(location2);


    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    );
    const cityCard = await screen.findByText("Brasov");
    expect(cityCard).toBeInTheDocument();
  });
});
