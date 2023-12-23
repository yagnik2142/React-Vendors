import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const MainHead = (props) => {
  const location = useLocation();
  return (
    <Box py={2} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      <Typography variant="h5" style={{fontWeight:"700"}}>{props.heading}</Typography>
      <NavLink to={`${location.pathname}/create`}>
          <Button
            color="primary"
            variant="contained"
            startIcon={<ControlPointIcon />}
            sx={{
              fontWeight: 500,
              fontSize: "15px",
            }}
          >
            Create
          </Button>
          </NavLink>
    </Box>
  )
}

export default MainHead