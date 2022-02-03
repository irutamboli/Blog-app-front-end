import axios from 'axios'
import React, {useState,useEffect} from 'react'
import {Modal} from "react-bootstrap"
import {Button} from "react-bootstrap"

function Edit({handleClose,handleShow,show,eleData}) {
 

  const[title,setTitle]=useState()
  console.log(title,"<-----")
  const[author,setAuthor]=useState()
  console.log(author,"<-----")
  const[desc,setDesc]=useState()
  console.log(desc,"<-----")
function thandleChange(e){setTitle(eleData.title = e.target.value)}
function ahandleChange(e){setAuthor(eleData.author = e.target.value)}
function dhandleChange(e){setDesc(eleData.description = e.target.value)}

// const payload = {_id:eleData._id,title:title,author:author,description:desc};



function handleClick(){
const payload = {_id:eleData._id,title:title,author:author,description:desc};
axios.put(`http://localhost:9090/api/post/update-post`,payload).then(data=>{

}).catch(error=>{
  console.log(error)
})

}
useEffect(() => {
}, [handleClick])

  return (
    <div>
       <>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         
          <Modal.Title></Modal.Title>
        </Modal.Header>
 
        
        <Modal.Body><p><input type="text" name="title" value={eleData?eleData.title:""} onChange={thandleChange} ></input></p></Modal.Body>
        <Modal.Body><p><input type="text" name="author" value={eleData?eleData.author:""} onChange={ahandleChange} ></input></p></Modal.Body>
        <Modal.Body><p><input type="text" name="description" value={eleData?eleData.description:""}  onChange={dhandleChange} ></input></p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
         Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Edit



