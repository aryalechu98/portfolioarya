import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import {useSelector} from 'react-redux'
import Hidden from '@material-ui/core/Hidden'
import TagContainer from './TagContainer'
import { style } from '@mui/system'


const useStyles = makeStyles((theme) => ({
    cardMedia: {
      width: 380,
      height:'auto',
      objectFit:'cover'

    },
    card: {
      display: "flex",
      padding:'2rem 0',
      color:'#219ebc',

      
    },
    darkMode:{
        display: "flex",
      padding:'2rem 0',
      color:'#023047',

    },
    links: {
      marginRight: "auto",
      cursor:'pointer',
    },
    tag: {
      marginRight: 5,
      marginBottom: 5,
    },
    white:{
      color:'#023047'
    },
    dark:{
      color:'#219ebc'

    }
  }));
  
  
    
  function ProjectCard({ title, description, imageUrl, tags, links }) {
    const styles = useStyles();
  const isDark=useSelector(state=>state.toggle.isDark)

    return (
      <Grid item>
        <Card className={isDark?styles.darkMode:styles.card}>
          <div>
            <CardContent>
              <Typography variant="h5" 
              style={{fontWeight:'bold',fontSize:'1.5rem'}}
              paragraph>
                {title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {description}
              </Typography>
              <Hidden mdUp>
                <TagContainer tags={tags}/>
              </Hidden>
            </CardContent>
            <CardActions>
              <div className={styles.links}>
                {links.map((linkItem) => (
                  <IconButton className={isDark?styles.white:styles.dark} href={linkItem.href} key={linkItem.href}>
                    <linkItem.icon />
                  </IconButton>
                ))}
              </div>
              <Hidden smDown>
                <TagContainer tags={tags} />
              </Hidden>
            </CardActions>
          </div>
          <Hidden xsDown>
            <CardMedia className={styles.cardMedia} image={imageUrl}></CardMedia>
          </Hidden>
        </Card>
      </Grid>
    );
  }

export default ProjectCard