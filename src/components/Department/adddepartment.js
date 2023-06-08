//5alsana
import Navbar from "../navbar/navbar";
import Sidebar from "../navbar/sidebar";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import axios, { isCancel, AxiosError } from "axios";

function Department() {
  const [Name, setName] = useState("");

  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
    setMsg('')
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setName(message);
    axios
    .post("https://neon-9o9l.onrender.com/admin/addDepartment", {
      name: message,
    })
    .then(function (response) {
      console.log(response);
      setMsg("Department added Successfully!");
    })
    .catch(function (error) {
      console.log(error);
      setMsg("Failed to add Department!");

    });
  };

 

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });



  
  return (
    <div className="image1" style={{ backgroundColor: "black" }}>
      <div style={{ float: "left" }}>
        <Sidebar />
      </div>

      <div style={{ overflow: "hidden" }}>
        <div style={{ paddingTop: "10%", paddingBottom: "18%" }}>
          <div
            style={{
              backgroundColor: "#f0f0f0",
              height: "50%",
              paddingBottom: "7%",
              width: "70%",
              border: "1px solid",
              marginLeft: "10%",
            }}
          >
            <h4
              style={{
                fontFamily: "Yanone Kaffeesatz",
                letterSpacing: "0.7px",
                color: "#363636",
                fontWeight: "540",
                paddingBottom: "3%",
                textAlign: "center",
                paddingTop: "5%",
              }}
            >
              Add a new Department
            </h4>
            <div class="custom-file">
              <div class="col" style={{ paddingTop: "5%" }}>
                <input
                  style={{
                    width: "50%",
                    marginLeft: "25%",
                    height: "150%",
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  id="message"
                  name="message"
                  onChange={handleChange}
                  value={message}
                />
              </div>

              <button
                style={{ marginLeft: "45%", marginTop: "5%" }}
                class="button-45"
                role="button"
                type="submit"
                onClick={handleClick}
              >
                ADD
              </button>
              
            </div>
           <label style={{textAlign:"center", marginLeft:"35%", paddingTop:"3%", color:"blue",fontFamily: "Yanone Kaffeesatz",
                letterSpacing: "0.7px",}}>{msg}</label></div>
        </div>
      </div>
     
    </div>
  );
}
export default Department;
