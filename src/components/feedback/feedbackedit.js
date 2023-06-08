//5alsana
import Navbar from "../navbar/navbar";
import React, { useState, useEffect } from "react";
import Sidebar from "../navbar/sidebar";
import axios from "axios";
import { Form } from "react-bootstrap";

function Editfeedback() {
  const [NameT, setNameT] = useState("");
  const [NameTA, setNameTA] = useState("");
  const [NameD, setNameD] = useState("");
  const [NameDA, setNameDA] = useState("");
  const [Name, setName] = useState("");
  const [NameA, setNameA] = useState("");
  const [msg, setMsg] = useState("");
  const [url, setUrl] = useState("");
  const [post, setPost] = useState([]);
  var select = document.getElementById("sel");

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
        console.log(res.data);
        setUrl(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://neon-9o9l.onrender.com/feedback/all")
      .then((response) => {
        const myRes = response.data;
        setPost(response.data.feedback);
        console.log(post);
      });
  }, []);

  const handleClick = () => {
/*  console.log(url);
    console.log(NameT);
    console.log(NameTA);
    console.log(NameD);
    console.log(NameDA);
    console.log(Name);
    console.log(NameA);
 */
    var value = select.options[select.selectedIndex].text;
    const found = post.find((obj) => {
      return obj.name=== value;
    });
    if(url===""){
      setMsg("Failed to edit Feedback! Please Upload a picture.");
    }else{
    axios
      .patch(`https://neon-9o9l.onrender.com/feedback/edit/${found._id}`, {
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
        setMsg("Feedback edited Successfully!");
      })
      .catch(function (error) {
        console.log(error);
        setMsg("Failed to edit Feedback!");
      });
    }
  };

 

  const handleChange1 = () => {
    var val = select.options[select.selectedIndex].text;
    const found = post.find((obj) => {
      return obj.name === val;
    });
    setNameT(found.title);
    setNameTA(found.titleArabic);
    setNameD(found.description);
    setNameDA(found.descriptionArabic);
    setName(found.name);
    setNameA(found.nameArabic);
    /* 

  console.log(found.titleEnglish)
  console.log(found.titleArabic)
  console.log(found.descriptionEnglish)
  console.log(found.descriptionArabic)
  console.log(found.bodyEnglish)
  console.log(found.bodyArabic) */
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
              Edit a Feedback
            </h4>
            <div class="input-group mb-3" style={{ marginLeft: "25%" }}>
              <select
                class="custom-select"
                id="sel"
                style={{ width: "50%", height: "40px" }}
                onChange={handleChange1}
              >
                <option selected hidden>
                  Choose Feedback
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
                  paddingBottom: "1%",
                }}
              >
                Upload Picture:
              </h4>
              <Form.Control
                style={{ width: "70%", marginLeft: "5%" }}
                placeholder="Upload Picture"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => {
                  handleUpload(e.target.files[0]);
                }}
              />

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
                    Name:
                      </label>
                  </div>
                  <div class="col">
                    <label
                      style={{ width: "90%", height: "150%",paddingTop:"3%", marginLeft:"70%"}}
                    
                      
                      
                  > :الاسم
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
                      placeholder="Name"
                      value={Name}
                      onChange={handleChangeN}
                    />
                  </div>
                  <div class="col">
                    <input
                      style={{ width: "96%", height: "150%" }}
                      type="text"
                      class="form-control"
                      placeholder="الاسم"
                      value={NameA}
                      onChange={handleChangeNA}
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
                      Title:
                      </label>
                  </div>
                  <div class="col">
                    <label
                      style={{ width: "90%", height: "150%",paddingTop:"3%", marginLeft:"70%"}}
                    
                      
                      
                  >:العنوان
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
                      
                      value={NameT}
                      onChange={handleChangeT}
                    />
                  </div>
                  <div class="col">
                    <input
                      style={{ width: "96%", height: "150%" }}
                      type="text"
                      class="form-control"
                      placeholder="العنوان"
                      value={NameTA}
                      onChange={handleChangeTA}
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
                      value={NameD}
                      onChange={handleChangeD}
                    ></textarea>
                  </div>
                  <div class="col">
                    <textarea
                      style={{ width: "96%" }}
                      class="form-control"
                      id="textAreaExample2"
                      rows="8"
                      placeholder="المحتوى"
                      value={NameDA}
                      onChange={handleChangeDA}
                    
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
export default Editfeedback;
