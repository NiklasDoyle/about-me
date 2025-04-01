import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import {CardHeader, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';

export default function MenuSelector() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (newPage: string | undefined) => {
        if (newPage) {
            navigate(`/${newPage}`)
        }
        setAnchorEl(null);
    };

    return (
        <Toolbar>
            <Grid container spacing={2} minHeight={50}>
                <Grid item xs={6} display="flex" justifyContent="flex-start">
                    <div>
                        <Button
                            id="menu-button"
                            aria-controls={open ? 'menu-button' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            color='primary'
                            sx={{ backgroundColor: 'transparent', color: 'primary.main' }}
                        >
                            <MenuIcon />
                        </Button>
                        <Menu
                            id="menu-button"
                            aria-labelledby="menu-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={() => handleClose(undefined)}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem sx={{color: "black"}} onClick={() => handleClose("home")}>Home</MenuItem>
                            <MenuItem sx={{color: "black"}} onClick={() => handleClose("projects")}>Projects</MenuItem>
                            <MenuItem sx={{color: "black"}} onClick={() => handleClose("experience")}>Experience</MenuItem>
                            <MenuItem sx={{color: "black"}} onClick={() => handleClose("extra-curricular")}>Extra Curricular</MenuItem>
                            <MenuItem sx={{color: "black"}} onClick={() => handleClose("resume")}>Resume</MenuItem>
                        </Menu>
                    </div>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="flex-end">
                    <Typography sx={{textTransform: 'uppercase' }} > Niklas Doyle </Typography>
                </Grid>
            </Grid>
        </Toolbar>
    );
}