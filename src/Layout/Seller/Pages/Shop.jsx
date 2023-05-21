import React, { useEffect, useState } from "react";
import {
  FormControlLabel,
  Switch,
} from "@mui/material";
import { items } from "../../../Extraa/DummyProd";
import SearchBar from "../../../Component/SearchBar";
import Profile from "../../../Component/Profile/Index";
import SideBar from "../../../Component/Sidebar";

const prod = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(items);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
