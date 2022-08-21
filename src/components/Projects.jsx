import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Chip,
  IconButton,
  Pagination,
  Tabs,
  Tab,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { PROJECTS } from "../data";
import { motion } from "framer-motion";

const Projects = () => {
  const NUMBER_OF_PROJECTS_PER_PAGE = 4;
  const [projects, setProjects] = useState(PROJECTS);
  const [value, setValue] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [animation, setAnimation] = useState({ y: 0, opacity: 1 });
  const count = Math.ceil(projects.length / 4);
  const lastIndex = currentPage * NUMBER_OF_PROJECTS_PER_PAGE;
  const firstIndex = lastIndex - NUMBER_OF_PROJECTS_PER_PAGE;

  const currentPageProjects = React.useMemo(
    () => projects.slice(firstIndex, lastIndex),
    [projects, currentPage]
  );
  const handleChange = (_, newValue) => {
    setValue(newValue);
    setAnimation({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimation({ y: 0, opacity: 1 });
      const sorted = [];
      if (newValue === "all") {
        setProjects(PROJECTS);
        return;
      }
      PROJECTS.map((project) => {
        project.type.includes(newValue) && sorted.push(project);
      });
      setProjects(sorted);
    }, 500);
    setCurrentPage(1);
  };

  return (
    <div id="#Projects">
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.4 }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={700}
          marginTop={5}
          marginBottom={5}
        >
          Projects
        </Typography>
        <Box display="flex" container spacing={5} justifyContent="center">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary project label"
          >
            <Tab value="all" label="All" />
            <Tab value="react" label="React" />
            <Tab value="api" label="API" />
            <Tab value="mern" label="MERN" />
            <Tab value="web3" label="Web 3" />
          </Tabs>
        </Box>

        <Grid
          component={motion.div}
          animate={animation}
          transition={{ duration: 0.5 }}
          container
          justifyContent="center"
        >
          {currentPageProjects.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{
                y: [100, 0],
              }}
              transition={{ duration: 0.5 + index / 3, ease: "easeInOut" }}
            >
              <Grid item marginTop={5} marginRight={5}>
                <Card
                  sx={{
                    maxWidth: 300,
                    borderRadius: 3,
                    transition: "all 0.1s linear",
                    cursor: "pointer",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    width="100"
                    image={project.preview}
                    sx={{
                      padding: "20px 20px 0 20px",
                    }}
                  />
                  <CardContent>
                    <Typography variant="h5" fontWeight={700}>
                      {project.name}
                    </Typography>
                    <Typography variant="p" marginTop={5} marginBottom={5}>
                      {project.description}
                    </Typography>
                    <Box display="flex" flexWrap="wrap" marginTop={3}>
                      {project.techStack.map((tech) => (
                        <Chip
                          label={tech}
                          variant="outlined"
                          color="secondary"
                          sx={{ marginRight: 1.2, marginBottom: 1.2 }}
                        />
                      ))}
                    </Box>
                    <Box display="flex" flexWrap="wrap">
                      <IconButton>
                        <a href={project.github}>
                          <GitHubIcon />
                        </a>
                      </IconButton>
                      <IconButton>
                        <a href={project.siteLink}>
                          <LanguageIcon />
                        </a>
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </motion.div>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" marginTop={5}>
          <Pagination
            onChange={(_, number) => {
              setCurrentPage(number);
            }}
            count={count}
            color="secondary"
            page={currentPage}
          />
        </Box>
      </motion.div>
    </div>
  );
};

export default Projects;
