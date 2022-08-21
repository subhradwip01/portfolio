import { Button, Grid, IconButton, Typography, Box,Link } from "@mui/material";
import React from "react";
import header from "../assets/header.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material/styles";
import { ABOUT } from "../data";
import { motion } from "framer-motion";
const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems:"center"
}));
const About = () => {
  return (
    <div id="#About">
      <motion.div
            whileInView={{ y:[100,0],opacity: [0,1] }}
            transition={{ duration: 1 }}>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={700}
        marginTop={10}
      >
        About
      </Typography>
      <Grid
        container
        justifyContent="center"
        paddingRight={10}
        paddingLeft={10}
      >
        <Grid item xs={12} md={5} textAlign="center">
          <img
            src={header}
            alt="profile"
            srcset=""
            style={{ width: "300px" }}
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
        >
          <Typography variant="p" component="div" marginBottom={2}>
            {ABOUT.description}
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
            href={ABOUT.resumeLink}>
              DOWNLOAD CV
            </Link>
            </motion.div>
            <motion.div whileInView={{scale:[0,1],opacity:[0,1]}}
        transition={{duration:0.8}}>
            <Link href={ABOUT.githubLink}>
              <GitHubIcon sx={{
                  color: (theme) => theme.palette.grey.main,
                  
                }}/>
            </Link>
            </motion.div>
            <motion.div whileInView={{scale:[0,1],opacity:[0,1]}}
        transition={{duration:1}}>
            
            <Link href={ABOUT.linkedinLink}>
              <LinkedInIcon sx={{
                  color: (theme) => theme.palette.grey.main,
                  
                }}/>
            </Link>
            </motion.div>
          </Actions>
          
        </Grid>
      </Grid>
      </motion.div>
    </div>
  );
};

export default About;
