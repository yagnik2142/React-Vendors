import { Box, Paper } from "@mui/material";
import SideBar from "./SideBar";
import Topbar from "./Topbar";
import { Margin } from "@mui/icons-material";

const DashboardLayout = (Component) => (props) => {
  return (
    <Box display={"flex"}>
      <SideBar />
      <Box width={"100%"}>
        
        <Topbar />

        <Paper
          style={{
            minHeight: "calc(100vh - 80px)",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Component {...props} />
        </Paper>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
