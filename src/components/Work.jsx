import { Typography,Grid } from "@mui/material";
import React from "react";
import layer from "../assets/layer5.png";
import csi from "../assets/csi.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import work from "../assets/work.png"
import { Box } from "@mui/system";
const Work = () => {
  const works = [
    {
      organization: "Layer5",
      logo: layer,
      link: "https://layer5.io/",
      work: [
        {
          role: "Member/Contributor",
          work: `
          Working as open-source contributor in layer5io.
          Working for layer5.io site enhancement.
          Contributing with Reactjs, gatsby.
          Helping other contributor for their contribution.          
          `,
          year: "2022-Present",
        },
      ],
    },
    {
      organization: "CSI Chapter",
      logo: csi,
      link: "https://csivitap.co.in/",
      work: [
        {
          role: "Technical Member",
          work: "Worked on different project on MERN Stack. Worked on Frontend for Admin Panel of CSI, implemented Redux and firebase for project manager",
          year: "2021-2022",
        },
        {
          role: "Community Manager",
          work: "Working on community manager for building better ecosystem for the growth of members and club",
          year: "2022-Present",
        },
      ],
    },
  ];
  return (
    <div id="#work">
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={700}
        marginBottom={5}
        marginTop={10}
      >
        Work
      </Typography>
        <Box justifyContent="center" display="flex" flexDirection="column" alignItems="center">
        {works.map((work) => (

              <Card hover sx={{maxWidth:600,marginBottom:4}}>
                <CardHeader
                  avatar={<img src={work.logo} style={{ width: 70 }} />}
                  title={
                    <Typography variant="h6">{work.organization}</Typography>
                  }
                />
                <CardContent>
                  {work.work.map((workRole) => (
                    <>
                     <Typography variant="h6">{workRole.role}</Typography>
                     <Typography variant="h6" fontWeight={700} fontSize={12} >{workRole.year}</Typography>
                     <Typography variant="p">{workRole.work}</Typography>
                     <br></br>
                     <br></br>
                     </>
                  ))}
                </CardContent>
              </Card>
        ))}
        </Box>
       
    </div>
  );
};

export default Work;
