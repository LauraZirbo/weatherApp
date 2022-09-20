import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clicked } from "../redux/citySlice"

type props = {
  input: string;
  cities: any[];
};
const List = ({ input, cities }: props) => {

  const filteredData = cities.filter((el) => {
    if (input === "") {
      return "";
    } else {
      return el.name.toLowerCase().includes(input);
    }
  });
  const dispatch = useDispatch();

  const handleClick = (name: any) => {
    console.log(name);
    dispatch(clicked({city: name }));
  };

  return (
    <ul >
      {filteredData.map((item) => (
        <Link
          key={item.id}
          onClick={() => handleClick(item.name)}
          style={{ textDecoration: "none" }}
          to={`/city/${item.name.toString()}`}
        >
          <li data-testid="citylist" className="searchreturn">{item.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default List;
