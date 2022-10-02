import React from 'react'
import Box from '@material-ui/core/Box'
import {FaHtml5,FaSass,} from 'react-icons/fa'
import {SiJavascript,SiCss3,SiReact,SiRedux,SiBootstrap,SiMaterialui,SiGit } from 'react-icons/si'

import {makeStyles} from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
const useStyles=makeStyles((theme)=>({
    wrapper:{
        width:'100px',
        height:'100px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin:'2rem auto',

    },
    icon:{
        width:'50px',
        height:'50px',
        fontSize:'2rem'
        // flexDirection:'row'
      },
}))


const SkillsCard = (props) => {
  const styles=useStyles();

    const getIcon=(skillName)=>{
        switch(skillName){
            case 'HTML' :
                return <FaHtml5 className={styles.icon}/>
            case 'CSS':
                return <SiCss3 className={styles.icon}/>
            case 'JavaScript':
                return <SiJavascript className={styles.icon}/>
            case 'SASS':
                return <FaSass className={styles.icon}/>
            case 'React JS':
                return <SiReact className={styles.icon}/>
            case 'Redux':
                return <SiRedux className={styles.icon}/>
            case 'Bootstrap':
                return <SiBootstrap className={styles.icon}/>
            case 'Material UI':
                return <SiMaterialui className={styles.icon}/>
            case 'GIT':
                return <SiGit className={styles.icon}/>
            default:
                return <FaHtml5 className={styles.icon}/>
        }
    }
  return (
    
    <div className={styles.wrapper}>
        <div className={styles.icon}>

        {getIcon(props.data)}
        </div>
        <h5>{props.data}</h5>
    </div>
  
  )
}

export default SkillsCard