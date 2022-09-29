import "./App.css";
import Navigation from "./components/navigation";
import {Paper, ThemeProvider, Toolbar} from "@mui/material";
import { ThemeValue } from "./app/themeSlice";
import { useSelector } from "react-redux";
import { dark_theme } from "./themes/dark";
import { light_theme } from "./themes/light";
import Main from "./main";
import Footer from "./components/Footer";

export let theme;

function App() {
     const dark = useSelector(ThemeValue);
     theme = dark ? dark_theme : light_theme;
     return (
          <div className="App">
               <ThemeProvider theme={theme}>
                    <Paper elevation={0} sx={{ borderRadius: 0 }}>
                         <Navigation className={"navigation"} />
                              <Toolbar/>
                              <br/>
                              <Main className={"page"} />
                         <Footer/>
                    </Paper>
               </ThemeProvider>
          </div>
     );
}

export default App;
