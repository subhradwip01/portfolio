import {  Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import { SKILLS } from "../data";
import {motion} from "framer-motion"

const Skills = () => {
  return (
    <div id="#Skills">
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
        {SKILLS.map((skill,index)=>(
          <Grid item>
            <motion.div whileInView={{scale:[0,1],opacity:[0,1]}} transition={{duration:0.2 + index/5}}>
            <Tooltip title={skill.name}>
            <img src={skill.img} alt="logo" style={{width:"100px"}}/>
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
