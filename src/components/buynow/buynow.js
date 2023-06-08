//5alsana
//Services

import Navbar from "../navbar/navbar";
import Sidebar from '../navbar/sidebar'
import React from "react";
import { useMediaQuery } from 'react-responsive'
import axios, { isCancel, AxiosError } from "axios";
import { useState } from "react";
function Buynow() {


  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  
  const [Name2, setName2] = useState("");
  const [price, setPrice] = useState("");
  
  const [Name3, setName3] = useState("");
  const [NameArabic, setNameArabic] = useState("");
  
  const [msg, setMsg] = useState("");


  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })



  const handleChange = (event) => {
    setMessage(event.target.value);
    setMsg('')
  };
  
  const handleChange2 = (event) => {
    setPrice(event.target.value);
    setMsg('')
  };
  
  const handleChange3 = (event) => {
    setNameArabic(event.target.value);
    setMsg('')
  };

  const handleClick = () => {
    setName(message);
    setName2(price);
    setName3(NameArabic);
    console.log(message+" "+ NameArabic+" "+price)
    axios
    .post("https://neon-9o9l.onrender.com/admin/addService", {
      name: message,
      nameArabic: NameArabic,
      price: price
    })
    .then(function (response) {
      console.log(response);
      setMsg("Service added Successfully!");
    })
    .catch(function (error) {
      console.log(error);
      setMsg("Failed to add Service!");

    });
  };


  return (
    <div  className="image1" style={{ backgroundColor: "black" }}>
      <div style={{ float: "left" }}>
       <Sidebar />
      </div>

      <div style={{ overflow: "hidden" }}>
        <div
          style={{ paddingTop: "10%", paddingBottom: "18%"}}
        >
          <div
            style={{
              backgroundColor: "#f0f0f0",
              height:"50%",
              paddingBottom: "7%",
             width:"70%",
              border: "1px solid",
              marginLeft:"10%"
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
                paddingTop:"5%"
              }}
            >
             Add a new Service
            </h4>
            <div class="custom-file">
              
     
            <form style={{paddingTop:"3%"}}>
                <div class="row">
                  <div class="col">
                    <input
                      style={{ width: "100%", marginLeft: "3%" , height:"150%"}}
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      id="message"
                      name="message"
                      onChange={handleChange}
                      value={message}
                    />
                  </div>
                  <div class="col">
                    <input
                      style={{ width: "96%", height:"150%" }}
                      type="text"
                      class="form-control"
                      placeholder="الاسم"
                      id="NameArabic"
                      name="NameArabic"
                      onChange={handleChange3}
                      value={NameArabic}

                    />
                  </div>
                </div>
              </form>


              <form style={{paddingTop:"3%"}}>
                <div class="row">
                  <div class="col">
                    <input
                      style={{ width: "100%", marginLeft: "3%" , height:"150%"}}
                      type="text"
                      class="form-control"
                      placeholder="Price"
                      id="price"
                      name="price"
                      onChange={handleChange2}
                      value={price}
                    />
                    
                  </div>
                  <div class="col">
                  
                  </div>
                </div>
              </form>
              <button
                style={{ marginLeft: "45%", marginTop: "5%" }}
                class="button-45"
                role="button"
                onClick={handleClick}
              >
                ADD
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
export default Buynow;
