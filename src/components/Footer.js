import {AppBar, Container, Toolbar, Typography} from "@mui/material";

export default function Footer() {
    return <AppBar
        sx = {{
            top: 'auto',
            bottom: 0,
            backgroundColor: 'transparent',
            color: 'text.secondary',
            mt: 2,
        }}
        position={"relative"}
    >
        <Toolbar>
            <Container>
                <Typography>
                    © {new Date().getFullYear()} - All rights reserved
                </Typography>
                <Typography>
                    Made with ❤️ by <a
                    style={{color: 'inherit', textDecoration: 'none'}}
                    href={"https://fb.me/Jean.Jacques.Augustin.R/"} target={"_blank"}>
                    <strong>
                        Jean Jacques Augustin
                    </strong>
                </a>
                </Typography>
            </Container>
        </Toolbar>
    </AppBar>
}