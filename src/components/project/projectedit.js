//5alsana

import Navbar from "../navbar/navbar";
import React from "react";
import Sidebar from "../navbar/sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
function Editprojects() {
  const [Link, setLink] = useState("");
  const [post, setPost] = useState("");
  const [Title, setTitle] = useState("");
  const [TitleA, setTitleA] = useState("");
  const [Body, setBody] = useState("");
  const [BodyA, setBodyA] = useState("");
  const [Type, setType] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange_type = (event) => {
    setType(event.target.value);
    setMsg("");
  };
  const handleChangeL = (event) => {
    setLink(event.target.value);
    setMsg("");
  };
  const handleChangeT = (event) => {
    setTitle(event.target.value);
    setMsg("");
  };
  const handleChangeTA = (event) => {
    setTitleA(event.target.value);
    setMsg("");
  };
  const handleChangeB = (event) => {
    setBody(event.target.value);
    setMsg("");
  };
  const handleChangeBA = (event) => {
    setBodyA(event.target.value);
    setMsg("");
  };

  const [url, setUrl] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [url4, setUrl4] = useState("");

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

  const handleUpload1 = (img) => {
    console.log(img);
    var fdata = new FormData();
    fdata.append("file", img);
    axios
      .post("https://neon-9o9l.onrender.com/data/upload", fdata)
      .then((res) => {
        console.log(res.data);
        setUrl1(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload2 = (img) => {
    console.log(img);
    var fdata = new FormData();
    fdata.append("file", img);
    axios
      .post("https://neon-9o9l.onrender.com/data/upload", fdata)
      .then((res) => {
        console.log(res.data);
        setUrl2(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload3 = (img) => {
    console.log(img);
    var fdata = new FormData();
    fdata.append("file", img);
    axios
      .post("https://neon-9o9l.onrender.com/data/upload", fdata)
      .then((res) => {
        console.log(res.data);
        setUrl3(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload4 = (img) => {
    console.log(img);
    var fdata = new FormData();
    fdata.append("file", img);
    axios
      .post("https://neon-9o9l.onrender.com/data/upload", fdata)
      .then((res) => {
        console.log(res.data);
        setUrl4(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://neon-9o9l.onrender.com/swProjects/all")
      .then((response) => {
        const myRes = response.data;
        setPost(myRes.swProjects);
      });
  }, []);

  var select = document.getElementById("type");
  var select_project = document.getElementById("project");

  const handleClick = () => {
    var value = select_project.options[select_project.selectedIndex].text;
    const urls = [url, url1, url2, url3];
    const found = post.find(obj => {
      return obj.name === value;
    });
    if(url===""||url1===""||url2===""||url3===""){
          setMsg("Failed to edit project! Please upload all the pictures.");
        }else{
        axios
          .patch(`https://neon-9o9l.onrender.com/swProjects/editSWProject/${found._id}` ,{
            name:Title,
            nameArabic:TitleA,
            description:Body,
            descriptionArabic:BodyA,
            link:Link,
            type:value,
            imgs:urls
            
          })
          .then(function (response) {
            console.log(response);
            setMsg("Project edited Successfully!");
          })
          .catch(function (error) {
            console.log(error);
            setMsg("Failed to edit project!");
          });
        }
  };

  const handleChange1 = () => {
    var val = select_project.options[select_project.selectedIndex].text;
    const found = post.find((obj) => {
      return obj.name === val;
    });
    setLink(found.link);
    setTitle(found.name);
    setTitleA(found.nameArabic);
    setBody(found.description);
    setBodyA(found.descriptionArabic);
    setType(found.type);
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
              Edit a Project
            </h4>
            <div class="input-group mb-3" style={{ marginLeft: "25%" }}>
              <select
                class="custom-select"
                id="project"
                style={{ width: "50%", height: "40px" }}
                onChange={handleChange1}
              >
                <option selected hidden>
                  Choose Project
                </option>
                {post
                  ? post.map((item) => {
                      return <option name={item.name}>{item.name}</option>;
                    })
                  : null}
              </select>
            </div>
            <div class="custom-file">
              <h4
                style={{
                  fontFamily: "Yanone Kaffeesatz",
                  marginLeft: "3%",
                  fontSize: "19px",
                  paddingTop: "3%",
                  paddingBottom: "2%",
                }}
              >
                Upload Cover Picture:
              </h4>
              <Form.Control
                style={{ width: "70%", marginLeft: "15%" }}
                placeholder="Upload Picture"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => {
                  handleUpload(e.target.files[0]);
                }}
              />

              <h4
                style={{
                  fontFamily: "Yanone Kaffeesatz",
                  marginLeft: "3%",
                  fontSize: "19px",
                  paddingTop: "3%",
                  paddingBottom: "2%",
                }}
              >
                Upload Project's Pictures:
              </h4>
              <div>
                <div class="col" style={{ paddingBottom: "3%" }}>
                  <Form.Control
                    style={{ width: "70%", marginLeft: "15%" }}
                    placeholder="Upload Picture"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => {
                      handleUpload1(e.target.files[0]);
                    }}
                  />
                </div>
                <div class="col" style={{ paddingBottom: "3%" }}>
                  <Form.Control
                    style={{ width: "70%", marginLeft: "15%" }}
                    placeholder="Upload Picture"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => {
                      handleUpload2(e.target.files[0]);
                    }}
                  />
                </div>
                <div class="col" style={{ paddingBottom: "3%" }}>
                  <Form.Control
                    style={{ width: "70%", marginLeft: "15%" }}
                    placeholder="Upload Picture"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => {
                      handleUpload3(e.target.files[0]);
                    }}
                  />
                </div>
               
              </div>
              <form style={{ paddingTop: "3%" }}>
                <div class="row">
                  <div class="col">
                    <label
                      style={{
                        width: "90%",
                        marginLeft: "3%",
                        height: "150%",
                        paddingTop:"3%"
                      }}
                    
                      
                    >
                      Type:
                      </label>
                  </div>
               
                </div>
              </form>
              <div>
                <div class="col">
                  <div
                    class="input-group mb-2"
                    style={{ marginLeft: "2%", paddingTop: "3%" }}
                  >
                    <select
                      id="type"
                      style={{ width: "47%", height: "40px" }}
                      value={Type}
                      onChange={handleChange_type}
                    >
                      <option selected hidden>
                        {Type}
                      </option>
                      <option value="1">Mobile App Development</option>
                      <option value="2">Web Development</option>
                      <option value="3">System Development</option>
                    </select>
                  </div>
                </div>
              </div>
              <form style={{ paddingTop: "3%" }}>
                <div class="row">
                  <div class="col">
                    <label
                      style={{
                        width: "90%",
                        marginLeft: "4%",
                        height: "150%",
                        paddingTop:"3%"
                      }}
                    
                      
                    >
                      Link:
                      </label>
                  </div>
                  
                </div>
              </form>
              <div class="row">
                <div class="col">
                  <input
                    style={{
                      width: "97%",
                      marginLeft: "1%",
                      marginTop: "3%",
                      height: "70%",
                    }}
                    type="text"
                    class="form-control"
                    placeholder="Link"
                    onChange={handleChangeL}
                    value={Link}
                  />
                </div>
              </div>
              <form style={{ paddingTop: "3%" }}>
                <div class="row">
                  <div class="col">
                    <label
                      style={{
                        width: "90%",
                        marginLeft: "10%",
                        height: "150%",
                        paddingTop:"3%"
                      }}
                    
                      
                    >
                      Title:
                      </label>
                  </div>
                  <div class="col">
                    <label
                      style={{ width: "90%", height: "150%",paddingTop:"3%", marginLeft:"70%"}}
                    
                      
                      
                  > :العنوان
                      </label>
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
                      value={Title}
                    />
                  </div>
                  <div class="col">
                    <input
                      style={{ width: "96%", height: "150%" }}
                      type="text"
                      class="form-control"
                      placeholder="العنوان"
                      onChange={handleChangeTA}
                      value={TitleA}
                    />
                  </div>
                </div>
              </form>
              <form style={{ paddingTop: "3%" }}>
                <div class="row">
                  <div class="col">
                    <label
                      style={{
                        width: "90%",
                        marginLeft: "10%",
                        height: "150%",
                        paddingTop:"3%"
                      }}
                    
                      
                    >
                      Body:
                      </label>
                  </div>
                  <div class="col">
                    <label
                      style={{ width: "90%", height: "150%",paddingTop:"3%", marginLeft:"70%"}}
                    
                      
                      
                  > :المحتوى
                      </label>
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
                      onChange={handleChangeB}
                      value={Body}
                    ></textarea>
                  </div>
                  <div class="col">
                    <textarea
                      style={{ width: "96%" }}
                      class="form-control"
                      id="textAreaExample2"
                      rows="8"
                      placeholder="المحتوى"
                      onChange={handleChangeBA}
                      value={BodyA}
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
    </div>
  );
}
export default Editprojects;
