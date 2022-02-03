import React, {useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import axios from "axios"
import Edit from './Edit'
function View({state}) {
  const [show, setShow] = useState(false);
  const[eleData,setEleData]=useState()// creating new state to send data to modal to update
  const[deleted,setDeleted]=useState(false)

  const handleClose = () => setShow(false);
  const handleShow = (ele) =>{
    setEleData(ele);// saving data in a state so can be sent as prop to edit section
    setShow(true);

  } 
  
 
    function delData(id){

      axios.delete(`http://localhost:9090/api/post/delete/${id}`).then(data=>{
      setDeleted(true)
      
      }
      ).catch(error=>{
        console.log(error)
      })
      }
      
      // useEffect(()=>{

      // },[deleted])





    return (
        <div>
            
     
               

          
            <Card >
   {state.map((ele)=>(
    <Card.Body>
    <Card.Title><h2>{ele.title}</h2></Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><h6>{ele.author}</h6></Card.Subtitle>
    <Card.Text>
    {ele.description}
    </Card.Text>
    <Card.Footer>
      <small className="text-muted">{ele.createdOn}</small>
    </Card.Footer>
    <Button variant="primary" style={{marginRight:"10px"}} onClick={()=>handleShow(ele)}>Update</Button>
   
    <Button variant="danger" value="Delete"  onClick={()=>delData(ele._id)}>Delete</Button>
  </Card.Body>
 
   ))}

</Card>

<Edit  handleClose={handleClose} handleShow={handleShow} show={show} eleData={eleData}/>

        </div>
    )
}

export default View
