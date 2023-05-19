import React from "react";
import "./Profile.css";
import SellerAddProd from "../SellerAddProd";
import { useAccType } from "../../zustand/store";
const Profile = () => {
  const type = useAccType((state) => state.type);
  return (
    <div className="card">
      <img
        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg"
        alt="Profile Picture"
      />
      <div className="card-content">
        <h2>John Doe</h2>
        <p>Software Developer</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {type === "seller" ? <SellerAddProd /> : null}
      </div>
    </div>
  );
};

export default Profile;
