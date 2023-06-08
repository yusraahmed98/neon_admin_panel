import Navbar from "../navbar/navbar";
import Sidebar from "../navbar/sidebar";
import React from "react";
import { useMediaQuery } from "react-responsive";
function Software() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div>
      {isTabletOrMobile && (
        <div style={{paddingBottom:"200%", backgroundColor:"#121212"}}>
        <div
          className="imagem"
          style={{ backgroundColor: "black", height: "210px" }}
        >
          <div style={{ float: "left" }}>
            <Sidebar />
          </div>

          <div
            className="eighty"
            style={{
              paddingTop: "3%",
              background: "linear-gradient(rgb(14, 14, 14)",
            }}
          >
            <h1 style={{ color: "white" }}>Software Development</h1>
          </div>
        </div>
        </div>
      )}

      {isDesktopOrLaptop && (
        <div
          className="image1"
          style={{ backgroundColor: "black", height: "900px" }}
        >
          <div style={{ float: "left" }}>
            <Sidebar />
          </div>

          <div
            className="eighty"
            style={{
              paddingTop: "3%",
              background: "linear-gradient(rgb(14, 14, 14)",
            }}
          >
            <h1 style={{ color: "white", paddingBottom: "5%" }}>
              Software Development
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
export default Software;
