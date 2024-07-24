import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import headerbg from "../Images/Clothes/Vibes/vibesadelante.png";
export default function NoSense() {
  return (
    <div className="bg-stone-300 ">
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
