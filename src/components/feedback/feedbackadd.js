//5alsana
import Navbar from "../navbar/navbar";
import React, { useState, useEffect } from "react";
import Sidebar from "../navbar/sidebar";
import axios from "axios";
import { Form } from "react-bootstrap";
function Feedback() {
  const [NameT, setNameT] = useState("");
  const [NameTA, setNameTA] = useState("");
  const [NameD, setNameD] = useState("");
  const [NameDA, setNameDA] = useState("");
  const [Name, setName] = useState("");
  const [NameA, setNameA] = useState("");
  const [msg, setMsg] = useState("");
  const [url, setUrl] = useState("");

  const handleChangeT = (event) => {
    setNameT(event.target.value);
    setMsg("");
  };
  const handleChangeTA = (event) => {
    setNameTA(event.target.value);
    setMsg("");
  };
  const handleChangeD = (event) => {
    setNameD(event.target.value);
    setMsg("");
  };
  const handleChangeDA = (event) => {
    setNameDA(event.target.value);
    setMsg("");
  };
  const handleChangeN = (event) => {
    setName(event.target.value);
    setMsg("");
  };
  const handleChangeNA = (event) => {
    setNameA(event.target.value);
    setMsg("");
  };

  const handleUpload = (img) => {
    console.log(img);
    var fdata = new FormData();
    fdata.append("file", img);
    axios
      .post("https://neon-9o9l.onrender.com/data/upload", fdata)
      .then((res) => {
        
        setUrl(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleClick = () => {
    console.log(url);
    console.log(NameT);
    console.log(NameTA);
    console.log(NameD);
    console.log(NameDA);
    console.log(Name);
    console.log(NameA);



    
    axios
      .post("https://neon-9o9l.onrender.com/feedback/addFeedback", {
        name: Name,
        nameArabic: NameA,
        description: NameD,
        descriptionArabic: NameDA,
        title: NameT,
        titleArabic: NameTA,
        img: url,
      })
      .then(function (response) {
        console.log(response);
        setMsg("Feedback added Successfully!");
      })
      .catch(function (error) {
        console.log(error);
        setMsg("Failed to add Feedback!");
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
              width: "90%",
              paddingBottom: "7%",

              border: "1px solid",
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
              Add a new Feedback
            </h4>
            <div class="custom-file">
              <h4
                style={{
                  fontFamily: "Yanone Kaffeesatz",
                  marginLeft: "3%",
                  fontSize: "19px",
                  paddingTop: "3%",
                  paddingBottom: "1%",
                }}
              >
                Upload Picture:
              </h4>
              <Form.Control
                style={{ width: "70%", marginLeft: "15%" }}
                placeholder="Upload Picture"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => {
                  console.log("here");
                  handleUpload(e.target.files[0]);
                  console.log(e.target.files[0]);
                }}
              />

              <form style={{ paddingTop: "3%" }}>
                <div class="row">
                  <div class="col">
                    <input
                      style={{
                        width: "100%",
                        marginLeft: "3%",
                        height: "150%",
                      }}
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      onChange={handleChangeN}
                      value={Name}
                    />
                  </div>
                  <div class="col">
                    <input
                      style={{ width: "96%", height: "150%" }}
                      type="text"
                      class="form-control"
                      placeholder="الاسم"
                      onChange={handleChangeNA}
                      value={NameA}
                    />
                  </div>
                </div>
              </form>

              <form style={{ paddingTop: "3%" }}>
                <div class="row">
                  <div class="col">
                    <input
                      style={{
                        width: "100%",
                        marginLeft: "3%",
                        height: "150%",
                      }}
                      type="text"
                      class="form-control"
                      placeholder="Title"
                      onChange={handleChangeT}
                      value={NameT}
                    />
                  </div>
                  <div class="col">
                    <input
                      style={{ width: "96%", height: "150%" }}
                      type="text"
                      class="form-control"
                      placeholder="العنوان"
                      onChange={handleChangeTA}
                      value={NameTA}
                    />
                  </div>
                </div>
              </form>

              <form style={{ paddingTop: "5%" }}>
                <div class="row">
                  <div class="col">
                    <textarea
                      style={{ marginLeft: "3%", width: "100%" }}
                      class="form-control"
                      id="textAreaExample2"
                      rows="8"
                      placeholder="Body"
                      onChange={handleChangeD}
                      value={NameD}
                    ></textarea>
                  </div>
                  <div class="col">
                    <textarea
                      style={{ width: "96%" }}
                      class="form-control"
                      id="textAreaExample2"
                      rows="8"
                      placeholder="المحتوى"
                      onChange={handleChangeDA}
                      value={NameDA}
                    ></textarea>
                  </div>
                </div>
              </form>

              <div
                style={{
                  paddingTop: "5%",
                  backgroundColor: "#f0f0f0",
                  marginLeft: "40%",
                }}
                class="text-box"
              >
                <button
                  style={{ width: "20%", marginLeft: "5%" }}
                  href="#"
                  className="button-45"
                  onClick={handleClick}
                >
                  Add
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
    </div>
  );
}
export default Feedback;
