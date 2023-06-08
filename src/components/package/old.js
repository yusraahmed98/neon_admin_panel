// done but try to remove the option if i already selected it??
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios, { isCancel, AxiosError } from "axios";

const Input = () => {
  const [visible, setVisible] = useState(true);
  var select = document.getElementById("sel");
  const [post, setPost] = useState([]);
  const [service_val, setService] = useState("");
  const [freeser, setFree] = useState(false);
  


  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  useEffect(() => {
    axios
      .get("https://neon-9o9l.onrender.com/admin/allService")
      .then((response) => {
        const myRes = response.data;
        setPost(response.data.service);
      });
  }, []);


  var select = document.getElementById(service_val);
  const free = () => {
    setFree((prev) => !prev);
    
  }

  const handleChange = (event) => {
    /* if(visible){ 
    var val = select.options[select.selectedIndex].text;
    const found = post.find((obj) => {
      return obj.name === val;
    });
      console.log(found)

    }
  */
 setService(event.target.value)
 
    };
/* 
    useEffect(() => {
      console.log(freeser)
      console.log(service_val)
    }, []);
   */

  return (
    <div>
      {visible && (
        
        <form style={{ paddingTop: "3%" }}>
          <div class="row">
            <div class="col">
              <div class="input-group mb-3" style={{ marginLeft: "3%" }}>
                <select
                  class="custom-select"
                  style={{ width: "100%", height: "40px" }}
                  onChange={handleChange}
                  id={service_val}
                >
                  <option selected hidden>
                    Choose Service
                  </option>
                  {post
                    ? post.map((item) => {
                        return <option name={item.name}>{item.name}</option>;
                      })
                    : null}
                </select>
              </div>
            </div>

            <div class="col">
              <div class="form-check form-switch" style={{ marginLeft: "20%" }}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={free}
                />
                <label class="form-check-label" for="flexSwitchCheckDefault" >
                  Free
                </label>
              </div>
            </div>

            <div class="col">
              <button onClick={removeElement}>Remove</button>
             
            </div>
          </div>
        </form>
      )}{" "}
    </div>
  );
};

export function Form() {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div>
      {console.log(inputList)}
      {inputList}
      <button onClick={onAddBtnClick} style={{ marginLeft: "50%" }}>
        +
      </button>
    </div>
  );
}
