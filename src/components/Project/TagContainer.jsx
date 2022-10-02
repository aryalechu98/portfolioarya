import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
const useStyles=makeStyles((theme)=>({
    tag:{
        marginRight: 5,
        marginBottom: 5,
        
    }
}))
const TagContainer = ({tags}) => {
    const styles = useStyles();
    return (
      <div>
        {tags.map((tag) => (
          <Chip
            className={styles.tag}
            label={tag}
            variant="outlined"
            key={tag}
            style={{cursor:'pointer',
            background:'#D99255',
            border:'none',
            textDecoration:'none',
            color:'white',
            fontWeight:'bold',
           }}
          ></Chip>
        ))}
      </div>
    );
    
}

export default TagContainer