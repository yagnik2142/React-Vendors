import React, { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'

import  { Toaster } from "react-hot-toast";

import Courses from "./pages/Courses/Courses";
import AddCourse from "./pages/Courses/AddCourse";
import EditCourse from "./pages/Courses/EditCourse";
import ViewCourse from "./pages/Courses/ViewCourse";
import Vendors from "./pages/Vendors/Vendors";
import AddVendor from "./pages/Vendors/AddVendor";
import ViewVendor from "./pages/Vendors/ViewVendor";
import EditVendor from "./pages/Vendors/EditVendor";



function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/vendors/create" element={<AddVendor />} />
            <Route path="/vendor/edit/:id" element={<EditVendor />} />
            <Route path="/vendor/view/:id" element={<ViewVendor />} />
          </Routes>

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
