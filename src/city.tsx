import Navbar from "./components/Navbar";
import { useParams } from "react-router-dom";
import CityCard from "./components/cityCard";
import Chart from "./components/Chart";
import { useGetAllCitiesQuery } from "./redux/citySlice";
const City = ({}) => {
  const cname = useParams().name;
  const { data: cities, error, isLoading } = useGetAllCitiesQuery([]);
  let city: any[] = [];
  if (cities !== undefined && cities !== null)
    city = (cities as Array<any>).filter((datai: any) => datai.name === cname);
  return (
    <div>
      <Navbar />
      {cities !== undefined && city != null && (
        <div>
          <CityCard
            id={city[0].id}
            name={city[0].name}
            degrees={city[0].degrees.toString()}
            type={city[0].weatherType.toString()}
            weeklyDegrees={city[0].weeklyDegrees}
          ></CityCard>
          <Chart weeklyDegrees={city[0].weeklyDegrees}></Chart>
        </div>
      )}
    </div>
  );
};

export default City;
