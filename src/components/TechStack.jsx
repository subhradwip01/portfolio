import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { styled } from "@mui/material/styles"
import { TECH_STACK } from '../data';
import { motion } from 'framer-motion';

const TechCard=styled(Card)(({theme})=>({
    maxWidth:250,
    borderRadius:theme.spacing(3),
}))

const TechStack = () => {
  
  return (
    <div id="#TechStack">
      <motion.div
          whileInView={{ y:[100,0],opacity: [0,1] }}
          transition={{ duration: 0.5 }}>
        <Typography variant="h3"
        textAlign="center"
        fontWeight={700}
        marginBottom={5}
        marginTop={10}>Tech I am <span style={{color:"#313bac"}}>Intrested</span> In</Typography>
        <Grid container spacing={5} justifyContent="center">

        {TECH_STACK.map((stack,index)=>(
                
           <Grid item>
            <motion.div whileInView={{ scale:[0,1],opacity: [0,1] }}
          transition={{ duration: 0.3 + index/5 }}>
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
          </TechCard>
          </motion.div>
          </Grid>
        ))}
        
        </Grid>
        </motion.div>
    </div>
  )
}

export default TechStack