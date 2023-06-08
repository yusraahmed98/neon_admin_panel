//5alsana
import Navbar from "../navbar/navbar";
import Sidebar from '../navbar/sidebar'
import React, {useState} from "react";
import { useMediaQuery } from 'react-responsive'
import axios from 'axios';
import { Form} from "react-bootstrap";

function Partners() {
  const [Name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [url, setUrl] = useState("");



const handleChange = (event) => {
  setName(event.target.value);
  setMsg('')
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


const handleClick = (img) => {
  console.log(url)
  console.log(Name)
  axios
  .post("https://neon-9o9l.onrender.com/partners/add", {
    name: Name,
    img: url
  })
  .then(function (response) {
    console.log(response);
    setMsg("Partner added Successfully!");
  })
  .catch(function (error) {
    console.log(error);
    setMsg("Failed to add Partner!");

  });
};


  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })





  return (
    <div  className="image1" style={{ backgroundColor: "black" }}>
      <div style={{ float: "left" }}>
       <Sidebar />
      </div>

      <div style={{ overflow: "hidden" }}>
        <div
          style={{ paddingTop: "10%", paddingBottom: "18%"}}
        >
          <div
            style={{
              backgroundColor: "#f0f0f0",
              height:"50%",
              paddingBottom: "7%",
             width:"70%",
              border: "1px solid",
              marginLeft:"10%"
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
                paddingTop:"5%"
              }}
            >
             Add a new Partner
            </h4>
            <div class="custom-file">
              <h4
                style={{
                  color: "black",
                  fontFamily: "Yanone Kaffeesatz",
                  marginLeft: "30%",
                  fontSize: "19px",
                  paddingTop: "3%",
                  paddingBottom: "1%",
                }}
              >
                Upload Picture:
              </h4>
              <Form.Control
                style={{width:"70%", marginLeft:"15%"}}
                placeholder="Upload Picture"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => {
                  console.log("here")
                  handleUpload(e.target.files[0]);
                  console.log(e.target.files[0]);
                }}
              />
             
                <div class="col" style={{paddingTop:"5%"}}>
                        <input
                          style={{
                            width: "50%",
                            marginLeft: "25%",
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
                     
                      
              <button
                style={{ marginLeft: "45%", marginTop: "5%" }}
                class="button-45"
                role="button"
                onClick={handleClick}
              >
                ADD
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
}
export default Partners;
