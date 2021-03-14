import AppBar from '@material-ui/core/AppBar';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './AppBar.css';

export default function MyAppBar() {
    return (
        <div className="root">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className="title">
                        Mateus Dutra Dadalto
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}