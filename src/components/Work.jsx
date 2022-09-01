import { Typography,Grid, Link } from "@mui/material";
import React,{useState,useEffect} from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import {motion} from "framer-motion"
import { urlFor, client } from "../client";
import LaunchIcon from '@mui/icons-material/Launch';
const Work = () => {
  const [works,setWorks]=useState(null)
  useEffect(()=>{
    const query = '*[_type=="works"]';
    client.fetch(query).then(data=>{
      console.log(data)
      setWorks(data)
    })
  },[])
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
        {works?.map((work,index) => (
              <motion.div whileInView={{opacity:[0,1],y:[100,0]}} transition={{duration:0.4 + index/6}}>
              <Card hover sx={{maxWidth:600,marginBottom:4,cursor:"pointer"}}>
                <CardHeader
                  avatar={<img src={urlFor(work.logo)} style={{ width: 70 }} />}
                  title={
                    <Typography variant="h6">{work.company}<Link href={work.link} target="_blank" color="grey.dark" paddingLeft={2} fontSize={2}><LaunchIcon/></Link> </Typography>
                  }
                />
               
                <CardContent>
                  {work.works.map((workRole) => (
                    <>
                     <Typography variant="h6">{workRole.role}</Typography>
                     <Typography variant="h6" fontWeight={700} fontSize={12} color="grey.main">{workRole.startDate} - {workRole.endDate? workRole.endDate : "Present"}</Typography>
                     <Typography variant="p">{workRole.desc}</Typography>
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
