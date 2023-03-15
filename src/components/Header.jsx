import { Avatar, Grid, Typography, Box } from "@mui/material";
import React from "react";
import header from "../assets/header.png";
import { theme } from "../theme";
import js from "../assets/js.webp";
import mongo from "../assets/mongo.webp";
import react from "../assets/react.webp";
import vscode from "../assets/vscode.png";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import ComputersCanvas from "./Models/Computers";


const Dot = styled("div")(({ theme }) => ({
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  backgroundColor: "#313bac",
}));
const Line = styled("div")(({ mobileView, theme }) => ({
  width: "4px",
  height: mobileView ? "250px" : "350px",
  bbackground: "#804dee",
  background: "linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%)",
  background: ` -webkit-linear-gradient(
    -90deg,
    #804dee 0%,
    rgba(60, 51, 80, 0) 100%
  )`,
}));

const scaleVariants = {
  whileInView: {
    x: [-50, 0],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = ({ mobileView }) => {
  return (
    <div id="#Home" style={{ marginTop: "70px" }}>
      <Grid
        container
        sx={{
          padding: mobileView ? theme.spacing(1) : theme.spacing(8),
          justifyContent: "space-around",
          marginTop: theme.spacing(5),
          alignItems: "center",
        }}
      >
          <Grid
            item
            md={6}
            xs={12}
            sm={12}
            alignItems="flex-start"
            justifyContent="center"
            display="flex"
            flexDirection="column"
            paddingLeft={2}
            position="relative"
            paddingTop={mobileView ? "2rem" : 0}
          >
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
            <Box display="flex" flex="row" alignItems="flex-start" gap="20px">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Dot />
                <Line mobileView={mobileView}/>
              </div>

              <div>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 2,
                  }}
                >
                  Hi,
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 2,
                    fontSize: {
                      md: "7rem",
                      xs: "2.8rem",
                    },
                  }}
                >
                  This is <span style={{ color: "#313bac" }}>Subhradwip</span>
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    marginRight: "20px",
                    color: (theme) => theme.palette.grey.dark,
                    strokeWidth: "1px",
                    strokeColor: (theme) => theme.palette.secondary.main,
                    width:{
                      md:"40%",
                      xs:"100%"
                    },
                    fontWeight:"bold",
                    fontSize:{
                      md:"20px",
                      sm:"15px"
                    }
                  }}
                >
                  MERN STACK | BLOCKCHAIN | OPEN SOURCE
                </Typography>
                <motion.div
                  variants={scaleVariants}
                  whileInView={scaleVariants.whileInView}
                >
                  <Box display="flex" justifyContent="flex-start" marginTop={2}>
                    <Avatar src={js} sx={{ marginRight: 3 }} />
                    <Avatar src={mongo} sx={{ marginRight: 3 }} />
                    <Avatar src={react} sx={{ marginRight: 3 }} />
                    <Avatar src={vscode} sx={{ marginRight: 3 }} />
                  </Box>
                </motion.div>
              </div>
            </Box>
        </motion.div>
          </Grid>
          <Grid
            item
            md={5}
            xs={12}
            sm={12}
            sx={{
              display:"felx",
              alignItems:"center",
              justifyContent:"center",
              height: mobileView? "35vh" : "40vh",
            }}
          >
            <ComputersCanvas/>
          </Grid>
      </Grid>
    </div>
  );
};

export default Header;
