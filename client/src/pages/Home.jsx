import React from "react";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        position: "relative",
      }}>
      <img src="/robot.gif" alt="Animated robot" style={{ height: "60%" }} />
      <p
        style={{
          fontSize: "2rem",
          margin: "0",
          fontWeight: "bold",
          fontStyle: "italic",
          position: "absolute",
          bottom: "25%",
          fontFamily: '"Comic Sans MS", cursive, sans-serif', // Change to your preferred font family
        }}>
        Snappy is Happy!!!!
      </p>
    </div>
  );
};

export default AppLayout()(Home);
