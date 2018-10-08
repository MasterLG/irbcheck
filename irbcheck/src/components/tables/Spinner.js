import React from "react";
//import spinner from "./spinner.gif";

export default () => {
  return (
    <div class="spinner-layer spinner-green">
      <div class="circle-clipper left">
        <div class="circle" />
      </div>
      <div class="gap-patch">
        <div class="circle" />
      </div>
      <div class="circle-clipper right">
        <div class="circle" />
      </div>
    </div>
  );
};
