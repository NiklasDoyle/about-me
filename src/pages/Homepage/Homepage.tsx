import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Links from "../Links/Links";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

function Homepage() {
    return (
        <Grid container spacing={2} margin={10}>
            <Grid item xs={6} md={8}>
                <Box component="span" sx={{ border: '1px dashed grey' }}>
                    <Button>Save</Button>
                </Box>
            </Grid>
            <Grid item xs={6} md={4}>
                <Box component="span" sx={{ border: '1px dashed grey' }}>
                    <Button
                    >Start API Calls</Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Homepage;