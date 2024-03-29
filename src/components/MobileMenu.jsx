import React, { useState } from "react";
import { Box, Link, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DevicesIcon from "@mui/icons-material/Devices";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import CallIcon from "@mui/icons-material/Call";
import { motion } from "framer-motion";

const Menu = styled("ul")(() => ({
  display: "flex",
  listStyle: "none",
  flexDirection: "column-reverse",
  marginRight: 5,
}));

const MenuItem = styled("li")(({ theme }) => ({
  paddingTop: theme.spacing(1.4),
  paddingBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(1.4),
  paddingRight: theme.spacing(1.4),
  marginBottom: theme.spacing(1),
  borderRadius: "50%",
  backgroundColor: theme.palette.secondary.main,
}));

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = (event) => {
    setShowMenu((prev) => !prev);
  };
  const handleClose = () => {
    setShowMenu((prev) => !prev);
  };
  const navMenu=[{
    icon:<HomeIcon />,
    link:"Home"
  },{
    icon:<PersonIcon />,
    link:"About"
  },{
    icon:<CodeIcon />,
    link:"Skills"
  },{
    icon:<WorkIcon />,
    link:"Work"
  },{
    icon:<DevicesIcon/>,
    link:"Projects"
  },{
    icon:<CallIcon/>,
    link:"Contact"
  }]
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "40px",
        right:"-30px",
        width: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        marginRight: 5,
        paddingRight: "30px",
        zIndex:2000
      }}
    >
      {showMenu && (
        <Menu>
          {navMenu.map((item, index) => (
            <motion.div
              animate={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.4 + index / 8 }}
            >
              
              <MenuItem key={`link-#${item.link}`} onClick={handleClose}>
                <Link
                  href={`#${item.link}`}
                  sx={{ textDecoration: "none" }}
                  color="white"
                >
                  {item.icon}
                </Link>
              </MenuItem>
              
            </motion.div>
          ))}
        </Menu>
      )}
      <Box
        id="basic-button"
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRadius: "40%",
          py: 1,
          px: 2,
        }}
        onClick={handleClick}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "20px",
            height: "40px",
            cursor: "pointer",
            transition: "all .5s ease-in-out",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "3px",
              backgroundColor: "white",
              transition: "all .5s ease-in-out",
              "&::before, &::after": {
                content: "''",
                position: "absolute",
                width: "100%",
                height: "3px",
                backgroundColor: "white",
                borderRadius: "5px",
                transition: "all .5s ease-in-out",
              },
              "&::before": {
                transform: showMenu
                  ? "rotate(45deg) translate(35px, -35px)"
                  : "translateY(-8px)",
              },
              "&::after": {
                transform: showMenu
                  ? "rotate(-45deg) translate(35px, 35px)"
                  : "translateY(8px)",
              },

              transform: showMenu ? "translateX(-50px)" : "",
              background: showMenu ? "transparent" : "",
              boxShadow: showMenu ? "none" : "",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileMenu;
