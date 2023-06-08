//5alsana
import Navbar from "../navbar/navbar";
import React from "react";
import Sidebar from "../navbar/sidebar";
import { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";
import { Form } from "react-bootstrap";

function Teamedit() {
  const [post, setPost] = useState([]);
  const [postrole, setPostrole] = useState([]);
  const [postemp, setPostemp] = useState([]);
  const [url, setUrl] = useState("");
  const [Name, setName] = useState("");
  const [NameArabic, setNameArabic] = useState("");
  const [deptval, setdeptvalue] = useState("");
  const [title_val, set_title_value] = useState("");
  const [msg, setMsg] = useState("");

  var select_emp = document.getElementById("emp");
  var select_dep = document.getElementById("department");
  var select_title = document.getElementById("title");

  const handleChange = (event) => {
    setName(event.target.value);
    setMsg("");
  };
  const handleChange1 = (event) => {
    setNameArabic(event.target.value);
    setMsg("");
  };

  const handleChange_title = (event) => {
    set_title_value(event.target.value);
    setMsg("");
  };

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

  const handleClick = async () => {
    try {
      var value_emp = select_emp.options[select_emp.selectedIndex].text;
      var value_title = select_title.options[select_title.selectedIndex].text;
      var value_dep = select_dep.options[select_title.selectedIndex].text;
      if (url != "") {
      }
      var val = select_emp.options[select_emp.selectedIndex].text;
      const found = postemp.find((obj) => {
        return obj.name === val;
      });
      var value_title = select_title.options[select_title.selectedIndex].text;
      var value_dep = select_dep.options[select_dep.selectedIndex].text;

      const found_dep = post.find((obj) => {
        return obj.name === value_dep;
      });
      const found_title = postrole.find((obj) => {
        return obj.title === value_title;
      });    if(url===""){
        setMsg("Failed to edit Employee! Please Upload a picture.");
      }else{
      const res = await axios
        .patch(
          `https://neon-9o9l.onrender.com/swTeam/editSWTeamt/${found._id}`,
          {
            name: Name,
            nameArabic: NameArabic,
            img: url,
            jobTitle: found_title._id,
            dept: found_dep._id,
          }
        )
        .then(function (response) {
          console.log(response);
          setMsg("Employee edited Successfully!");
        })
        .catch(function (error) {
          console.log(error);
          setMsg("Failed to add Partner!");
        });}
    } catch (error) {
      console.log(error);
      setMsg("Failed to edit Employee!");
    }
  };

  const handleChange_dep = async (event) => {
    try {
      setdeptvalue(event.target.value);
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

  const handleChange_emp = async (event) => {
    try {
      setMsg("");

      var val = select_emp.options[select_emp.selectedIndex].text;
      const found = postemp.find((obj) => {
        return obj.name === val;
      });

      setName(found.name);
      setNameArabic(found.nameArabic);

      var val_dep = found.dept;
      const found_dep = post.find((obj) => {
        return obj._id === val_dep;
      });
      console.log(found.dept.name);
      setdeptvalue();
      setdeptvalue("hhhh");
      set_title_value();
      const res = await axios
        .get(
          `https://neon-9o9l.onrender.com/admin/allJobTitle/${found_dep._id}`
        )
        .then((response) => {
          setPostrole(response.data.jobTitle);

          var val_title = found.jobTitle;
          const found_title = response.data.jobTitle.find((obj) => {
            return obj._id === val_title;
          });
          set_title_value(found_title.title);
        });
    } catch {}
  };

  useEffect(() => {
    axios.get("https://neon-9o9l.onrender.com/swTeam/all").then((response) => {
      const myRes = response.data;

      setPostemp(response.data);
    });

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
          style={{ paddingTop: "6%", paddingBottom: "10%", marginLeft: "10%" }}
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
              Edit an Employee's Information
            </h4>
            <div class="input-group mb-3" style={{ marginLeft: "25%" }}>
              <select
                class="custom-select"
                id="emp"
                style={{ width: "50%", height: "40px" }}
                onChange={handleChange_emp}
              >
                <option disabled selected hidden>
                  Choose Employee
                </option>
                {postemp
                  ? postemp.map((item) => {
                      return <option name={item.name}>{item.name}</option>;
                    })
                  : null}
              </select>
            </div>
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
                      }}
                    
                      
                      value="Name"
                    >
                      Name:
                      </label>
                  </div>
                  <div class="col">
                    <label
                      style={{ width: "90%", height: "150%", marginLeft:"77%" }}
                    
                      
                      
                    >:الاسم
                      </label>
                  </div>
                </div>
              </form>

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
                    <label
                      style={{
                        width: "90%",
                        marginLeft: "10%",
                        height: "150%",
                        paddingTop:"3%"
                      }}
                    
                      
                    >
                      Department:
                      </label>
                  </div>
                  <div class="col">
                    <label
                      style={{ width: "90%", height: "150%",paddingTop:"3%"}}
                    
                      
                      
                  > Title:
                      </label>
                  </div>
                </div>
              </form>


              <form style={{ paddingTop: "3%" }}>
                <div class="row">
                  <div class="col">
                    <div class="input-group mb-3" style={{ marginLeft: "10%" }}>
                    <select
                        class="custom-select"
                        id="title"
                        style={{ width: "90%", height: "40px" }}
                        value={deptval}
                        onChange={handleChange_dep}
                      >
                        <option selected hidden>
                         {deptval}
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
                        value={title_val}
                        onChange={handleChange_title}
                      >
                        <option selected hidden>
                          {title_val}
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
                  EDIT
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
export default Teamedit;
