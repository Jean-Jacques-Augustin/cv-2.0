import {Box, Divider, Grid, Paper, Toolbar, Typography} from "@mui/material";
import React from "react";
import { BorderLinearProgress } from "../components/forms/formulaires";
import { backend, frontend } from "./constant/constantes";

export default function Welcome() {
     return (
          <div className="div_center_welcome">
               <div>
                    <br />
                    <div>
                         <Typography variant="h3">
                              Hello,
                         </Typography>
                         <br/>
                         <Typography variant="h6">
                              My name is <b>Jean Jacques Augustin</b> and I am a fullstack developer with a passion for web development
                         </Typography>
                         <br/><br/>
                         <Typography variant={"h4"}>
                              My main skills are:
                         </Typography>
<br/>
                    </div>
               </div>

               <Box>
                    <Grid
                         container
                         direction="row"
                         justifyContent="space-around"
                         alignItems="stretch"
                         spacing={2}
                    >
                         <Grid item md={6} xs={12}>
                              <Paper
                                   variant={"outlined"}
                                   style={{
                                        padding: "2vh",
                                   }}

                              >
                                   <Typography variant="h5">
                                          <b>Frontend</b>
                                   </Typography>
                                   <br />
                                   <Divider />
                                   <br />
                                   {frontend.map((item, key) => (
                                        <div className="skill_tab" key={key}>
                                             <Typography align="left">
                                                  {item.name} :
                                             </Typography>
                                             <BorderLinearProgress
                                                  variant="determinate"
                                                  value={item.skill}
                                             />
                                             <br />
                                        </div>
                                   ))}
                              </Paper>
                         </Grid>
                         <Grid item md={6} xs={12}>
                              <Paper
                                   variant={"outlined"}
                                   style={{ padding: "2vh" }}
                                   // className="paper_glass"
                              >
                                   <Typography variant="h5">
                                          <b>Backend</b>
                                   </Typography>
                                   <br />
                                   <Divider />
                                   <br />
                                   {backend.map((item, key) => (
                                        <div className="skill_tab" key={key}>
                                             <Typography align="left">
                                                  {item.name} :
                                             </Typography>
                                             <BorderLinearProgress
                                                  variant="determinate"
                                                  value={item.skill}
                                             />
                                             <br />
                                        </div>
                                   ))}
                              </Paper>
                         </Grid>
                    </Grid>
               </Box>
               <br />
          </div>
     );
}
