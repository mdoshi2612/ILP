import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import './FAQ.css';
import Navbar from './Navbar';

const theme = createTheme({
    typography:{
        fontFamily:[
            '"Montserrat"', 
            'sans-serif'
        ].join(',')
    },
});

const FAQ = () => {
    return (
        <div>
           <h1 className="page-title">FAQ</h1> 
           <div className="faqs">
               <ThemeProvider theme={theme}>
                <Accordion className="faq-accord" style={{borderTop: "1px #96938b solid"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
                    </Accordion>
                    <Accordion className="faq-accord">
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
                    </Accordion>
                    </ThemeProvider>
            </div>
        </div>
    )
}

export default FAQ
