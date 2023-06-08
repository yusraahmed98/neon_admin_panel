
import Sidebar from "../navbar/sidebar"
import React, { useState, useEffect } from "react";
import axios from "axios";

function Addpackage()  {
  const [showComponent, setComponent] = useState(false);
  const [showservice, setservice] = useState(false);
  const [msg, setMsg] = useState(false);
  const [valfree, setvalfree] = useState([]);
  const [val, setVal] = useState([]);
  const [id, setid] = useState([]);
  const [post, setPost] = useState([]);
  const [result, setresult] = useState([]);
  const [Title, setTitle] = useState("");
  const [TitleA, setTitleA] = useState("");
  const [Price, setPrice] = useState("");
  const [input, setinput] = useState([]);

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
    setPrice("")
    setMsg('')
  };
  const show = (event) => {
    setservice(true)
  };
 
  
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
    console.log(inputdata);
    
const inputdataa = [];
val.map((i) => {
  post.map((item) => {
   
  if(i===item.name){
    inputdataa.push(item._id);
  }

})
})

setid(inputdataa);
  };
  const handleChangef = (onChangeValue, i) => {
    const inputdata = [...valfree];
    inputdata[i] = onChangeValue.target.checked;
    setvalfree(inputdata);

    console.log(inputdata);
    
const inputdataa = [];
val.map((i) => {
  post.map((item) => {
   
  if(i===item.name){
    inputdataa.push(item._id);
  }

})
})

setid(inputdataa);
  };

  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);

    const deleteValfree = [...valfree];
    deleteValfree.splice(i, 1);
    setvalfree(deleteValfree);

    
const inputdata = [];
val.map((i) => {
  post.map((item) => {
   
  if(i===item.name){
    inputdata.push(item._id);
  }

})
})

setid(inputdata);
  };

  useEffect(() => {
    axios
      .get("https://neon-9o9l.onrender.com/admin/allService")
      .then((response) => {
        const myRes = response.data;
        setPost(response.data.service);
      });
      
const inputdata = [];
val.map((i) => {
  post.map((item) => {
   
  if(i===item.name){
    inputdata.push(item._id);
  }

})
})

setid(inputdata);
  }, []);
 

  const rand = (onChangeValue, i) => {
        
const inputdata = [];
val.map((i) => {
  post.map((item) => {
   
  if(i===item.name){
    inputdata.push(item._id);
  }

})
})

setid(inputdata);
  }

  
  const handleclick=()=>{


const inputdata = [];
val.map((i) => {
  post.map((item) => {
   
  if(i===item.name){
    inputdata.push(item._id);
  }

})
})

setid(inputdata);
setresult([])
for (let i = 0; i < valfree.length; i++) {
result.push({service:id[i],free:valfree[i]})
}

console.log(result)
console.log(Title);
console.log(TitleA);
console.log(Price)

if(Price===""){

}
axios
.post("https://neon-9o9l.onrender.com/Packages/add" ,{
 services:result,
 name:Title,
 nameArabic:TitleA,
price:Price,
  
})
.then(function (response) {
  console.log(response);
  setMsg("Package added Successfully!");
})
.catch(function (error) {
  console.log(error);
  setMsg("Failed to add package!");
});
}



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
                Add a new Package
              </h4>
              <div class="custom-file">
                <form style={{ paddingTop: "3%" }}>
                  <div class="row">
                    <div class="col">
                      <input
                        style={{ width: "100%", marginLeft: "3%" , height:"150%"}}
                        type="text"
                        class="form-control"
                        placeholder="Title"
                        onChange={handleChangeT}
                        value={Title}
                      />
                    </div>
                    <div class="col">
                      <input
                        style={{ width: "100%", height:"150%" }}
                        type="text"
                        class="form-control"
                        placeholder="العنوان"
                        onChange={handleChangeTA}
                        value={TitleA}
                      />
                    </div>
                    <div class="col">
                      <div
                        class="form-check form-switch"
                        style={{ marginTop: "3%", marginLeft: "50%" }}
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          onClick={showComments}
                        />
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckDefault"
                        >
                          Add Price
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
{rand}
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
                ) }

                <h4
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
                >
                 
                
                
                </div>
            
{rand}

               <>
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
                            return (
                              <option name={item.name}>{item.name}</option>
                            );
                          })
                        : null}
                    </select>
                  </div>
                </div>
{rand}
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
{rand}
                <div class="col"></div>
              </div>
            </form>
          </div>
        );
      })}
      <button
        style={{ marginLeft: "50%", color: "white", backgroundColor: "black" }}
        onClick={() => handleAdd()}
      >
        +
      </button>
    </>


{rand}

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
export default Addpackage;
