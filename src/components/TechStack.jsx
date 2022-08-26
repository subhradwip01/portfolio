import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { styled } from "@mui/material/styles"
import { motion } from 'framer-motion';
import { urlFor, client } from "../client";

const TechCard=styled(Card)(({theme})=>({
    maxWidth:250,
    borderRadius:theme.spacing(3),
}))

const TechStack = () => {
  const [techStack,setTechStack]=useState(null)
  useEffect(()=>{
    const query = '*[_type=="techStack"]';
    client.fetch(query).then(data=>{
      console.log(data)
      setTechStack(data)
    })
  },[])
  
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

        {techStack?.map((stack,index)=>(
                
           <Grid item>
            <motion.div whileInView={{ scale:[0,1],opacity: [0,1] }}
          transition={{ duration: 0.3 + index/5 }}>
            <TechCard sx={{background:"transparent"}}>
            <CardMedia
              component="img"
              alt="green iguana"
              width="100"
              image={urlFor(stack.img)}
              sx={{
                padding:"20px 20px 0 20px"
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" fontWeight={700} component="div" textAlign="center">
                {stack.name}
              </Typography>
              <Typography gutterBottom variant="p" fontWeight={400} color="grey.main" component="div" textAlign="center">
                {stack.description}
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