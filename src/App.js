
import { BrowserRouter, Routes, Route,Navigate, Redirect } from "react-router-dom";




import Home from './components/home/home'
import Partners from './components/partners/partners'
import Delete from "./components/Department/delete";
import OurTeam from "./components/team/ourteam";
import Teamedit from "./components/team/teamedit";
import Blogs from "./components/blogs/blogs";
import EditBlogs from "./components/blogs/blogsedit";
import Feedback from "./components/feedback/feedbackadd";
import Editfeedback from "./components/feedback/feedbackedit";
import Projects from "./components/project/projectadd";
import Editprojects from "./components/project/projectedit";
import Software from "./components/home/software";
import Department from "./components/Department/adddepartment";
import Buynow from "./components/buynow/buynow";
import Buynowedit from "./components/buynow/buynowedit";
import Addpackage from "./components/package/addpackage";
import SignIn from "./components/home/signin";
import Editpackage from "./components/package/editpack";
import DeleteTeam from "./components/team/deleteteam";
import AddRole from "./components/role/addrole";
import DeleteService from "./components/buynow/deleteservice";
import DeleteRole from "./components/role/deleterole";
import DeletePartner from "./components/partners/delete_partner";
import DeleteBlog from "./components/blogs/deleteblog";
import DeleteFeedback from "./components/feedback/deletefeedback";
import DeleteProject from "./components/project/deleteprojects";
import DeletePackage from "./components/package/delete";

import {useNavigate } from "react-router-dom";

function App() {
  const token=  window.localStorage.getItem(1);
 

 return (
  
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={(token!="") ? <Navigate replace to={"/home"}/> :<SignIn/>}/>
      {/* <Route exact path="/" element={<SignIn/>}/> */}
        <Route exact path="/home" element={(token!="") ? <Home /> :<Navigate replace to={"/"}/>  } />
        <Route exact path="/softwaredevelopment" element={(token!="") ?<Software /> : <Navigate replace to={"/"} />}/>
        
        <Route exact path="/addpartner" element={(token!="")? <Partners /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/deletepartner"element={(token!="")? <DeletePartner /> : <Navigate replace to={"/"} />}/>


        <Route exact path="/addrole" element={(token!="")? <AddRole /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/deleterole" element={(token!="")? <DeleteRole /> : <Navigate replace to={"/"} />}/>
       
        <Route exact path="/addemployee" element={(token!="")? <OurTeam /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/editemployee" element={(token!="")? <Teamedit /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/deleteEmployee" element={(token!="")? <DeleteTeam /> : <Navigate replace to={"/"} />}/>
       
        <Route exact path="/addblog" element={(token!="")? <Blogs /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/editblog" element={(token!="")? <EditBlogs /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/deleteblog" element={(token!="")? <Delete /> : <Navigate replace to={"/"} />}/>

        <Route exact path="/addfeedback" element={(token!="")? <Feedback /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/editfeedback" element={(token!="")? <Editfeedback /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/deletefeedback" element={(token!="")? <DeleteFeedback /> : <Navigate replace to={"/"} />}/>


        <Route exact path="/addproject" element={(token!="")? <Projects /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/editproject" element={(token!="")? <Editprojects /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/deleteproject" element={(token!="")? <DeleteProject /> : <Navigate replace to={"/"} />}/>


        <Route exact path="/adddepartment" element={(token!="")? <Department /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/deletedepartment" element={(token!="")? <Delete /> : <Navigate replace to={"/"} />}/>

        <Route exact path="/buynowadd" element={(token!="")? <Buynow /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/buynowedit" element={(token!="")? <Buynowedit /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/deleteService" element={(token!="")? <DeleteService /> : <Navigate replace to={"/"} />}/>

        <Route exact path="/addpackage" element={(token!="")? <Addpackage /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/editpackage" element={(token!="")? <Editpackage /> : <Navigate replace to={"/"} />}/>
        <Route exact path="/deletepackage" element={(token!="")? <DeletePackage /> : <Navigate replace to={"/"} />}/>
    
      </Routes>
    </BrowserRouter>

  );
}

export default App;
