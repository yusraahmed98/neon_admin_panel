//5alsana

import Navbar from "../navbar/navbar";
import Sidebar from "../navbar/sidebar";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";

function AddRole() {
  
  
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  
  
  
  const [Name, setName] = useState("");
  const [selectOptions, setSelectOptions] = useState([]);
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  var select = document.getElementById("sel");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  var select = document.getElementById("sel");

  const handleChange = (event) => {
    setMessage(event.target.value);
    setMsg("");
  };

  const handleChange1 = (event) => {
    setMsg("");
  };

  useEffect(() => {
    axios
      .get("https://neon-9o9l.onrender.com/admin/allDepartment")
      .then((response) => {
        const myRes = response.data;
        setSelectOptions(myRes);
        setIsLoading(false);
        setPost(response.data.department);
        setError("");
      });

    setIsLoading(true);
    if (!post) return null;
    else {
    }
  }, []);

  const handleClick = () => {
    setName(message);
    var value = select.options[select.selectedIndex].text;
    console.log(value);
    const found = post.find((obj) => {
      return obj.name === value;
    });
    console.log(found._id);
    axios
      .post("https://neon-9o9l.onrender.com/admin/addJobTitle", {
        title: message,
        dept: found._id,
      })
      .then(function (response) {
        console.log(response);
        setMsg("Role added Successfully!");
      })
      .catch(function (error) {
        console.log(error);
        setMsg("Failed to add Role!");
      });
  };



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
              Add a new Role
            </h4>

            <select
              class="custom-select"
              id="sel"
              style={{ width: "50%", height: "40px", marginLeft: "25%" }}
              onChange={handleChange1}
            >
              <option disabled selected hidden>
                Choose Department
              </option>

              {post
                ? post.map((item) => {
                    return <option name={item.name}>{item.name}</option>;
                  })
                : null}
            </select>
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
                  placeholder="Title"
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
            <label
              style={{
                textAlign: "center",
                marginLeft: "35%",
                paddingTop: "3%",
                color: "blue",
                fontFamily: "Yanone Kaffeesatz",
                letterSpacing: "0.7px",
              }}
            >
              {msg}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddRole;
