import React from "react";
import {Button, Grid, Toolbar, Typography} from "@mui/material";
import "../styles/styles.css";
import homeImage from "../img/design.svg"
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Profile() {
    return (<div className="profile">

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Grid item md={6} xs={12}>
                <img style={{
                    width: "100%", height: "100%",
                }} src={homeImage} alt={"home"}/>
            </Grid>
            <Grid item md={6} xs={12}>
                <Typography variant={"h3"} align={"left"}>
                    Realize your projects with me!
                </Typography>
                <br/>
                <Typography variant={"h5"} align={"justify"}>
                    I am a web developer specialized in MERN Stack, I am passionate about web development and I am
                    always looking for new technologies to learn.
                </Typography>
                <br/>
                <Typography variant={"h5"} align={"justify"}>
                    I am attentive to your needs and I'll help you to realize your web projects, do not hesitate to
                    contact me.
                </Typography>
                <br/>
                <Typography variant={"h5"} align={"justify"}>
                    I am available for freelance missions.
                </Typography>
                <Button sx={{mt: 4, textTransform: "none"}}
                        variant={"outlined"}
                        color={"primary"}
                        size={"large"}
                        href={"mailto:rjja@outlook.fr"}
                        startIcon={<MailOutlineIcon/>}
                >
                    Contact me
                </Button>
            </Grid>
        </Grid>
    </div>);
}
