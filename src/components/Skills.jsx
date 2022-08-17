import {  Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import mongo from "../assets/mongodb.png";
import git from "../assets/git.png";
import react from "../assets/react.webp";
import node from "../assets/node.png";
import js from "../assets/js.webp";
import firebase from "../assets/firebase.png";
import solidity from "../assets/solidty.png";
import express from "../assets/express.png";

const Skills = () => {
  const skills = [
    {
      name: "React",
      img: react,
    },
    {
      name: "JavaScript",
      img: js,
    },
    {
      name: "Node",
      img: node,
    },
    {
      name: "MongoDB",
      img: mongo,
    },
    {
      name: "ExpressJs",
      img: express,
    },
    {
      name: "Firebase",
      img: firebase,
    },
    {
      name: "Solidity",
      img: solidity,
    },
    {
      name: "Git and Github",
      img: git,
    },
  ];
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
        {skills.map(skill=>(
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
