import {Typography} from "@mui/material";

function Resume() {
    const resumePath = `${process.env.PUBLIC_URL}/NiklasDoyleResume.pdf`;
    return (
        <div>
            <Typography
                variant="h4"
                sx={{ textAlign: 'center' }}
            >
                Resume
            </Typography>
            <object
                width="90%"
                height="700"
                data={resumePath}
                type="application/pdf"
                style={{ display: 'block', margin: '0 auto' }}
            >
                Your browser does not support PDFs.
                <a href={resumePath}>Download the PDF</a>
            </object>
        </div>);
}

export default Resume;