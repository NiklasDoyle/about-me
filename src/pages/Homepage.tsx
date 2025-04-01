import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function Homepage() {
    const navigate = useNavigate()

    const linkedInURL = "https://www.linkedin.com/in/niklasdoyle/"
    const githubURL = "https://github.com/NiklasDoyle"

    return (
        <div>
            <Typography
                variant="h2"
                sx={{ textAlign: 'center' }}
            >
                Hello!
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{ textAlign: 'center' }}
            >
                My Name is Niklas, I am a Software Engineer based in Phoenix, Arizona.
            </Typography>

            <Box mt={18} />

            <Grid container spacing={10} justifyContent="center" alignItems="center">
                <Grid item>
                    <Button
                        sx={{ width: '150px', height: '50px' }}
                        onClick={ () => navigate("/experience") }
                    >Experience</Button>
                </Grid>
                <Grid item>
                    <Button
                        sx={{ width: '150px', height: '50px' }}
                        onClick={ () => navigate("/projects") }
                    >Projects</Button>
                </Grid>
                <Grid item>
                    <Button
                        sx={{ width: '150px', height: '50px' }}
                        onClick={ () => navigate("/extra-curricular") }
                    >Outside of Work</Button>
                </Grid>
            </Grid>


            <Box mt={4} />

            <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid item>
                    <Button
                        sx={{
                            backgroundColor: 'secondary.main',
                            width: '100px',
                            height: '40px',
                            fontSize: '14px'
                            }}
                        onClick={ () => navigate("/resume") }
                    >Resume</Button>
                </Grid>
                <Grid item>
                    <Button
                        sx={{
                            backgroundColor: 'secondary.main',
                            width: '100px',
                            height: '40px',
                            fontSize: '14px'
                        }}
                        onClick={ () => window.open(linkedInURL, '_blank') }
                    >LinkedIn</Button>
                </Grid>
                <Grid item>
                    <Button
                        sx={{
                            backgroundColor: 'secondary.main',
                            width: '100px',
                            height: '40px',
                            fontSize: '14px'
                        }}
                        onClick={ () => window.open(githubURL, '_blank') }
                    >GitHub</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Homepage;