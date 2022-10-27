import React from 'react'
import Container  from '@material-ui/core/Container'
import projectsData from '../Projectdata'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProjectCard from '../Project/ProjectCard'
import {useSelector} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles=makeStyles((theme)=>({
section:{
  // // marginTop:'5rem',
  // // marginBottom:'10rem',
  // width:'100%',
  padding:'5rem 2rem',
  color:'#fff',
  
  background:'#219ebc',
},
darkMode:{
  // marginTop:'5rem',
  // marginBottom:'10rem',
  color:'#fff',
  background:'#023047',
  paddingTop:'5rem',
  paddingBottom:'5rem',

},

}))

const Project = () => {
  const styles=useStyles();
  const isDark=useSelector(state=>state.toggle.isDark)

  return (
    <Paper className={isDark?styles.darkMode:styles.section}>
    <Container maxWidth='md' id="projects" >
        <Box pt={8} mb={2}  style={{padding:'2rem',}} >

            <Typography
           
            variant='h3'>Projects</Typography>
        </Box>
        <Grid container direction='column' spacing={6}  className={isDark? styles.boxdarkMode:''}>
        {projectsData.map((data)=>(
            <ProjectCard {...data}/>
        ))}
        </Grid>
    </Container>
    </Paper>
  )
}

export default Project