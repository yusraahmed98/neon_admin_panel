import React, { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";

export default function Testing() {
 
 
 const [valfree, setvalfree] = useState([]);
  const [val, setVal] = useState([]);
  const [post, setPost] = useState([]);
 
 
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
    const abcd = [...valfree, false];
    setvalfree(abcd);
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

  console.log(inputdata); };

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
  }, []);

 
 
 
  return (
    <>
      
      {val.map((data, i) => {
        return (
         
          <div style={{paddingTop:"10%", marginLeft:"25%"}}>
          
           {/*  <input value={data} /> */}
           <button onClick={() => handleDelete(i)} style={{width:"5%", marginLeft:"70%", scale:"0.75", backgroundColor:"rgba(242, 0, 8, 0.4)"}}>x</button>
            <form style={{ paddingTop: "3%" }}>
              <div class="row">
                <div class="col">
                  <div class="input-group mb-3" style={{ marginLeft: "3%" }}>
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
                        return <option name={item.name}>{item.name}</option>;
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

                <div class="col">
                </div>
                
              </div>
            </form>
            
           
               
          </div>
        );
      })}
      <button style={{marginLeft:"50%", color:"white",backgroundColor:"black"}} onClick={() => handleAdd()}>+</button>
    </>
  );
}
