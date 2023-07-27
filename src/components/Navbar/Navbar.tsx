import { Link, useNavigate } from "react-router-dom";
import { Navbutton, Navtitle } from "../Navbutton/Navbutton";
import { AppBar, Box, Button, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material"

function Navbar() {
    const navigate = useNavigate();

    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => { }}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <Menu />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    onClick={() => { navigate('/') }}
                >
                    Niklas Doyle
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {['Home', 'Experience', 'Projects', 'Links'].map((item) => (
                        <Button
                            key={item}
                            sx={{ color: '#fff' }}
                            onClick={() => { navigate('/' + item.toLowerCase()) }}>
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar >

    );
}

export default Navbar;