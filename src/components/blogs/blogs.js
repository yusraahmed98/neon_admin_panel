//5alsana
import Navbar from "../navbar/navbar";
import React from "react";
import Sidebar from "../navbar/sidebar";
import axios from "axios";
import { Form } from "react-bootstrap";
import { useState } from "react";
function Blogs() {
  const [NameT, setNameT] = useState("");
  const [NameTA, setNameTA] = useState("");
  const [NameD, setNameD] = useState("");
  const [NameDA, setNameDA] = useState("");
  const [NameB, setNameB] = useState("");
  const [NameBA, setNameBA] = useState("");
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
  const handleChangeB = (event) => {
    setNameB(event.target.value);
    setMsg("");
  };
  const handleChangeBA = (event) => {
    setNameBA(event.target.value);
    setMsg("");
  };

  const handleUpload = (img) => {
    console.log(img);
    var fdata = new FormData();
    fdata.append("file", img);
    axios
      .post("https://neon-9o9l.onrender.com/data/upload", fdata)
      .then((res) => {
        console.log(res.data);
        setUrl(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = (img) => {
    console.log(url);
    console.log(NameT);
    console.log(NameTA);
    console.log(NameD);
    console.log(NameDA);
    console.log(NameB);
    console.log(NameBA);

    axios
  .post("https://neon-9o9l.onrender.com/blogs/add", {
titleEnglish: NameT,
titleArabic: NameTA,
bodyEnglish: NameB,
bodyArabic: NameBA,
descriptionEnglish:NameD,
descriptionArabic:NameDA,
img:url



  })
  .then(function (response) {
    console.log(response);
    setMsg("Blog added Successfully!");
  })
  .catch(function (error) {
    console.log(error);
    setMsg("Failed to add Blog!");

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
              Add a new Blog
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
                      placeholder="Description"
                      onChange={handleChangeD}
                      value={NameD}
                    />
                  </div>
                  <div class="col">
                    <input
                      style={{ width: "96%", height: "150%" }}
                      type="text"
                      class="form-control"
                      placeholder="الوصف"
                      onChange={handleChangeDA}
                      value={NameDA}
                    />
                  </div>
                </div>
              </form>

              <form style={{ paddingTop: "5%" }}>
                <div class="row">
                  <div class="col">
                    <textarea
                      style={{ marginLeft: "3%", width: "100%" }}
                      onChange={handleChangeB}
                      value={NameB}
                      class="form-control"
                      id="textAreaExample2"
                      rows="8"
                      placeholder="Body"
                    ></textarea>
                  </div>
                  <div class="col">
                    <textarea
                     onChange={handleChangeBA}
                     value={NameBA}

                      style={{ width: "96%" }}
                      class="form-control"
                      id="textAreaExample2"
                      rows="8"
                      placeholder="المحتوى"
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
export default Blogs;
