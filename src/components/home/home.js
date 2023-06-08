import {useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
function Home() {
    const navigate = useNavigate();
    const navigateToSoftware = () => {
     
        navigate('/softwaredevelopment');
      };
      const navigateToUiUx = () => {
     
        navigate('/production');
      };

      const isMobileDevice = useMediaQuery({
        query: "(min-device-width: 480px)",
      });
    
      const isTabletDevice = useMediaQuery({
        query: "(min-device-width: 768px)",
      });
    
      const isLaptop = useMediaQuery({
        query: "(min-device-width: 1024px)",
      });
    
      const isDesktop = useMediaQuery({
        query: "(min-device-width: 1200px)",
      });
    
      const isBigScreen = useMediaQuery({
        query: "(min-device-width: 1201px )",
      });

      
  const handleSubmit = (event) => {
    
    window.localStorage.setItem(1,"");
   
       window.location.reload(true);
     



  };


return(
<div className="colo">
 
<button style={{color: "white",
                 backgroundColor:"black",
                   position:"absolute",
                   
                   fontWeight: "bold",
                   transform: "translateX(130%)",
                   borderRadius: "10%",
                 marginLeft:"80%",
                   height:"10%"}}onClick={handleSubmit}>LOG OUT</button>
<div class="eight" style={{paddingTop:"10%"}}>
  <h1>Choose a website to edit</h1>
</div>

<div class="row" style={{paddingTop:"5%", paddingBottom:"20%"}}>
  <div class="column">
  <div class="eight" >
  <h2  style={{textAlign:"center"}}>Software Development</h2>
  </div>
    <img src="assets/img/software.jpg" className="img"  style={{scale:"0.8",width:"100%"}} onClick={navigateToSoftware}/>
  </div>
  <div class="column">
  <div class="eight" >
    <h2  style={{textAlign:"center"}}>Production</h2>
    </div>
    <img src="assets/img/uiux.jpg"  className="img"  style={{width:"100%", scale:"0.79"}} onClick={navigateToUiUx}/>
    <div class="overlay">
 
  </div>
  </div>
  
</div>
</div>
);
}
export default Home;