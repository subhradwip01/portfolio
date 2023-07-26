import {  Grid, Tooltip, Typography } from "@mui/material";
import React,{useState,useEffect} from "react";
import {motion} from "framer-motion"
import { urlFor, client } from "../client";

const Skills = () => {
  const [skills,setSkills]=useState(null)
  useEffect(()=>{
    const query = '*[_type=="skills"]';
    client.fetch(query).then(data=>{
      setSkills(data)
    })
  },[])
  return (
    <div id="Skills" style={{marginTop:"20px"}}>
      <motion.div whileInView={{y:[100,0],opacity:[0,1]}} transition={{duration:0.3}}>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={700}
        marginBottom={5}
        marginTop={10}
      >
        Skills
      </Typography>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {skills?.map((skill,index)=>(
          <Grid item>
            <motion.div whileInView={{scale:[0,1],opacity:[0,1]}} transition={{duration:0.2 + index/5}}>
            <Tooltip title={skill.name}>
            <img src={urlFor(skill.img)} alt="logo" style={{width:"100px",cursor:"pointer"}}/>
            </Tooltip>
            </motion.div>
          </Grid>
          
        ))}

      </Grid>
      </motion.div>
    </div>
  );
};

export default Skills;
