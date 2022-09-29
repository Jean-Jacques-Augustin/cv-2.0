import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";
import Welcome from "./pages/welcome";
import Works from "./pages/works";
import Contact from "./pages/contact";
import ErrorPage from "./pages/error";
import { Container } from "@mui/material";

export default function Main(props) {
     return (
          <div className={props.className}>
               <Container>
                    <Routes>
                         <Route index path="/" element={<Profile />} />
                         <Route path="/profil" element={<Welcome />} />
                         <Route path="/works" element={<Works />} />
                         <Route path="/contact" element={<Contact />} />
                         <Route path="*" element={<ErrorPage />} />
                    </Routes>
               </Container>
          </div>
     );
}
