import {  Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import { SKILLS } from "../data";

const Skills = () => {
  return (
    <div id="#Skills">
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
        {SKILLS.map(skill=>(
          <Grid item>
            <Tooltip title={skill.name}>
            <img src={skill.img} alt="logo" style={{width:"100px"}}/>
            </Tooltip>
          </Grid>
          
        ))}

      </Grid>
    </div>
  );
};

export default Skills;
