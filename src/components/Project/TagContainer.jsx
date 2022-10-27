import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import { useSelector } from 'react-redux'
const useStyles=makeStyles((theme)=>({
    tag:{
        marginRight: 5,
        marginBottom: 5,
        cursor:'pointer',
            border:'none',
            textDecoration:'none',
            color:'white',
            fontWeight:'bold',
      background:'#219ebc',

        
    },
    darkMode:{
      marginRight: 5,
      marginBottom: 5,
      background:'#023047',

      color:'#fff',
    }
}))
const TagContainer = ({tags}) => {
  const isDark=useSelector(state=>state.toggle.isDark)
    const styles = useStyles();
    return (
      <div>
        {tags.map((tag) => (
          <Chip
            className={isDark ? styles.darkMode : styles.tag}
            label={tag}
            variant="outlined"
            key={tag}
            style={{
           }}
          ></Chip>
        ))}
      </div>
    );
    
}

export default TagContainer