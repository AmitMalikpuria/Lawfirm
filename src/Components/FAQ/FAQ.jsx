import React, { useState } from "react";
import styles from './FAQ.module.css'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";



function FAQ() {


    const [expanded, setExpanded] = useState(true);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={styles.containerfluid}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p className={styles.faq}>FAQ</p>
                    <p className={styles.faqSubTitle}>Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. </p>
                </div>
                <div className={styles.AccordianWrapper}>
                    <Accordion className={styles.Accordian} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                            <Typography className={styles.color}>Do I need a personal injury report?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={styles.color}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={styles.Accordian} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={styles.color}>How much is my case worth?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={styles.color}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles.Accordian} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={styles.color}>What should I do right after car accidect</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={styles.color}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles.Accordian} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined style={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={styles.color}>How much is my case worth?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={styles.color}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>);
}

export default FAQ;
