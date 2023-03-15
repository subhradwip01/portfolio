import {  Grid, Typography, Box,Link } from "@mui/material";
import React,{useState,useEffect} from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { urlFor, client,getUrlFromId } from "../client";


const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems:"center"
}));
const About = () => {
  const [about,setAbout]=useState(null)

  useEffect(()=>{
    const query = '*[_type=="about"]';
    client.fetch(query).then(data=>{
   
      setAbout(data[0])
   
    })
  },[])

  console.log(about)
  return (
    <div id="About">
      <motion.div
          whileInView={{ y:[100,0],opacity: [0,1] }}
          transition={{ duration: 0.5 }}>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={700}
        marginTop={10}
      >
        About
      </Typography>
      {about && <Grid
        container
        justifyContent="center"
        
        alignItems="center"
        
    
      >
        <Grid item xs={12} md={5} textAlign="center">
          <img
            src={urlFor(about.profilePic)}
            alt="profile"
            srcset=""
            style={{ width: "300px" ,borderRadius:25 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          alignItems="flex-start"
          justifyContent="center"
          display="flex"
          flexDirection="column"
          paddingRight={3}
          paddingLeft={3}
        >
          <Typography variant="p" component="div" marginBottom={2}>
          {about?.description}
          </Typography>
          
          <Actions>
          <motion.div whileInView={{scale:[0,1],opacity:[0,1]}}
        transition={{duration:0.5}}>
            <Link sx={{
              display: "flex",
              justifyContent:"center",
              alignItems:"center",
              background: theme=>theme.palette.secondary.main,
              textDecoration:"none",
              padding:1,
              borderRadius:1,
              fontWeight:700,
              fontSize:12
            }}
            href={getUrlFromId(about.resumeLink.asset._ref)}
            target="_blank">
              DOWNLOAD CV
            </Link>
            </motion.div>
            <motion.div whileInView={{scale:[0,1],opacity:[0,1]}}
        transition={{duration:0.6}}>
            <Link href={about.socialHandle[0].url} target='_blank'>
              <GitHubIcon sx={{
                  color: (theme) => theme.palette.grey.main,
                  
                }}/>
            </Link>
            </motion.div>
            <motion.div whileInView={{scale:[0,1],opacity:[0,1]}}
        transition={{duration:0.7}}>
            
            <Link href={about.socialHandle[1].url} target='_blank'>
              <LinkedInIcon sx={{
                  color: (theme) => theme.palette.grey.main,
                  
                }}/>
            </Link>
            </motion.div>
          </Actions>
          
        </Grid>
      </Grid>}
      </motion.div>
    </div>
  );
};

export default About;
