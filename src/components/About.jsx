import { Button, Grid, IconButton, Typography, Box } from "@mui/material";
import React from "react";
import header from "../assets/header.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material/styles";
const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
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
            I am an aspiring CSE student who enjoys connecting real-life
            problems with programming: be it ideas from different disciplines,
            people from different teams, or applications from different
            industries. If I talk about my technical skill. I know
            JAVA,MERN.Trying to learn Blockchain Development. Every day I
            eagerly learn new technologies. Love to contribute in open source.
            Helping people with my kwoledge.
          </Typography>
          <Actions>
            <Button variant="contained" color="secondary">
              Download CV
            </Button>
            <IconButton>
              <GitHubIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Actions>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
