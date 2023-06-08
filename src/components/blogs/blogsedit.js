//5alsana
import { Form } from "react-bootstrap";
import Navbar from "../navbar/navbar";
import React from "react";
import Sidebar from "../navbar/sidebar";
import { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";
function EditBlogs() {

  const [NameT, setupNameT] = useState("");
  const [NameTA, setupNameTA] = useState("");
  const [NameD, setupNameD] = useState("");
  const [NameDA, setupNameDA] = useState("");
  const [NameB, setupNameB] = useState("");
  const [NameBA, setupNameBA] = useState("");
  const [msg, setMsg] = useState("");
  const [post, setPost] = useState([]);
  const [selected, setSelected] = useState(null);
  const [url, setUrl] = useState("");


  var select = document.getElementById("sel");
  
  const handleChange1 = () => {
   
    var val = select.options[select.selectedIndex].text;
    const found = post.find((obj) => {
      return obj.titleEnglish === val;
    });
  setupNameT(found.titleEnglish)
  setupNameTA(found.titleArabic)
  setupNameD(found.descriptionEnglish)
  setupNameDA(found.descriptionArabic)
  setupNameB(found.bodyEnglish)
  setupNameBA(found.bodyArabic)
/* 

  console.log(found.titleEnglish)
  console.log(found.titleArabic)
  console.log(found.descriptionEnglish)
  console.log(found.descriptionArabic)
  console.log(found.bodyEnglish)
  console.log(found.bodyArabic) */
  };
 const handleChangeT = (event) => {
    setupNameT(event.target.value);
    setMsg("");
  };
  const handleChangeTA = (event) => {
    setupNameTA(event.target.value);
    setMsg("");
  };
  const handleChangeD = (event) => {
    setupNameD(event.target.value);
    setMsg("");
  };
  const handleChangeDA = (event) => {
    setupNameDA(event.target.value);
    setMsg("");
  };
  const handleChangeB = (event) => {
    setupNameB(event.target.value);
    setMsg("");
  };
  const handleChangeBA = (event) => {
    setupNameBA(event.target.value);
    setMsg("");
  };

  useEffect(() => {
    axios
      .get("https://neon-9o9l.onrender.com/blogs/all")
      .then((response) => {
        const myRes = response.data;
        setPost(response.data);
        
        console.log(response.data)
      });
  }, []);


  const handleUpload = (img) => {
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
    var value = select.options[select.selectedIndex].text;
    const found = post.find((obj) => {
      return obj.titleEnglish === value;
    });
    if(url===""){
      setMsg("Failed to edit Blog! Please Upload a picture.");
    }else{
    axios
    .patch(`https://neon-9o9l.onrender.com/blogs/edit/${found._id}`, {
    titleEnglish:NameT,
    titleArabic:NameTA,
    descriptionArabic:NameDA,
    descriptionEnglish:NameD,
    bodyEnglish:NameB,
    bodyArabic:NameBA,
    img:url,
      })
      .then(function (response) {
        console.log(response);
        setMsg("Blog edited Successfully!");
      })
      .catch(function (error) {
        console.log(error);
        setMsg("Failed to edit Blog!");
      });
    }
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
              Edit a Blog
            </h4>
            <div class="input-group mb-3" style={{ marginLeft: "25%" }}>
              <select
                class="custom-select"
                id="sel"
                style={{ width: "50%", height: "40px" }}
                onChange={handleChange1}
              >
                <option disabled selected hidden>Choose Blog</option>
                {post
                    ? post.map((item) => {
                     
                        return <option name={item.titleEnglish}>{item.titleEnglish}</option>;
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
                      style={{ width: "100%", marginLeft: "3%", height:"150%" }}
                      type="text"
                      class="form-control"
                      placeholder="Title"
                      value={NameT}
                      onChange={handleChangeT}
                    />
                  </div>
                  <div class="col">
                    <input
                      style={{ width: "96%", height:"150%" }}
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
                      Description:
                      </label>
                  </div>
                  <div class="col">
                    <label
                      style={{ width: "90%", height: "150%",paddingTop:"3%", marginLeft:"70%"}}
                    
                      
                      
                  > :الوصف
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
                      placeholder="Description"
                      value={NameD}
                      onChange={handleChangeD}
                    />
                  </div>
                  <div class="col">
                    <input
                      style={{ width: "96%", height: "150%" }}
                      type="text"
                      class="form-control"
                      placeholder="الوصف"
                      value={NameDA}
                      onChange={handleChangeDA}
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
                      value={NameB}
                      onChange={handleChangeB}
                    ></textarea>
                  </div>
                  <div class="col">
                    <textarea
                      style={{ width: "96%" }}
                      class="form-control"
                      id="textAreaExample2"
                      rows="8"
                      placeholder="المحتوى"
                      value={NameBA}
                      onChange={handleChangeBA}
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
export default EditBlogs;
