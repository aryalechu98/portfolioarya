import React from 'react'
import  GitHubIcon  from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton' 
import Link from '@material-ui/core/Link'
const socialItems=[
    {icon:GitHubIcon, url:'https://github.com/aryalechu98'},
    {icon:TwitterIcon, url:'#'},
    {icon:LinkedInIcon,url:'https://www.linkedin.com/in/arya-v-l-frontend-developer/'}
]
const Social = ({direction}) => {
  return (
    <Grid container direction={direction || 'row'} spacing={1}>
       {socialItems.map((item)=>(
        <Grid item>
            <Link href={item.url}>
            <IconButton>
                <item.icon style={{color:'#4B1B1B'}}/>
            </IconButton>
            </Link>
        </Grid>
       ))}
    </Grid>
  )
}

export default Social