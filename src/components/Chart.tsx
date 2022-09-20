import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type props = {
  weeklyDegrees: string[];
};

const Chart = ({ weeklyDegrees }: props) => {
  const data = [
    {
      name: "Yesterday",
      temperature: weeklyDegrees[0],
    },
    {
      name: "Today",
      temperature: weeklyDegrees[1],
    },
    {
      name: "Tomorrow",
      temperature: weeklyDegrees[2],
    },
  ];


  return (
    <div>
      
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="temperature"
          fill="#8884d8"
          background={{ fill: "#eee" }}
        />
      </BarChart>
    </div>
  );
};
export default Chart;
