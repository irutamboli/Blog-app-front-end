import React,{useState} from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



 


  
 


function Home() {

  let history = useHistory()

  const [state,setState]=useState({
    username:"",
    password:"" 
    })

    function handleChange(e){
      setState({...state,[e.target.name]:e.target.value})
    }


    function handleClick(username,password){
      if(username==="" && password===""){axios.post("http://localhost:9090/api/auth/login",state).then((res)=>{

        localStorage.setItem('token', res.data.token);
        history.push('/view');
        }).catch((error)=>{
          console.log(error)
        })}else{
          console.log(`missing user name password`)
        }
       
       
    
    }

   


  return (
    <Box sx={{ width: 200, maxWidth: 400 , margin:29 ,backgroundColor:"white",textAlign:"center"}}>
    <Typography variant="h5" component="div" gutterBottom>
    LOGIN
    </Typography>
    
    

        
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 10, width: '35ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
          <TextField
      id="outlined-multiline-static"
      label="Username"
      color="secondary" 
      multiline
      name="username"
     
      onChange={handleChange}
    />
            <br/>
            <TextField
      id="outlined-multiline-static"
      label="password"
      color="secondary" 
      multiline
      name="password"
      type="password"

     
      onChange={handleChange}
    />



            {/* <TextField
            
              id="outlined-multiline-static"
              label="Password"
              name="password"
              type="password"
              color="secondary"
              onChange={handleChange}


          
            /> */}
<Button variant="contained" size="medium" onClick={handleClick}>
      Login
    </Button>
          </div>
        
      
        </Box>
       
        </Box>

     
        
      );
}
  





   
        
      


    
    
export default Home
