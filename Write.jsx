import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button'


export default function Write({handlePost,handleChange}) {
//     const[post,setPost]=useState({
//         title:"",
//         author:"",
//         description:""
//     })
//  function handleChange(e){
//     setPost({...post,[e.target.name]:e.target.value})
//  }
//  console.log(post)

//  function handleClick(e){
//     e.preventDefault()
//     axios.post("http://localhost:9090/api/post/postData",post).then(data=>{
//         console.log("post added")
//     }).catch((error)=>{
//         console.log(error)
//     })
//     // console.log("post")

//  }

  return (
    <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 6, width: '90ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
        <TextField
          id="outlined-multiline-static"
          label="Title"
          color="secondary" 
          multiline
          name="title"
         
          onChange={handleChange}

       
         
        />
        <TextField
          id="outlined-multiline-static"
          label="Author"
          multiline
          color="secondary"
          name="author"
      

          onChange={handleChange}

         
        />
       
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          name="description"
         

          rows={5}
          onChange={handleChange}
          color="secondary"
        />
     

      
     
    
    </Box>
    <Button py="sm"  variant="outline-success" size="medium" onClick={handlePost}>Post</Button>
    </div>
    
  );
}
