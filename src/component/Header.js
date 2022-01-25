import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect } from "react";
import {makeStyles} from "@mui/styles"
import { Link as RouterLink } from "react-router-dom";
import {FaUserPlus  , FaRegListAlt , FaCashRegister,FaHome  } from "react-icons/fa";

const headersData = [
  {
    label: "Home",
    href: "/",
    component: <FaHome/>
  },
  {
    label: "Register Member",
    href: "/register_member",
    component: <FaUserPlus />
  },
  {
    label: "Member's List",
    href: "/member_list",
    component: <FaRegListAlt />
  },
  {
    label: "Fee Reminder",
    href: "/fee_reminder",
    component: <FaCashRegister />
  },
];

const useStyles = makeStyles(() => ({
  header: {
    color: "black", 
    backgroundColor: "#c46210",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    textAlign: "left",
    color: "black"
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    color: "black" , 
    paddingRight: "10px"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    backgroundColor: "#c46210",
    height: "100%" , 
    color: "black" ,
    padding: "20px 30px",
  }, 
  icon: {
    color: "black"
  },
  drawerPaper: {
     background: "blue"
  }
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer, drawerPaper , icon } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          edge= "start"
          color= "inherit"
          aria-label= "menu"
          aria-haspopup = "true"
          onClick = {handleDrawerOpen}
          
        >
          <MenuIcon className= {icon}/>
        </IconButton>

        <Drawer
          anchor= "left"
          open = {drawerOpen}
          classes={{paper: drawerPaper}}
          onClose= {handleDrawerClose}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          component= {RouterLink}
          to = {href}
          color = "inherit"
          style = {{ textDecoration: "none" }}
          key = {label}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      FitnessPro
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, component }) => {
      return (
        <Button        
          key = {label}
          color = "inherit"
          to = {href}
          component = {RouterLink}
          className = {menuButton}
          sx = {{color: "black"}}
          >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header} sx = {{backgroundColor: "#c46210"}}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
