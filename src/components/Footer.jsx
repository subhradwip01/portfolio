import React, { useState } from "react";
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
import {CONTACT} from "../data"


const Footer = () => {
  const [data, setData] = useState({
    email: "",
    message: "",
  });


  const [modal,setModal]=useState({
    open:false,
    type:"",
    message:""
  });

  const inputHandler = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const submitHandler=(e)=>{
    console.log(data)
    e.preventDefault();
    if(data.email===""||data.message==="") setModal({
      open:true,
      type:wrong,
      message:"Please enter all the details!"
    }); else
    setModal({
      open:true,
      type:success,
      message:"Thanks for sending message. I will connect with you ASAP"
    })
    setData({
      email:"",
      message:""
    })
  }

  const handleClose=()=>setModal({open:false,
    type:"",
    message:""})

  return (
    <div id="#contact">
      <Modal open={modal.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-message"
        aria-describedby="modal-modal-email-message">
          <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
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
      </Modal>
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
                href={"tel:"+CONTACT.mobile}
                sx={{
                  color: (theme) => theme.palette.grey.dark,
                  fontWeight: 700,
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}
              >
                {CONTACT.mobile}
              </Link>
            </Box>
          </Card>
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
                href={"mailto: "+ CONTACT.email}
                sx={{
                  color: (theme) => theme.palette.grey.dark,
                  fontWeight: 700,
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}
              >
                {CONTACT.email}
              </Link>
            </Box>
          </Card>
          <Box display="flex" gap={3} justifyContent="center">
            <Link href={CONTACT.gitLink}>
              <GitHubIcon
                sx={{
                  color: (theme) => theme.palette.grey.dark,
                  fontSize: 40,
                }}
              />
            </Link>
            <Link href={CONTACT.linkedLink}>
              <LinkedInIcon
                sx={{
                  color: (theme) => theme.palette.grey.dark,
                  fontSize: 40,
                }}
              />
            </Link>
            <Link href={CONTACT.twitterLink}>
              <TwitterIcon
                sx={{
                  color: (theme) => theme.palette.grey.dark,
                  fontSize: 40,
                }}
              />
            </Link>
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
              label="Email ID"
              variant="filled"
              name="email"
              value={data.email}
              sx={{
                width: "30vw",
              }}
              onChange={inputHandler}
            />
            <TextareaAutosize
              maxRows={4}
              aria-label="maximum height"
              placeholder="Write Here..."
              name="message"
              value={data.message}
              onChange={inputHandler}
              style={{ width: "30vw", minHeight: "190px" }}
            />
          </Box>
          <Button variant="contained" color="secondary" onClick={submitHandler}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
