import {
    AppBar,
    Box,
    Container,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import SwitchTheme from "./switchTheme";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

export const navigationLinks = [
    {name: "Home", path: "/", icon: <HomeRoundedIcon />},
    {name: "Profil", path: "/profil", icon: <AccountBoxRoundedIcon />},
    {name: "Works", path: "/works", icon: <WorkRoundedIcon />},
    {name: "Contact", path: "/contact", icon: <PhoneRoundedIcon />},
];


const drawerWidth = 300;

const ListesLinks = () => {
    return (
        <Box sx={{ mt: 9 }}>
            <List>
                {navigationLinks.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            className="listLinks"
                            component={Link}
                            to={item.path}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List>
                <ListItem>
                    <ListItemIcon>
                        <SwitchTheme />
                    </ListItemIcon>
                    <ListItemText primary={"Theme de couleur"} />
                </ListItem>
            </List>
        </Box>
    );
};

export default function Navigation() {
    const [open, setOpen] = React.useState(false);

    const handeClickOpenDrawer = () => {
            setOpen(!open);
    }
    return (
        <AppBar elevation={1}
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                color={"inherit"}>
            <Container>
                <Toolbar className="navigation">
                    <Typography variant={"h5"}>
                        <b>Jean Jacques Augustin</b>
                    </Typography>
                    <Hidden mdDown>
                        <div className={"nav_item"}>
                            {navigationLinks.map((item, key) => (
                                <Link to={item.path} key={key} className={"liens"}>
                                    <Typography variant="h6">
                                        {item.name}
                                    </Typography>
                                </Link>
                            ))}
                            <SwitchTheme/>
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            onClick={handeClickOpenDrawer}
                        >
                            {open ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </Hidden>
                    <Drawer
                        variant={"temporary"}
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            [`& .MuiDrawer-paper`]: {
                                width: drawerWidth,
                                boxSizing: "border-box",
                                border: 0,
                            },
                        }}
                        anchor={"left"}
                        open={open}
                    >
                        <ListesLinks />
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
