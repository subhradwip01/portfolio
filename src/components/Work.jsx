import { Typography, Grid, Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";
import LaunchIcon from "@mui/icons-material/Launch";
import { styled } from "@mui/material/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkList=styled('ul')(({ theme }) => ({
  padding:"0px",
  marginLeft:"14px"
}));
const WorkListItem=styled('li')(({ theme }) => ({
    color: theme.palette.grey.dark
}));




const WorkCard = ({ work }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        color: "#1d1836",
        background: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #ffff" }}
      date={work.date}
      iconStyle={{ background: "white" }}
      icon={
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
        >
          <img
            src={urlFor(work.logo)}
            alt={work.company}
            style={{
              width: "60%",
              height: "60%",
              objectFit: "contain",
            }}
          />
        </Box>
      }
    >
      <Box hover sx={{ maxWidth: 600, marginBottom: 2, cursor: "pointer" }}>
        <CardHeader
          avatar={<img src={urlFor(work.logo)} style={{ width: 70 }} />}
          title={
            <Typography variant="h6">
              {work.company}
              <Link
                href={work.link}
                target="_blank"
                color="grey.dark"
                paddingLeft={2}
                fontSize={2}
              >
                <LaunchIcon />
              </Link>
            </Typography>
          }
        />

        <CardContent>
            <>
              <Typography variant="h6">{work.role}</Typography>
              <Typography
                variant="h6"
                fontWeight={700}
                fontSize={12}
                color="grey.main"
              >
                {work.startDate} -{" "}
                {work.endDate ? work.endDate : "Present"}
              </Typography>
              <WorkList>
        {work.workDone.map((point, index) => (
          <WorkListItem
            key={`experience-point-${index}`}
          >
            {point}
          </WorkListItem>
        ))}
      </WorkList>
            </>
          
        </CardContent>
      </Box>
    </VerticalTimelineElement>
  );
};

const Work = () => {
  const [works, setWorks] = useState(null);
  useEffect(() => {
    const query = '*[_type=="works"]';
    client.fetch(query).then((data) => {
      console.log(data);
      setWorks(data);
    });
  }, []);
  return (
    <div id="Work">
      <motion.div
        whileInView={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 0.4 }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={700}
          marginBottom={5}
          marginTop={10}
        >
          Work
        </Typography>
        <Box
          justifyContent="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{
            padding:{
              md:2,
              xs:1
            }
          }}
        >
          <VerticalTimeline>
            {works?.map((work, index) => (
              <WorkCard key={`work-${index}`} work={work} />
            ))}
          </VerticalTimeline>
        </Box>
      </motion.div>
    </div>
  );
};

export default Work;
