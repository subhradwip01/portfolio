import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  TextField,
  Box,
  Link,
  TextareaAutosize,
  Button,
  Modal,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import success from "../assets/success.webp";
import wrong from "../assets/wrong.png";
import { motion } from "framer-motion";
import { client } from "../client";
import EarthCanvas from "./Models/Earth";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import emailjs from "@emailjs/browser";
const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Footer = ({ mobileView }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [modal, setModal] = useState({
    open: false,
    type: "",
    message: "",
  });

  const [about, setAbout] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type=="about"]';
    client.fetch(query).then((data) => {
      setAbout(data[0]);
    });
  }, []);

  const inputHandler = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    if (data.email === "" || data.message === "" || data.username === "") {
      setModal({
        open: true,
        type: wrong,
        message: "Please enter all the details!",
      });
      setLoading(false);
    } else {
      const email = {
        to_name: "Subhradwip Kulavi",
        to_email: about.email,
        from_name: data.username,
        from_email: data.email,
        message: data.message,
      };

      emailjs
        .send(
          process.env.REACT_APP_EMIALJS_SERVICE_ID,
          process.env.REACT_APP_EMIALJS_TEMPLETE_ID,
          email,
          process.env.REACT_APP_EMIALJS_PUBLIC_KEY
        )
        .then(() => {
          setLoading(false);
          setModal({
            open: true,
            type: success,
            message: "Thanks for contacting me! I will be with you ASAP",
          });
        })
        .catch(() => {
          setModal({
            open: true,
            type: wrong,
            message: "Please enter all the details!",
          });
        });
    }
  };

  const handleClose = () => setModal({ open: false, type: "", message: "" });

  return (
    <div id="#Contact">
      <Modal
        open={modal.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-message"
        aria-describedby="modal-modal-email-message"
      >
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.4 }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: mobileView ? "43%" : "50%",
              transform: "translate(-50%, -50%)",
              width: mobileView ? 320 : 400,
              bgcolor: "background.paper",
              border: (theme) => "2px solid " + theme.pink,
              borderRadius: 4,
              boxShadow: 24,
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: 3,
            }}
          >
            <img
              src={modal.type}
              alt="logo"
              style={{
                width: "150px",
              }}
            />
            <Typography
              textAlign="center"
              variant="p"
              marginTop={3}
              marginBottom={2}
              fontWeight={700}
            >
              {modal.message}
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </motion.div>
      </Modal>

      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.3 }}
      >
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
          spacing={1}
        >
          {/* <Grid item>
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
            <Link href={about?.socialHandle[0].url} target="_blank">
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
            <Link href={about?.socialHandle[1].url} target="_blank">
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
            <Link href={about?.socialHandle[2].url} target="_blank">
              <TwitterIcon
                sx={{
                  color: (theme) => theme.palette.grey.dark,
                  fontSize: 40,
                }}
              />
            </Link>
            </motion.div>
          </Box>
        </Grid> */}

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
                    md: "30vw",
                    xs: "90vw",
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
                    md: "30vw",
                    xs: "90vw",
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
                style={{
                  width: mobileView ? "90vw" : "30vw",
                  minHeight: "190px",
                  borderRadius: 10,
                }}
              />
            </Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={submitHandler}
              disabled={loading}
            >
              {!loading ? "Submit" : "Submitting.."}
            </Button>
          </Grid>
          <Grid item display="flex" justifyContent="center" alignItems="center">
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              style={{
                height: "400px",
              }}
            >
              <EarthCanvas />
            </motion.div>
          </Grid>
        </Grid>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={1}
          justifyContent="center"
          marginBottom={2}
        >
          <Box
            display="flex"
            alignItems="center"
            gap={3}
            justifyContent="center"
            
          >
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
            >
              <Link href={"tel:" + about?.mobile} target="_blank">
                <CallIcon
                  sx={{
                    color: (theme) => theme.palette.grey.dark,
                    fontSize: 40,
                  }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
            >
              <Link href={about?.socialHandle[0].url} target="_blank">
                <GitHubIcon
                  sx={{
                    color: (theme) => theme.palette.grey.dark,
                    fontSize: 40,
                  }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.65 }}
            >
              <Link href={about?.socialHandle[1].url} target="_blank">
                <LinkedInIcon
                  sx={{
                    color: (theme) => theme.palette.grey.dark,
                    fontSize: 40,
                  }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
            >
              <Link href={about?.socialHandle[2].url} target="_blank">
                <TwitterIcon
                  sx={{
                    color: (theme) => theme.palette.grey.dark,
                    fontSize: 40,
                  }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
            >
              <Link href={"mailto: " + about?.email} target="_blank">
                <MailIcon
                  sx={{
                    color: (theme) => theme.palette.grey.dark,
                    fontSize: 40,
                  }}
                />
              </Link>
            </motion.div>
          </Box>
          <Typography
            variant="p"
            sx={{
              color: (theme) => theme.palette.grey.main,
            }}
          >
            Thanks For Exploring
          </Typography>
        </Box>
      </motion.div>
    </div>
  );
};

export default Footer;
