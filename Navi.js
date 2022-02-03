import React, {useState,useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Home from './Home';
import Registration from './Registration'
import Write from './Write'
import View from "./View"
import ProtectedRoutes from '../ProtectedRoutes'
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,useHistory
} from "react-router-dom";

function Navi() {
  let history=useHistory()
  //data is fetched
  const [state, setState] = useState([]);
const [newData,setNewData]=useState(false)// to give dependency on data addition or conditional rerendering we create a state to save initial value as false 
  useEffect(() => {
    axios
      .get("http://localhost:9090/api/post/getAllPostData")
      .then((data) => {
        setState(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newData]);

//data is posted
  const[post,setPost]=useState({
    title:"",
    author:"",
    description:""
})
function handleChange(e){
setPost({...post,[e.target.name]:e.target.value})
}
console.log(post)

function handlePost(e){
e.preventDefault()
axios.post("http://localhost:9090/api/post/postData",post).then(data=>{
  setNewData(!newData)
 
}).catch((error)=>{
    console.log(error)
})
// console.log("post")

}
 //delete function
 const [deleted,setDeleted]=useState(false)

//  function delData(id){

//   axios.delete(`http://localhost:9090/api/post/deleteById/${id}`).then(data=>{
//   setDeleted(!deleted)
  
//   }
//   ).catch(error=>{
//     console.log(error)
//   })
//   }
  


//logout function

 function signOut(){
  // localStorage.removeItem('token')
  history.push("/")
  }

    return (
      <Router>
        <div style={{backgroundColor:"greenyellow"}}>
         
          <Navbar bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#" ><h1>Blog</h1><span>React&Node</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/registration"}>Sign-Up</Nav.Link>
        {/* <Nav.Link as={Link} to={"/write"}>Post</Nav.Link>
        <Nav.Link as={Link} to={"/view"}>View</Nav.Link> */}
        
      
      </Nav>
     
        <Button type="button" variant="outline-success" onClick={signOut}>Logout</Button>
      
    </Navbar.Collapse>
  </Container>
</Navbar> 
        </div>
        <div  >

        <Switch>
          <Route path="/registration" exact>
            <Registration />
          </Route>
          <Route path="/write" exact>
        
            <Write  handlePost={handlePost} handleChange={handleChange} />
          
          </Route>
          <Route path="/view" exact>
            <View state={state} deleted={deleted} setDeleted={setDeleted}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
        </Router>
    )
}

export default Navi
