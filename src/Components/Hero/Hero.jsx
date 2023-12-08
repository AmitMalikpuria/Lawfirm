import React from "react";
import image from '../../assets/HeroImage.png'
import styles from './Hero.module.css'
import { TextField, InputAdornment, IconButton } from "@mui/material";
import emailpng from '../../assets/Message.png'

function Hero() {
    return (
        <div className={styles.wrapper} >
            <div className={styles.title}>
                <p>You don't have to </p>
                <p><strong> Fight them Alone.</strong></p>
                <span style={{width:"560px"}}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</span>
                <div className={styles.inputwrap}>
                    
                    <input type="email" className={styles.email} maxLength={60} placeholder="Enter your email">                        
                    </input>
                    <img src={emailpng} alt="email-png" className={styles.img}  />
                    <button className={styles.button}><strong> Let's Talk</strong></button>
                    {/* <TextField
                        label="Enter your email"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '40ch', color: 'white', backgroundColor: "white" }}
                        endAdornment={
                            <InputAdornment position="start">
                                <IconButton
                                    edge="start"
                                >
                                    {emailpng}
                                </IconButton>
                            </InputAdornment>
                        }
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <IconButton
                                    edge="start"
                                >
                                    {emailpng}
                                </IconButton>
                            </InputAdornment>,
                        }}
                    /> */}
                </div>

            </div>
            <img className={StyleSheet.hero} src={image} alt="image-hero" />

        </div>);
}

export default Hero;
