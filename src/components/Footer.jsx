import React, { useState,useEffect } from "react";
import {
  Typography,
  Grid,
  TextField,
  Card,
  Box,
  CardMedia,
  Link,
  TextareaAutosize,
  Button,
  Modal,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import mobile from "../assets/mobile.png";
import email from "../assets/email.png";
import success from '../assets/success.webp';
import wrong from '../assets/wrong.png'
import { motion } from "framer-motion";
import { client } from "../client";


const Footer = ({mobileView}) => {
  const [data, setData] = useState({
    username:"",
    email: "",
    message: "",
  });


  const [modal,setModal]=useState({
    open:false,
    type:"",
    message:""
  });

  const [about,setAbout]=useState(null)

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const query = '*[_type=="about"]';
    client.fetch(query).then(data=>{
   
      setAbout(data[0])
   
    })
  },[])

  const inputHandler = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const submitHandler=(e)=>{
    console.log(data)
    setLoading(true)
    e.preventDefault();
    if(data.email===""||data.message==="") 
    setModal({
      open:true,
      type:wrong,
      message:"Please enter all the details!"
    }) 
    else{
      const contact = {
        _type: 'contact',
        name: data.username,
        email: data.email,
        message: data.message,
      };
  
      client.create(contact)
        .then(() => {
          
          setModal({
            open:true,
            type:success,
            message:"Thanks for sending message. I will connect with you ASAP"
          })
          setData({
            username:"",
            email:"",
            message:""
          })
        })
        .catch((err) => {
          console.log(err)
          setModal({
            open:true,
            type:wrong,
            message:err.message
          })
        });
    }
    setLoading(false);
    
  }

  const handleClose=()=>setModal({open:false,
    type:"",
    message:""})


  return (
    <div id="#Contact">

      <Modal open={modal.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-message"
        aria-describedby="modal-modal-email-message"

        >
         <motion.div animate={{  opacity:[0,1]}}
              transition={{ duration: 0.4 }}>
          <Box sx={{
              position: 'absolute',
              top: '50%',
              left:mobileView ? '43%':'50%',
              transform: 'translate(-50%, -50%)',
              width: mobileView ? 320 : 400,
              bgcolor: 'background.paper',
              border:theme=> '2px solid '+theme.pink,
              borderRadius:4,
              boxShadow: 24,
              p: 4,
              display: "flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
              margin:3
            
          }} >
            <img src={modal.type} alt="logo" style={
              {
                width:"150px"
              }
            } />
            <Typography textAlign="center" variant="h5" marginTop={3} marginBottom={2} fontWeight={700}>{modal.message}</Typography>
            <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
          </Box>
          </motion.div> 
      </Modal>
    
      <motion.div
          whileInView={{ y:[100,0],opacity: [0,1] }}
          transition={{ duration: 0.3 }}>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={700}
        marginBottom={5}
        marginTop={10}
      >
        <span style={{ color: "#313bac" }}>Contact</span> with me
      </Typography>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        paddingBottom={7}
      >
        <Grid item>
        <motion.div whileInView={{ y:[100,0],opacity: [0,1] }}
          transition={{ duration: 0.4 }}>
          <Card
            sx={{
              p: 2,
              borderRadius: 2,
              m: 2,
              width: 310,
              backgroundColor: (theme) => theme.palette.pink,
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                image={mobile}
                sx={{
                  width: "60px",
                }}
              />
              <Link
                href={"tel:"+about?.mobile}
                sx={{
                  color: (theme) => theme.palette.grey.dark,
                  fontWeight: 700,
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}
              >
                {about?.mobile}
              </Link>
            </Box>
          </Card>
          </motion.div>
          <motion.div whileInView={{ y:[100,0],opacity: [0,1] }}
          transition={{ duration: 0.5 }}>
          <Card sx={{ p: 2, borderRadius: 2, width: 310, m: 2 }}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                image={email}
                sx={{
                  width: "60px",
                }}
              />
              <Link
                href={"mailto: "+ about?.email}
                sx={{
                  color: (theme) => theme.palette.grey.dark,
                  fontWeight: 700,
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}
              >
                {about?.email}
              </Link>
            </Box>
          </Card>
          </motion.div>

          <Box display="flex" gap={3} justifyContent="center">
          <motion.div
          whileInView={{ scale:[0,1],opacity: [0,1] }}
          transition={{ duration: 0.6 }}>
            <Link href={about?.socialHandle[0].url}>
              <GitHubIcon
                sx={{
                  color: (theme) => theme.palette.grey.dark,
                  fontSize: 40,
                }}
              />
            </Link>
            </motion.div>
            <motion.div
          whileInView={{ scale:[0,1],opacity: [0,1] }}
          transition={{ duration: 0.65 }}>
            <Link href={about?.socialHandle[1].url}>
              <LinkedInIcon
                sx={{
                  color: (theme) => theme.palette.grey.dark,
                  fontSize: 40,
                }}
              />
            </Link>
            </motion.div>
            <motion.div
          whileInView={{ scale:[0,1],opacity: [0,1] }}
          transition={{ duration: 0.7 }}>
            <Link href={about?.socialHandle[2].url}>
              <TwitterIcon
                sx={{
                  color: (theme) => theme.palette.grey.dark,
                  fontSize: 40,
                }}
              />
            </Link>
            </motion.div>
          </Box>
        </Grid>
        <Grid item>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
            marginBottom={3}
          >
            <TextField
              required
              id="outlined-required"
              label="Name"
              variant="outlined"
              name="username"
              value={data.username}
              color="secondary"
              sx={{
                width: {
                  md:"30vw",
                  xs:"90vw"
                },
                
                
              }}
              onChange={inputHandler}
            />
            <TextField
              required
              id="outlined-required"
              label="Email ID"
              variant="outlined"
              name="email"
              value={data.email}
              color="secondary"
              sx={{
                width: {
                  md:"30vw",
                  xs:"90vw"
                },
                
              }}
              onChange={inputHandler}
            />
            <TextareaAutosize
              maxRows={4}
              aria-label="maximum height"
              placeholder="Write Here..."
              name="message"
              value={data.message}
              color="secondary"
              onChange={inputHandler}
              style={{ width:mobileView ? "90vw" : "30vw", minHeight: "190px",borderRadius:10,
               
               }}
            />
          </Box>
          <Button variant="contained" color="secondary" onClick={submitHandler} disabled={loading}>
            Submit
          </Button>
        </Grid>
      </Grid>
      </motion.div>
    </div>
  );
};

export default Footer;
