import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CityCard from "./components/cityCard";
import { useGetAllCitiesQuery } from "./redux/citySlice";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";


function App() {
  const { data, error, isLoading } = useGetAllCitiesQuery([]);
  let cities: any[] = [];
  if (data !== undefined && data !== null)
    cities = (data as Array<any>).filter((datai: any) => datai != null);
  let elem;
  if (isLoading) {
    elem = <CircularProgress color="secondary" />;
  } else if (error) {
    console.log(error);
    elem = <div>Oops, an error occured</div>;
  } else {
    elem = (
      <div className="cities">
        {cities &&
          cities.map((city) => (
            <CityCard
              key={city.id}
              id={city.id}
              name={city.name.toString()}
              degrees={city.degrees.toString()}
              type={city.weatherType.toString()}
              weeklyDegrees={city.weeklyDegrees}
            ></CityCard>
          ))}
      </div>
    );
  }
  return (
    <div className="App">
      <Navbar />
      <Box display="flex" justifyContent="center" p={10} alignItems="center">
        {elem}
      </Box>
    </div>
  );
}

export default App;
