import { Link, useNavigate } from "react-router-dom";
import { AppBar, Box, Button, ButtonGroup, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";

function Navbar() {
    const navigate = useNavigate();

    return (
        <AppBar component="nav">
            <Toolbar>
                <Navtitle text="Niklas Doyle" path="/about-me" />
                <ButtonGroup sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Navbutton text="About Me" path="/about-me" />
                    <Navbutton text="Experience" path="/experience" />
                    <Navbutton text="Projects" path="/projects" />
                    <Navbutton text="Links" path="/links" />
                </ButtonGroup>
            </Toolbar>
        </AppBar >

    );
}

type NavProps = {
    path: string,
    text: string,
}

export function Navbutton({ path, text }: NavProps) {
    const navigate = useNavigate();
    return (
        <Button
            key={text}
            sx={{ color: '#fff' }}
            onClick={() => { navigate(path) }}>
            {text}
        </Button>
    );
}

export function Navtitle({ text, path }: NavProps) {
    const navigate = useNavigate();
    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => { }}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                {/* <Menu /> */}
            </IconButton>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                onClick={ () => { navigate(path) }}
            >
                {text}
            </Typography>
        </>
    );
}

export default Navbar;