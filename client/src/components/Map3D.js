import React, { useState } from "react";
import VegetationMap from "./VegetationMap";

const GlobalMap = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <VegetationMap />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        textAlign: "center",
        zIndex: 1000,
        textShadow: "2px 2px 10px rgba(0,0,0,0.7)"
      }}>
        <h1>BloomWatch</h1>
        <p>Tracking Global Vegetation</p>
      </div>
    </div>
  );
};

export default Map3d;
