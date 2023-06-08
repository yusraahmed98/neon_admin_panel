//5alsana
import Navbar from "../navbar/navbar";
import React from "react";
import Sidebar from "../navbar/sidebar";
import { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";
import { Form } from "react-bootstrap";

function OurTeam() {
  const [post, setPost] = useState([]);
  const [postrole, setPostrole] = useState([]);
  const [url, setUrl] = useState("");
  const [Name, setName] = useState("");
  const [NameArabic, setNameArabic] = useState("");
  const [msg, setMsg] = useState("");


  var select_dep = document.getElementById("department");
  var select_title = document.getElementById("title");

  const handleChange = (event) => {
    setName(event.target.value);
    setMsg("");
  };
  const handleChangeArabic = (event) => {
    setNameArabic(event.target.value);
    setMsg("");
  };




  const handleChange_dep = async (event) => {
    try {
      setMsg("");
      var value_dep = select_dep.options[select_dep.selectedIndex].text;

      const found_dep = post.find((obj) => {
        return obj.name === value_dep;
      });
      const res = await axios
        .get(
          `https://neon-9o9l.onrender.com/admin/allJobTitle/${found_dep._id}`
        )
        .then((response) => {
          setPostrole(response.data.jobTitle);
        });
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleChange1 = (event) => {
    setNameArabic(event.target.value);
    setMsg("");
  };
  const handleUpload = (img) => {
    setMsg("");
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

  const handleClick = async () => {
    try {
      setMsg("");
      var value_title = select_title.options[select_title.selectedIndex].text;
      var value_dep = select_dep.options[select_dep.selectedIndex].text;

      const found_dep = post.find((obj) => {
        return obj.name === value_dep;
      });
      const found_title = postrole.find((obj) => {
        return obj.title === value_title;
      });
      console.log(found_title._id);
      console.log(found_dep._id);

      console.log(url);
      console.log(Name);
      console.log(NameArabic);
      const res = await axios
        .post("https://neon-9o9l.onrender.com/swTeam/addSWTeam", {
          name: Name,
          nameArabic: NameArabic,
          img: url,
          jobTitle: found_title._id,
          dept: found_dep._id,
        })
        .then(function (response) {
          console.log(response);
          setMsg("Employee added Successfully!");
        })
        .catch(function (error) {
          console.log(error);
          setMsg("Failed to add Employee!");
        });
    } catch (error) {
      console.log(error);
      setMsg("Failed to delete Partner!");
    }
  };

  useEffect(() => {
    axios
      .get("https://neon-9o9l.onrender.com/admin/allDepartment")
      .then((response) => {
        const myRes = response.data;
        setPost(response.data.department);
      });
  }, []);






  return (
    <div className="image1" style={{ backgroundColor: "black" }}>
      <div style={{ float: "left" }}>
        <Sidebar />
      </div>

      <div style={{ overflow: "hidden" }}>
        <div
          style={{ paddingTop: "6%", paddingBottom: "20%", marginLeft: "10%" }}
        >
          <div
            className="colo"
            style={{
              backgroundColor: "#f0f0f0",

              paddingBottom: "7%",
              marginRight: "10%",
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
              Add a new Employee
            </h4>
            <div class="custom-file">
              <h4
                style={{
                  fontFamily: "Yanone Kaffeesatz",
                  marginLeft: "7%",
                  fontSize: "19px",
                }}
              >
                Upload Photo:
              </h4>
              <Form.Control
                style={{ width: "70%", marginLeft: "5%" }}
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
                        width: "90%",
                        marginLeft: "10%",
                        height: "150%",
                      }}
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      id="Name"
                      name="Name"
                      onChange={handleChange}
                      value={Name}
                    />
                  </div>
                  <div class="col">
                    <input
                      style={{ width: "90%", height: "150%" }}
                      type="text"
                      class="form-control"
                      placeholder="الاسم"
                      name="Name"
                      onChange={handleChange1}
                      value={NameArabic}
                    />
                  </div>
                </div>
              </form>

              <form style={{ paddingTop: "3%" }}>
                <div class="row">
                  <div class="col">
                    <div class="input-group mb-3" style={{ marginLeft: "10%" }}>
                      <select
                        class="custom-select"
                        id="department"
                        style={{ width: "90%", height: "40px" }}
                        onChange={handleChange_dep}
                      >
                        <option disabled selected hidden>
                          Department
                        </option>
                        {post
                          ? post.map((item) => {
                              return (
                                <option name={item.name}>{item.name}</option>
                              );
                            })
                          : null}
                      </select>
                    </div>
                  </div>

                  <div class="col">
                    <div class="input-group mb-3">
                      <select
                        class="custom-select"
                        id="title"
                        style={{ width: "90%", height: "40px" }}
                      >
                        <option selected hidden>
                          Title
                        </option>
                        {postrole
                          ? postrole.map((item) => {
                              return (
                                <option name={item.title}>{item.title}</option>
                              );
                            })
                          : null}
                      </select>
                    </div>
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
                  style={{ width: "20%" }}
                  href="#"
                  class="button-45"
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
export default OurTeam;
