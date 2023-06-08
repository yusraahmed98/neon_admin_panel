//5alsana
import Navbar from "../navbar/navbar";
import Sidebar from "../navbar/sidebar";
import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";

const DeletePartner = () => {
  const [selectOptions, setSelectOptions] = useState([]);
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  var select = document.getElementById("sel");
  const [msg, setMsg] = useState("");


  useEffect(() => {
    axios
      .get("https://neon-9o9l.onrender.com/partners/all")
      .then((response) => {
        const myRes = response.data;
        setSelectOptions(myRes);
        setIsLoading(false);
        console.log(response.data)
        setPost(response.data);
        setError("");
      });

    setIsLoading(true);
    if (!post) return null;
    else {
    }
  }, []);


  const handleChange = (event) => {

    setMsg("");
  };

  const removeUser = async () => {
    try {
      var value = select.options[select.selectedIndex].text;
      console.log(value);
      const found = post.find((obj) => {
        return obj.name === value;
      });
      console.log(found._id);
      const res = await axios.delete(
        `https://neon-9o9l.onrender.com/partners/delete/${found._id}`
      );
      console.log("Item successfully deleted.");
      setMsg("Partner deleted Successfully!");
    } catch (error) {
      console.log(error);
      setMsg("Failed to delete Partner!");
    }
  };

  return (
    <div className="image1" style={{ backgroundColor: "black" }}>
      <div style={{ float: "left" }}>
        <Sidebar />
      </div>

      <div style={{ overflow: "hidden" }}>
        <div style={{ paddingTop: "5%", paddingBottom: "20%" }}>
          <div
            style={{
              backgroundColor: "#f0f0f0",
              height: "70%",
              width: "60%",
              paddingBottom: "7%",
              marginLeft: "20%",

              border: "1px solid",
              marginTop: "10%",
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
              Delete Partner
            </h4>
            <div class="input-group mb-3" style={{ marginLeft: "25%" }}>
              <select
                class="custom-select"
                id="sel"
                style={{ width: "50%", height: "40px" }}
                onChange={handleChange}
              >
                <option disabled selected hidden>
                  Choose Partner
                </option>

                {post
                  ? post.map((item) => {
                      return <option name={item.name}>{item.name}</option>;
                    })
                  : null}
              </select>
            </div>

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
                class="button-45"
                onClick={() => removeUser()}
              >
                Delete
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
};
export default DeletePartner;
