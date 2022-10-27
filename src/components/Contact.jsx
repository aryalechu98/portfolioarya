import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import {makeStyles} from '@material-ui/core/styles';
import { useRef } from 'react'

import Box from '@mui/material/Box'
import Typograpghy from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import {useSelector} from 'react-redux'



const useStyles=makeStyles({
section:{
background:'#fff'
},
darkMode:{
  background:'#219ebc'
}
})
const Contact = () => {
  const styles=useStyles();
  const isDark=useSelector(state=>state.toggle.isDark)
  const form = useRef();
  const [done,setDone]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t360uh9', 'template_lcdkb3n', form.current, 'uxt1DqS9s0rGwAFFG')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div id="contact" style={{padding:'5rem'}}  className={isDark ? styles.darkMode: styles.section}>
        <form action="" ref={form} onSubmit={sendEmail}>
        <Box 
       
       display={'flex'} flexDirection='column' 
       justifyContent={'center'}
       alignItems='center'
       margin='auto'
       marginTop={'5rem'}
       padding={3}
       borderRadius={5}
       maxWidth={400}
       boxShadow={'3px 3px 5px #ccc'}
       sx={{
        color:'#4B1B1B',
        background:'#fff',
        ':hover':{
           boxShadow:'5px 5px 8px #ccc'

       }}}
       >
           <Typograpghy
            variant='h3' 
            padding={3} 
            textAlign={'center'}
            sx={{color:'#023047'}}
            >
           Get In Touch 
           </Typograpghy>
        <TextField
         name='name'
         
         margin='normal' type={'text'} variant='outlined' placeholder='Name' /> 
           <TextField margin='normal'
           name='email'
           type={'email'} variant='outlined' placeholder='Email'/>
          
        <TextField
          type={'textArea'} 
          variant='outlined'
          placeholder='Message'
          margin='normal'
        />
           
               <Button
               
               type='submit'
               variant='contained' sx={{
                   background:'#023047',
                   transition:'all 0.5s ease',
                   borderRadius:3,
                   marginTop:'1rem',
                   fontWeight:'bold',
                   display:'flex',
                   justifyContent:'space-between',
                   letterSpacing:'3px',
                   alignItems:'center',
                   fontSize:'0.85rem',
                   gap:'0.5rem',
                   textDecoration:'none',
                   color:'white',
                       
                   ':hover':{
                       background:'white',
                       color:'#023047',
                       transform:'scale(1.03)'
                   }
               }}>Send
               <SendIcon/>
               </Button>
              
           

       </Box>
        </form>
        </div>
  )
}

export default Contact