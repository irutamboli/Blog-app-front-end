import  React,{ useState} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import axios from "axios"


const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important" // override inline-style
  }
});

export default function Registration() {
  const [reg,setReg]= useState({

    username:"",
    password:"",
    name:"",
    email:""

  })

  const [errMsg, setErrMsg] = useState('');

function handleChange(e){
   
  setReg({...reg,[e.target.name]:e.target.value})
}
    
console.log(reg)


function register(){
  
  axios.post("http://localhost:9090/api/auth/signup",reg).then((res)=>{

    alert(res.data.message) 
    

  }).catch(error=>{
    console.log(error)
  })
  
}

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        margin: 27,
        backgroundColor: "#ede7f6",
        textAlign: "center"
      }}
    >
      <Typography variant="h4" component="div" gutterBottom>
       Registration
      </Typography>

      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "2fr 2fr" },
          gap: 4,
          width: '80ch',
          marginLeft:"75px"
        }}
      >
        <ValidationTextField
          label="Username"
          required
          name='username'
          variant="outlined"
          onChange={handleChange}
    
          id="validation-outlined-input"
        />
           <br />
        <ValidationTextField
          label="Password"
          required
          name="password"
          variant="outlined"
          onChange={handleChange}
       
          id="validation-outlined-input"
        />
        <br />

        <ValidationTextField
          label="Fullname"
          required
          name="name"
          variant="outlined"          
          onChange={handleChange}
        
          id="validation-outlined-input"
        />
        <br />

        <ValidationTextField
          label="E-mail id"
          required
          onChange={handleChange}
          variant="outlined"
          name="email"
        
          id="validation-outlined-input"
        />
        <br />
        <Button variant="contained" size="medium" onClick={register}>
          Sign-Up        </Button>

      
      </Box>
    </Box>
  );
}
