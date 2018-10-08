import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li
        className="input-field"
        style={{
          display: "flex",
          alignItems: "center",
          verticalAlign: "center",
          justifyContent: "center",
          marginTop: "5px"
        }}
      >
        <input id="search" type="search" placeholder="search" />
      </li>
      <li>
        <NavLink to="/create">New Project</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>{" "}
      </li>
      <li>
        <NavLink
          to="/"
          className="btn btn-floating orange lighten-1"
          style={{
            height: "28px",
            width: "28px",
            display: "flex",
            alignItems: "center",
            verticalAlign: "center",
            justifyContent: "center",
            marginTop: "1px"
          }}
        >
          NN
        </NavLink>{" "}
      </li>
    </ul>
  );
};

export default SignedInLinks;
