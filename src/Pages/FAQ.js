
import Header from "../Components/Header";
import { tokens } from "../Theme";
import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionData = [
    {
        id: 1,
        question: " An Important Question",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.`
    },
    {
        id: 2,
        question: " An Important Question",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.`
    },
    {
        id: 3,
        question: " An Important Question",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.`
    },
    {
        id: 4,
        question: " An Important Question",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.`
    },
    {
        id: 5,
        question: " An Important Question",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.`
    },
    {
        id: 6,
        question: " An Important Question",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.`
    },
]
const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Questions Page" />
            {AccordionData.map(item => (
                <Accordion  key={item.id} >
                    <AccordionSummary  expandIcon={<ExpandMoreIcon /> }>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}

        </Box>
    );
};

export default FAQ;