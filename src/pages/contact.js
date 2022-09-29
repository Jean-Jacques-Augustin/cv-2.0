import React, { useState } from "react";
import {
     Paper,
     Grid,
     Typography,
     TextField,
     Divider,
     IconButton,
} from "@mui/material";
import { CustomTextField } from "../components/forms/formulaires";
import { CustomButton } from "../components/forms/formulaires";
import { socialNetWorkList } from "./constant/constantes";
import "../styles/styles.css";
//!icons

export default function Contact() {
     const [name, setName] = useState("");
     const [mail, setMail] = useState("");
     const [raison, setRaison] = useState("");
     const [message, setMessage] = useState("");

     //Gestion des erreurs
     const [nameErr, setNameErr] = useState(false);
     const [mailErr, setMailErr] = useState(false);
     const [raisonErr, setRaisonErr] = useState(false);
     const [messageErr, setMessageErr] = useState(false);

     //Declencher les erreurs
     const verify = () => {
          name === "" ? setNameErr(true) : setNameErr(false);
          mail === "" ? setMailErr(true) : setMailErr(false);
          raison === "" ? setRaisonErr(true) : setRaisonErr(false);
          message === "" ? setMessageErr(true) : setMessageErr(false);
     };

     return (
          <div className="profile">
               <Paper
                    style={{ maxWidth: 500 }}
                    variant="elevation"
                    className="paper_glass"
               >
                    <Grid
                         container
                         direction="row"
                         justifyContent="end"
                         alignItems="center"
                         spacing={2}
                         padding={2}
                    >
                         <Grid item md={12} xs={12}>
                              <Typography variant="h5">
                                    <b>Contact</b>
                              </Typography>
                         </Grid>
                         <Grid item md={6} xs={12}>
                              <CustomTextField
                                   onChange={(e) => setName(e.target.value)}
                                   error={nameErr}
                                   value={name}
                                   type={"name"}
                                   label="Name"
                              />
                         </Grid>
                         <Grid item md={6} xs={12}>
                              <CustomTextField
                                   onChange={(e) => setMail(e.target.value)}
                                   error={mailErr}
                                   value={mail}
                                   type={"email"}
                                   label="Email"
                              />
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <CustomTextField
                                   error={raisonErr}
                                   onChange={(e) => setRaison(e.target.value)}
                                   value={raison}
                                   type={"object"}
                                   label="Object"
                              />
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <TextField
                                   error={messageErr}
                                   id="filled-multiline-flexible"
                                   label="Your message"
                                   multiline
                                   rows={5}
                                   value={message}
                                   onChange={(e) => setMessage(e.target.value)}
                                   variant="outlined"
                                   fullWidth
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <CustomButton onClick={verify} name={"Send"} />
                         </Grid>
                         <Grid item xs={12}>
                              <Divider />
                         </Grid>
                         <Grid item md={12} xs={12}>

                                   {socialNetWorkList.map((item, key) => (
                                       <a style={{color: 'inherit', textDecoration: 'none'}} href={item.link} target="_blank">
                                            <IconButton
                                                key={key}
                                                color="inherit"
                                                aria-label={item.name}
                                                component="span"
                                                sx={{
                                                     marginLeft: "10px",
                                                     marginRight: "10px",
                                                }}

                                            >
                                                 {item.icon}
                                            </IconButton>
                                       </a>
                                   ))}
                         </Grid>
                    </Grid>
               </Paper>
          </div>
     );
}
