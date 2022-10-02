import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Social from '../Intro/Social'
import Hidden from '@material-ui/core/Hidden'
import Zoom from '@material-ui/core/Zoom'
import { useState } from 'react'
import { useEffect } from 'react'
import DownloadIcon from '@material-ui/icons/CloudDownloadOutlined'
import {useSelector} from 'react-redux'
import Resume from '../../images/aryaresume.pdf'


const  useStyles = makeStyles((theme)=>({
section:{
   
    height:'90vh',
   position:'relative',
   padding:'2rem ',
   background:'#fff',
   color:'#4B1B1B'

},
darkMode:{
    height:'90vh',
    position:'relative',
    padding:'2rem ',
    background:'#EAD4D2',
    color:'#4B1B1B'
},
content:{
    height:'100%',
    zIndex:'100',
    position:'relative',
},
container:{
    height:'100%',
    
},

subTitle:{
    padding:'20px 0',
},
btn:{
    width:'12rem',
   
  padding:' 0.5rem 2rem',
  borderRadius: '34px',
  fontSize: '16px',
  border: 'none',
  outline:'none',
//   background: 'linear-gradient(to right top, #d47727, #e18e1f, #eaa715, #efc10a, #f0dc0d)',
  boxShadow:'0px 20px 24px 3px rgba(217,146,85,0.42)' ,
  background:'#D99255',
  transition:' all 0.5s ease-out',
  marginBottom:'40px',
 
    // height:' 2rem',
    '&:hover':{
        background: 'white',
        
        color: '#D99255',
        border:' 1px solid #D99255',
    }
},
resume:{
    textDecoration:'none',
 color:'#EAD4D2',
   
    fontWeight:'bold',
    display:'flex',
    justifyContent:'space-between',
    gap:'10px',
    '&:hover':{
        color:'#D99255'
    }
}



}))
const Intro = () => {
    const styles=useStyles()
    const [shouldShow,setShouldShow]=useState(false)
    useEffect(()=>
        setShouldShow(true)
    )
    const isDark=useSelector(state=>state.toggle.isDark)
  return (
    <Paper className={isDark ? styles.darkMode : styles.section} id='home'>
       
       
        <Container className={styles.container} maxWidth='md'>
        <Grid className={styles.content} container alignItems='center' justifyContent='space-between'>
       <Zoom in={shouldShow}>
        <Grid item sm={8}>
        <Typography component='h1' variant='h3'>
            Hi, My name is Arya. I'm a Frontend Developer
        </Typography>
            <Typography variant='h5' className={styles.subTitle}>I build web applications and responsive user interfaces. </Typography>
        <Box my={2}>

        <Button href='mailto:aryalekshmi9813@gmail.com' variant='outlined'  className={styles.btn}>
            <a href={Resume} download='Arya-ReactJS.pdf' className={styles.resume}>Resume <DownloadIcon className={styles.resumeIcon}/></a>
        </Button>
        <Hidden smUp>
        <Grid item >
            <Social direction={'row'}/>
        </Grid>
        </Hidden>
        </Box>
        </Grid>
        </Zoom>
        <Hidden xsDown>
        <Grid item>
            <Social direction={'column'}/>
        </Grid>
        </Hidden>
        </Grid>
        </Container>
    </Paper>
  )
}

export default Intro