import Navbar from "../navbar/navbar";
import Sidebar from "../navbar/sidebar";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {useNavigate } from "react-router-dom";

import axios from "axios";
function SignIn() {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
    const navigate = useNavigate();
  
const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1100px)",
  });


  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  
  const handleChange_Name = (event) => {
    setName(event.target.value);
   
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  
  };


  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];


  
  const handleSubmit = (event) => {
    
    /* event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    } */

    axios
    .post("https://neon-9o9l.onrender.com/authAdmin/login" ,{
     email:Name,
     password:Password
      
    })
    .then(function (response) {
      console.log(response);
       window.localStorage.setItem(1, response.data.token);
       window.location.reload(true);
     
    
    })
    .catch(function (error) {
      console.log(error);
      window.localStorage.setItem(1, "");
    
    });



  };

 
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form >
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required 

                    class="form-control"
                    placeholder="Email"
                    onChange={handleChange_Name}
                    value={Name}/>
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required class="form-control"
                    placeholder="Password"
                    onChange={handleChangePassword}
                    value={Password} />
         
        </div>
        <div className="button-container">
          <button type="submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );


  return (
    <div>
      {isTabletOrMobile && (
         <div
         className="image1"
         style={{ backgroundColor: "black", height: "2000px" }}
       >
        
        

<div className="app">
     <div >
       <div className="title">Sign In</div>
       <input
                   style={{
                     width: "97%",
                     marginLeft: "1%",
                     marginTop: "3%",
                     height: "50%",
                   }}
                   type="text"
                   class="form-control"
                   placeholder="Email"
                   onChange={handleChange_Name}
                   value={Name}
                 />
                  <input
                   style={{
                     width: "97%",
                     marginLeft: "1%",
                     marginTop: "3%",
                     height: "50%",
                     
                   }}
                   type="password"
                   class="form-control"
                   placeholder="Password"
                   onChange={handleChangePassword}
                   value={Password}
                 />
                 <button onClick={handleSubmit}style={{color: "white",
                 backgroundColor:"black",
                   position:"absolute",
                   bottom:"20%",
                   fontWeight: "bold",
                   transform: "translateX(130%)",
                   borderRadius: "10%",
                  bottom:"70px",
                   height:"10%"}}>Submit</button>
                   

      
     </div>
   </div>

       </div>
      )}

     
     
     
     
      {isDesktopOrLaptop && (
        <div
          className="image1"
          style={{ backgroundColor: "black", height: "2000px" }}
        >
         
         

<div className="app">
      <div >
        <div className="title">Sign In</div>
        <input
                    style={{
                      width: "97%",
                      marginLeft: "1%",
                      marginTop: "3%",
                      height: "50%",
                    }}
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    onChange={handleChange_Name}
                    value={Name}
                  />
                   <input
                    style={{
                      width: "97%",
                      marginLeft: "1%",
                      marginTop: "3%",
                      height: "50%",
                      
                    }}
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    onChange={handleChangePassword}
                    value={Password}
                  />
                  <button onClick={handleSubmit}style={{color: "white",
                  backgroundColor:"black",
                    position:"absolute",
                    bottom:"20%",
                    fontWeight: "bold",
                    transform: "translateX(130%)",
                    borderRadius: "10%",
                   bottom:"70px",
                    height:"10%"}}>Submit</button>
                    

       
      </div>
    </div>

        </div>
      )}
    </div>
  );
}
export default SignIn;
