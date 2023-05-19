import React, { useEffect, useState } from "react";
import TabComponent from "../../../Component/TabComponent";
import CardComp from "../../../Component/CardComp";
import {
  Button,
  Checkbox,
  Chip,
  Fab,
  FormControlLabel,
  Stack,
  Switch,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { prodlist } from "../../../Component/Prod";
import BotNav from "../../../Component/BotNav";
import axios from "axios";
import { items } from "../../../Extraa/DummyProd";
import SearchBar from "../../../Component/SearchBar";
import Profile from "../../../Component/Profile/Index";

const prod = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(items);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  console.log("data", data);
  return (
    <>
      <SearchBar />

      <Profile />
      <div className="wrapper">
        {items.map((it) => (
          <div key={it.title} className="cardc">
            <img src={it.image} alt="Image 1" />
            <p>{it.title.slice(0, 9)}</p>
            <p>$ {it.price}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FormControlLabel
                control={
                  <Switch
                    onChange={(e) => {
                      console.log("e.target.checked", e.target.checked);
                    }}
                  />
                }
              />
              <p>Available</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default prod;
