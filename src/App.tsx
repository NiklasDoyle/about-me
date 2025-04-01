import { BrowserRouter, Route, Routes , Navigate} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import {createTheme, ThemeProvider, CssBaseline, Typography} from "@mui/material";
import MenuSelector from "./components/MenuSelector";
import ExtraCurricular from "./pages/ExtraCurricular";

const theme = createTheme({
    palette: {
        primary: {
            main: "#DAD7CD",
        },
        secondary: {
            main: "#A3B18A",
        },
        background: {
            default: "#344E41"
        },
        text: {
            primary: "#DAD7CD"
        }
    },
    typography: {
        fontFamily: [
            'Judson',
        ].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#DAD7CDE6",
                    color:"#000000",

                },
            },
        },
    },
})


function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>
                <BrowserRouter>
                    <MenuSelector/>
                    <div>
                        <Routes>
                            <Route path='/' element={<Navigate to='/home' />} />
                            <Route path='/home' element={<Homepage />} />
                            <Route path='/projects' element={<Projects />} />
                            <Route path='/experience' element={<Experience />} />
                            <Route path='/extra-curricular' element={<ExtraCurricular />} />
                            <Route path='/resume' element={<Resume />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        </ThemeProvider>);
}

export default App;