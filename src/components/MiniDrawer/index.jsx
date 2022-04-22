import { useState } from 'react';
import Link from 'next/link';

import SideBarImage from '../Side-bar-image';

import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

import {
    Box,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    Avatar,
    Tooltip,
    Button,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import FolderIcon from '@mui/icons-material/Folder';
import MailIcon from '@mui/icons-material/Mail';

import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ArticleIcon from '@mui/icons-material/Article';

const drawerWidth = 240;

const openedMixin = theme => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = theme => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

const MiniDrawer = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography sx={{ marginLeft: 'auto' }} variant="h6" component="h1">
                        Aimee Tacchi
                    </Typography>
                    <Avatar sx={{ marginLeft: '10px' }} alt="Aimee Tacchi" src="/static/images/avatar/1.jpg" />
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Dashboard', 'About', 'Skills', 'Projects', 'Contact'].map((text, index) => (
                        <Link key={text} href={index === 0 ? '/' : `/${text}`.toLowerCase()}>
                            <a>
                                {open ? (
                                    <MiniDrawerListItem open={open} text={text} index={index} />
                                ) : (
                                    <MiniDrawerListItemWithToolTip open={open} text={text} index={index} />
                                )}
                            </a>
                        </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Gallery', 'Blog'].map((text, index) => (
                        <Tooltip key={text} title={text} placement="right" arrow>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index === 0 ? <PhotoLibraryIcon /> : <ArticleIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Tooltip>
                    ))}

                    {open && (
                        <Box mt={2}>
                            <SideBarImage />
                        </Box>
                    )}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
            </Box>
        </Box>
    );
};

export default MiniDrawer;

const MiniDrawerListItemWithToolTip = ({ text, index, open }) => {
    return (
        <Tooltip title={text} placement="right" arrow>
        <ListItemButton
            sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
            }}
        >
            <ListItemIcon
                sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                }}
            >
                {index === 0 && <DashboardIcon />}
                {index === 1 && <PersonIcon />}
                {index === 2 && <CodeIcon />}
                {index === 3 && <FolderIcon />}
                {index === 4 && <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
        </Tooltip>
    );
};

const MiniDrawerListItem = ({ text, index, open }) => {
  return (
      <ListItemButton
          sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
          }}
      >
          <ListItemIcon
              sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
              }}
          >
              {index === 0 && <DashboardIcon />}
              {index === 1 && <PersonIcon />}
              {index === 2 && <CodeIcon />}
              {index === 3 && <FolderIcon />}
              {index === 4 && <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
  );
};
