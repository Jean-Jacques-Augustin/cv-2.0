import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { workDetail } from "./constant/work";
import { CustomCard } from "../components/forms/formulaires";

export default function Works() {
     return (
          <div className="div_center_welcome">
               <Typography variant="h5">
                    Les échantillons de mes travail
               </Typography>
               <br />
               <div>
                    <Grid
                         container
                         direction="row"
                         justifyContent="start"
                         alignItems="center"
                         spacing={2}
                    >
                         {workDetail.map((item, key) => (
                              <Grid key={key} item md={4} sm={6} xs={12}>
                                   <CustomCard
                                        name={item.name}
                                        titre={item.name}
                                        lien={item.url}
                                        detail={item.detail}
                                   />
                              </Grid>
                         ))}
                    </Grid>
               </div>
          </div>
     );
}
