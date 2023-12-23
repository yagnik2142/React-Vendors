import React, { useState, useEffect } from "react";
import { Box, Paper, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { tokens } from "../../theme";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from '@mui/icons-material/School';
import LogoImg from '../../assets/logo.png'

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuStyles = {
    button: ({ disabled }) => {
      return {
        color: disabled ? "" : `${colors.link}`,
        fontWeight: "400",
        fontSize: "17px",
        margin: "5px 0",
        "&:hover": {
          backgroundColor: colors.secondary[400],
        },
      };
    },
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? colors.secondary[400] : "",
    };
  };

  return (
    <Paper>
      <Box>
        <Sidebar
          style={{
            position: "fixed",
            zIndex: "2",
            height: "100vh",
            border: "none",
          }}
          backgroundColor={colors.primary[400]}
          width={isMobile ? "auto" : "200px"}
          collapsed={isMobile ? true : false}
        >
          {!isMobile && (
           <Box p={2} display={"flex"} alignItems={"center"} fontSize={"30px"} fontWeight={"500"}>
           <img src={LogoImg} alt='logo' height={"40px"}/>
           <p>Skular</p>
       </Box>
          )}
          <Box>
            <Menu menuItemStyles={menuStyles}>
              <MenuItem
                style={navLinkStyles}
                component={<NavLink to="/" />}
                icon={<HomeIcon />}
              >
                {!isMobile && "Home"}
              </MenuItem>
              <MenuItem
                icon={<PersonIcon />}
                style={navLinkStyles}
                component={<NavLink to="/vendors" />}
              >
                {!isMobile && "Vendors"}
              </MenuItem>

              

              <MenuItem
                style={navLinkStyles}
                component={<NavLink to="/courses" />}
                icon={<SchoolIcon />}
              >
                {!isMobile && "Courses"}
              </MenuItem>
            </Menu>
          </Box>
        </Sidebar>
        <Box
          width={isMobile ? "80px" : "200px"}
          collapsed={isMobile ? "true" : "false"}
        ></Box>
      </Box>
    </Paper>
  );
};

export default SideBar;
