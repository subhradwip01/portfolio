import { Typography,Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import {WORKS} from "../data"
import {motion} from "framer-motion"
const Work = () => {
  
  return (
    <div id="#work">
      <motion.div whileInView={{opacity:[0,1],y:[100,0]}} transition={{duration:0.4}}>
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
        {WORKS.map((work,index) => (
              <motion.div whileInView={{opacity:[0,1],y:[100,0]}} transition={{duration:0.4 + index/6}}>
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
                     <Typography variant="h6" fontWeight={700} fontSize={12} color="grey.main">{workRole.year}</Typography>
                     <Typography variant="p">{workRole.work}</Typography>
                     <br></br>
                     <br></br>
                     </>
                  ))}
                </CardContent>
              </Card>
              </motion.div>
        ))}
        </Box>
        </motion.div>
    </div>
  );
};

export default Work;
