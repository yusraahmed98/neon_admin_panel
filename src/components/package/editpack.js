import Sidebar from "../navbar/sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Editpackage() {
  const [showComponent, setComponent] = useState(false);
  const [showservice, setservice] = useState(false);
  const [msg, setMsg] = useState(false);
  const [valfree, setvalfree] = useState([]);
  const [val, setVal] = useState([]);
  const [id, setid] = useState([]);
  const [post, setPost] = useState([]);
  const [postp, setPostp] = useState([]);
  const [result, setresult] = useState([]);
  const [input, setinput] = useState([]);
  const [Title, setTitle] = useState("");
  const [TitleA, setTitleA] = useState("");
  const [Price, setPrice] = useState("");

  const handleChangeT = (event) => {
    setTitle(event.target.value);
    setMsg("");
  };

  const handleChangeTA = (event) => {
    setTitleA(event.target.value);
    setMsg("");
  };

  const handleChangeP = (event) => {
    setPrice(event.target.value);
    setMsg("");
  };

  const showComments = (event) => {
    setComponent(event.target.checked);
    setPrice("");
    setMsg("");
  };

  const show = (event) => {
    setservice(true);
  };

  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
    const abcd = [...valfree, false];
    setvalfree(abcd);
    setinput([]);
    val.map((i) => {
      post.map((item) => {
        if (i === item.name) {
          input.push(item._id);
        }
      });
    });

    setid(input);
  };

  var select = document.getElementById("package");

  const handleChangeN = () => {
    
    var val = select.options[select.selectedIndex].text;
    const found = postp.find((obj) => {
      return obj.name === val;
    });
    setTitle(found.name)
    setTitleA(found.nameArabic) 
    if(found.Price!=""){
      setComponent(true)
      setPrice(found.price)
    }
    


  };

  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
    console.log(val);
  };

  const handleChangef = (onChangeValue, i) => {
    const inputdata = [...valfree];
    inputdata[i] = onChangeValue.target.checked;
    setvalfree(inputdata);

    console.log(inputdata);
  };

  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);

    const deleteValfree = [...valfree];
    deleteValfree.splice(i, 1);
    setvalfree(deleteValfree);
  };

  useEffect(() => {
    axios
      .get("https://neon-9o9l.onrender.com/admin/allService")
      .then((response) => {
        const myRes = response.data;
        setPost(response.data.service);
      });

    axios
      .get("https://neon-9o9l.onrender.com/packages/all")
      .then((response) => {
        const myRes = response.data;
        console.log(response.data);
        setPostp(response.data);
        
      });
  }, []);

  const handleclick = () => {
    setinput([]);
    
    console.log(val)
    console.log(post)
    for (let i = 0; i < valfree.length; i++) {
      result.push({ service: id[i], free: valfree[i] });
    }

    console.log(result);
    console.log(Title);
    console.log(TitleA);
    console.log(Price);

    if (Price === "") {
    }
    var value = select.options[select.selectedIndex].text;
    const found = postp.find((obj) => {
      return obj.name === value;
    });
    axios
      .patch(`https://neon-9o9l.onrender.com/admin/editService/${found._id}`, {
        services: result,
        name: Title,
        nameArabic: TitleA,
        price: Price,
      })
      .then(function (response) {
        console.log(response);
        setMsg("Package edited Successfully!");
      })
      .catch(function (error) {
        console.log(error);
        setMsg("Failed to edit package!");
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
              Edit Package
            </h4>
            <select
              class="custom-select"
              style={{ width: "40%", height: "40px", marginLeft: "30%" }}
              id="package"
              onChange={handleChangeN}
            >
              <option selected hidden>
                Choose Package
              </option>
              {postp
                ? postp.map((item) => {
                    return <option name={item.name}>{item.name}</option>;
                  })
                : null}
            </select>
            <div class="custom-file">
            <form style={{ paddingTop: "3%" }}>
                <div class="row">
                  <div class="col">
                    <label
                      style={{
                        width: "100%",
                        marginLeft: "5%",
                        height: "150%",
                      }}
                     >
                      Title:
                      </label>
                  </div>
                  <div class="col">
                    <label
                   
                      style={{ width: "100%", height: "150%",marginLeft:"70%" }}
                      >
                        :العنوان
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
                      style={{ width: "95%", height: "150%" }}
                      type="text"
                      class="form-control"
                      placeholder="العنوان"
                      onChange={handleChangeTA}
                      value={TitleA}
                    />
                  </div>
                 
                </div>
              </form>

              {showComponent && (
                <form style={{ paddingTop: "3%" }}>
                  <div class="row">
                    <div class="col">
                      <input
                        style={{
                          width: "65%",
                          marginLeft: "3%",
                          height: "150%",
                        }}
                        type="text"
                        class="form-control"
                        placeholder="Price"
                        onChange={handleChangeP}
                        value={Price}
                      />
                    </div>

                    <div class="col">
                      <div
                        class="form-check form-switch"
                        style={{ marginTop: "3%", marginLeft: "50%" }}
                      >
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckDefault"
                        ></label>
                      </div>
                    </div>
                  </div>
                </form>
              )}

              {/* <h4
                style={{
                  color: "black",
                  fontFamily: "Yanone Kaffeesatz",
                  textAlign: "center",
                  fontSize: "19px",
                  paddingTop: "8%",
                  paddingBottom: "1%",
                  fontWeight: "500",
                }}
              >
                Services:
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></div>
 */}
        {/*       <>
                {val.map((data, i) => {
                  return (
                    <div style={{ paddingTop: "10%", marginLeft: "25%" }}>
                      <button
                        onClick={() => handleDelete(i)}
                        style={{
                          width: "5%",
                          marginLeft: "70%",
                          scale: "0.75",
                          backgroundColor: "rgba(242, 0, 8, 0.4)",
                        }}
                      >
                        x
                      </button>
                      <form style={{ paddingTop: "3%" }}>
                        <div class="row">
                          <div class="col">
                            <div
                              class="input-group mb-3"
                              style={{ marginLeft: "3%" }}
                            >
                              <select
                                class="custom-select"
                                style={{ width: "100%", height: "40px" }}
                                onChange={(e) => handleChange(e, i)}
                                value={data}
                              >
                                <option selected hidden>
                                  Choose Service
                                </option>
                                {post
                                  ? post.map((item) => {
                                      return (
                                        <option name={item.name}>
                                          {item.name}
                                        </option>
                                      );
                                    })
                                  : null}
                              </select>
                            </div>
                          </div>

                          <div class="col">
                            <div
                              class="form-check form-switch"
                              style={{ marginLeft: "20%" }}
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                onChange={(e) => handleChangef(e, i)}
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckDefault"
                              >
                                Free
                              </label>
                            </div>
                          </div>

                          <div class="col"></div>
                        </div>
                      </form>
                    </div>
                  );
                })}
                <button
                  style={{
                    marginLeft: "50%",
                    color: "white",
                    backgroundColor: "black",
                  }}
                  onClick={() => handleAdd()}
                >
                  +
                </button>
              </> */}

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
                  onClick={handleclick}
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
export default Editpackage;
