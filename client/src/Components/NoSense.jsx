import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import headerbg from "../Images/Clothes/Born/vibesdelante.webp";
export default function NoSense() {
  return (
    <div className="bg-black ">
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${headerbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <Header />
      </div>
    </div>
  );
}
