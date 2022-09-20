import {
  CardContent,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AcUnit, WbSunny, Cloud } from "@mui/icons-material";
import { fontWeight } from "@mui/system";

interface buttonProps {
  type: string;
}

const Icon = ({ type }: buttonProps) => {

  if (type === "sunny") return <WbSunny fontSize="large" />;
  if (type === "cloudy") return <Cloud fontSize="large" />;
  if (type === "snow") return <AcUnit fontSize="large" />;
  else return <AcUnit fontSize="large" />;
};
type props = {
  id: number;
  name: string;
  type: string;
  degrees: string;
  weeklyDegrees: string[];
};
const CityCard = ({ id, name, type, degrees, weeklyDegrees }: props) => {

  return (
    <div className="cityCard" id={type}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/city/${name.toString()}`}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, fontWeight: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            The weather in
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }} component="div">
            {name}
          </Typography>
          <Typography
            sx={{ mb: 1.5, fontWeight: "bold" }}
            color="text.secondary"
          >
            is
          </Typography>
          <Typography variant="h4">{degrees}&deg;C</Typography>
          <Icon type={type} />
        </CardContent>
      </Link>
    </div>
  );
};
export default CityCard;
