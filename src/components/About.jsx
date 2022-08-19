import { Button, Grid, IconButton, Typography, Box,Link } from "@mui/material";
import React from "react";
import header from "../assets/header.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material/styles";
import { ABOUT } from "../data";
const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems:"center"
}));
const About = () => {
  return (
    <div id="#About">
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
            <Link href={ABOUT.githubLink}>
              <GitHubIcon sx={{
                  color: (theme) => theme.palette.grey.main,
                  
                }}/>
            </Link>
            <Link href={ABOUT.linkedinLink}>
              <LinkedInIcon sx={{
                  color: (theme) => theme.palette.grey.main,
                  
                }}/>
            </Link>
          </Actions>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
