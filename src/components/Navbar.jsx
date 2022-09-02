import { AppBar, Toolbar, Typography } from '@mui/material'
import React, {ReactDOM } from 'react'
import { styled } from "@mui/material/styles"


const NavBar=styled(AppBar)(({theme})=>({
    backgroundColor: theme.primary, 
    padding: theme.spacing(1.4),
    postion:"sticky",
    zIndex: 1100,
    boxShadow:"none"
}))

const Menu=styled('ul')(()=>({
    display:"flex",
    listStyle:"none"
}))

const MenuItem=styled('li')(({theme})=>({
    paddingRight:theme.spacing(3),
}))

const MenuItemLink=styled('a')(({theme})=>({
   textDecoration:"none",
   color:theme.palette.grey.dark,
   fontSize:theme.spacing(2.3),
   fontWeight:theme.typography.fontWeightRegular,
   "&:hover":{
    color:theme.palette.secondary.main
   } 
}))

const Navbar = ({mobileView}) => {
    function handleScroll(id){
        const item = ReactDOM.findDOMNode(this.refs[id]);
        window.scrollTo(item.offsetTop);
    }
  return (
   <NavBar>
    <Toolbar sx={{
        justifyContent:"space-between"
    }}>
        <Typography variant="h6">
            Subhradwip
        </Typography>
        <Menu>
        {!mobileView && ['Home','About','Skills','Work','Projects','Contact'].map((item=>(
            <MenuItem key={`link-#${item}`}>
               <MenuItemLink href={`#${item}`} name={`${item}`}>{item}</MenuItemLink> 
            </MenuItem>
        )))}
        </Menu>
    </Toolbar>
   </NavBar>
  )
}

export default Navbar