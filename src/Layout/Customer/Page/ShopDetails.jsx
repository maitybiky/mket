import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, Switch } from "@mui/material";
import { items } from "../../../Extraa/DummyProd";
import SearchBar from "../../../Component/SearchBar";
import Profile from "../../../Component/Profile/Index";
import { useAccType } from "../../../zustand/store";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
const ShopDetails = () => {
  const type = useAccType((state) => state.type);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <SearchBar />

      <Profile  />
      <div className="wrapper">
        {items.map((it) => (
          <div key={it.title} className="cardc">
            <img src={it.image} alt="Image 1" />
            <p>{it.title.slice(0, 9)}</p>
            <p>$ {it.price}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              {type === "seller" ? (
                <>
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
                </>
              ) : type === "user" ? (
                <>
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopDetails;
