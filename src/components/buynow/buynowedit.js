//5alsana
import Navbar from "../navbar/navbar";
import Sidebar from "../navbar/sidebar";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";

function Buynowedit() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  var select = document.getElementById("sel");
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  const [price, setPrice] = useState("");
  const [nameArabic, setnameArabic] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  var select = document.getElementById("sel");

  useEffect(() => {
    axios
      .get("https://neon-9o9l.onrender.com/admin/allService")
      .then((response) => {
        const myRes = response.data;
        setPost(response.data.service);
       
      });
  }, []);

  
  const [selected, setSelected] = useState(null);
  const handleChange1 = (selectedOption) => {
    setSelected(selectedOption.text);
    var val = select.options[select.selectedIndex].text;
    const found = post.find((obj) => {
      return obj.name === val;
    });
    setMessage(found.name)
    setPrice(found.price)
    setnameArabic(found.nameArabic)
  };

  const handleClick = () => {
    var value = select.options[select.selectedIndex].text;
    const found = post.find((obj) => {
      return obj.name === value;
    });
    console.log("found_id: " + found._id);
    console.log("name: "+message);
    console.log("name Arabic: "+nameArabic);
    console.log("price: "+price);
    console.log("URL: "+`https://neon-9o9l.onrender.com/admin/editService/${found._id}`)
    axios
      .patch(`https://neon-9o9l.onrender.com/admin/editService/${found._id}`, {
        name: message,
        nameArabic:nameArabic,
        price:price
      })
      .then(function (response) {
        console.log("Response:"+response);
        setMsg("Service edited Successfully!");
      })
      .catch(function (error) {
        console.log("Error"+error);
        setMsg("Failed to edit service!");
      });
  };

  const handleChange = (event) => {
    setPrice(event.target.value);
    setMsg("");
  };

  const handleChange2 = (event) => {
    setMessage(event.target.value);
    setMsg("");
  };

  
  const handleChange3 = (event) => {
    setnameArabic(event.target.value);
    setMsg("");
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
              Edit Service
            </h4>
            <div class="custom-file">
              <div
                class="input-group mb-3"
                style={{ alignItems: "center", marginLeft: "25%" }}
              >
                <select
                  class="custom-select"
                  id="sel"
                  style={{ width: "50%", height: "40px" }}
                  onChange={handleChange1}
                >
                  <option disabled selected hidden>
                    Choose Service
                  </option>
                  {post
                    ? post.map((item) => {
                        return <option name={item.name}>{item.name}</option>;
                      })
                    : null}
                </select>
              </div>
              <div class="col">
                <label
                  style={{
                    width: "50%",
                    marginLeft: "25%",
                    height: "150%",
                    paddingBottom:"3%"

                  }}
                
                >
                  Name:
                  </label>
              </div>
              <div class="col">
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
                  onChange={handleChange2}
                  value={message}
                />
              </div>
              <div class="col">
                <label
                  style={{
                    width: "50%",
                    marginLeft: "25%",
                    height: "150%",
                  paddingTop:"3%"

                  }}
                
                >
                Arabic Name
                  </label>
              </div>
              <div class="col"  style={{paddingTop:"3%"}}>
                <input
                  style={{
                    width: "50%",
                    marginLeft: "25%",
                    height: "150%",

                  }}
                  type="text"
                  class="form-control"
                  placeholder="Arabic Name"
                  id="arabicname"
                  name="arabicname"
                  onChange={handleChange3}
                  value={nameArabic}
                />
              </div>
              <div class="col">
                <label
                  style={{
                    width: "50%",
                    marginLeft: "25%",
                    height: "150%",
                  paddingTop:"3%"

                  }}
                
                >
                 Price:
                  </label>
              </div>
              <div class="col" style={{paddingTop:"3%"}}>
                <input
                  style={{
                    width: "50%",
                    marginLeft: "25%",
                    height: "150%",
                    
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Price"
                  id="message"
                  name="message"
                  onChange={handleChange}
                  value={price}
                />
              </div>
              <button
                style={{ marginLeft: "45%", marginTop: "5%" }}
                class="button-45"
                role="button"
                onClick={handleClick}
              >
                Edit
              </button>
            </div>
            <label
              style={{
                textAlign: "center",
                marginLeft: "30%",
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
export default Buynowedit;
