import { Container, CssBaseline, Grid, Paper } from "@mui/material";
import React from "react";
import CardComp from "../../../Component/CardComp";
import TabComponent from "../../../Component/TabComponent";
import SearchBar from "../../../Component/SearchBar";

const Home = () => {
  let txt = `  Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`;
  return (
    <>
       <SearchBar />
      <div className="wrapper mt-3">
        <section className="section">
          <CardComp head={"view"} body={txt} />
        </section>
        <section className="section">
          <CardComp head={"view"} body={txt} />
        </section>
        <section className="section">
          <CardComp head={"view"} body={txt} />
        </section>
        <section className="section">
          <CardComp head={"view"} body={txt} />
        </section>
        <section className="section">
          <CardComp head={"view"} body={txt} />
        </section>
        <section className="section">
          <CardComp head={"view"} body={txt} />
        </section>
        <section className="section">
          <CardComp head={"view"} body={txt} />
        </section>
        <section className="section">
          <CardComp head={"view"} body={txt} />
        </section>
      </div>
    </>
  );
};

export default Home;
