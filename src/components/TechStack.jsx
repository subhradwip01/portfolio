import React from 'react'
import backend from "../assets/backend.png"
import front from "../assets/Front.png"
import block from "../assets/block.png"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import { styled } from "@mui/material/styles"

const TechCard=styled(Card)(({theme})=>({
    maxWidth:250,
    borderRadius:theme.spacing(3),
}))

const TechStack = () => {
  const techStack=[{
    name:"Backend",
    tech:["MongoDB", "NodeJs", "ExpressJs"],
    img:backend
  },
  {
    name:"Frontend",
    tech:["React"],
    img:front
  },
  {
    name:"Blockchain",
    tech:["Solidity"],
    img:block
  }]
  return (
    <div id="#TechStack">
        <Typography variant="h3"
        textAlign="center"
        fontWeight={700}
        marginBottom={5}
        marginTop={10}>Tech I am <span style={{color:"#313bac"}}>Intrested</span> In</Typography>
        <Grid container spacing={5} justifyContent="center">
        {techStack.map(stack=>(
           <Grid item>
            <TechCard >
            <CardMedia
              component="img"
              alt="green iguana"
              width="100"
              image={stack.img}
              sx={{
                padding:"20px 20px 0 20px"
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" fontWeight={700} component="div" textAlign="center">
                {stack.name}
              </Typography>
            </CardContent>
            {/* <CardActions display="flex">
              {stack.tech.map(tech=>(
                <Chip label={tech} variant="outlined" color="secondary" />
              ))}
            </CardActions> */}
          </TechCard>
          </Grid>
        ))}
        </Grid>
    </div>
  )
}

export default TechStack