import { Avatar, Grid, Typography, Box } from "@mui/material";
import React from "react";
import header from "../assets/header.png";
import { theme } from "../theme";
import js from "../assets/js.webp";
import mongo from "../assets/mongo.webp";
import react from "../assets/react.webp";
import vscode from "../assets/vscode.png";
import { motion } from "framer-motion";
const scaleVariants = {
  whileInView: {
    x: [-50, 0],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const Header = () => {
  return (
    <div id="#Home" style={{ marginTop: "70px" }}>
      
      <Grid
        container
        sx={{
          padding: theme.spacing(7),
          justifyContent: "space-around",
          marginTop: theme.spacing(5),
          alignItems: "center",
        }}
      >
        <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5}}
      >
        <Grid
          item
          md={6}
          xs={12}
          alignItems="flex-start"
          justifyContent="center"
          display="flex"
          flexDirection="column"
        >
          <div>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              Hi 👋
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              This is Subhradwip
            </Typography>
            <Typography variant="h6">
              <div style={{ marginRight: "20px" }}>Web Developer </div>
              <div> Open Source Contributor </div>
            </Typography>
            <motion.div variants={scaleVariants}
      whileInView={scaleVariants.whileInView}>
            <Box display="flex" justifyContent="flex-start" marginTop={4}>
              <Avatar src={js} sx={{ marginRight: 3 }} />
              <Avatar src={mongo} sx={{ marginRight: 3 }} />
              <Avatar src={react} sx={{ marginRight: 3 }} />
              <Avatar src={vscode} sx={{ marginRight: 3 }} />
            </Box>
            </motion.div>
          </div>
        </Grid>
        </motion.div>
        <motion.div
        whileInView={{opacity:[0,1],scale:[0,1]}}
        transition={{duration:1}}
      >

        <Grid
          item
          md={5}
          xs={12}
          sx={{
            textAlign: "center",
          }}
        >
          <img
            src={header}
            style={{
              width: "450px",
            }}
            alt="logo"
          />
        </Grid>
        </motion.div>
      </Grid>
      
    </div>
  );
};

export default Header;
