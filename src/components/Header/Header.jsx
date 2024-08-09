// src/components/Header.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Button, Badge, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';
import { logout } from 'features/Auth/userSlice';
import { cartItemsCountSelector } from 'features/cart/selectors';
import logo from 'assets/logo.png';
import Head from './Head';
import LoginDialog from './LoginDialog';
import NavBarHeader from './NavBarHeader';
import Search from 'components/search/Search';
import ThemeToggle from 'components/themeToggle/ThemeToggle';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 10,
    backgroundColor: theme.palette.background.default, // Sử dụng theme từ Material-UI
    color: theme.palette.text.primary, // Sử dụng theme từ Material-UI
    borderBottom: '1px solid #ccc',
    paddingTop: '10px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '30px',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '15px',
    },
  },
  root: {
    flexGrow: 1,
    width: '80%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  img: {
    width: '18%',
    [theme.breakpoints.up('md')]: {
      width: '8%',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper, // Sử dụng theme từ Material-UI
    borderRadius: theme.shape.borderRadius,
    padding: '5px 10px',
    maxWidth: '100%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '400px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '250px',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '60px',
      overflow: 'hidden',
    },
  },
  input: {
    border: 'none',
    outline: 'none',
    flex: 1,
    fontSize: '10px',
    backgroundColor: 'transparent',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  iconButton: {
    marginRight: theme.spacing(1),
    fontSize: '1.2rem',
    color: theme.palette.text.primary, // Sử dụng theme từ Material-UI
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
  },
  shoppingCartIcon: {
    fontSize: '1.8rem',
  },
  accountCircleIcon: {
    fontSize: '1.8rem',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  },
  link: {
    color: theme.palette.text.primary, // Sử dụng theme từ Material-UI
    textDecoration: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const cartItemsCount = useSelector(cartItemsCountSelector);

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  const handleCartClick = () => {
    history.push('/cart');
  };

  return (
    <div className={classes.header}>
      <Head />

      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <span className={classes.img}>
              <Link to="/">
                <img src={logo} alt='logo' width="100%" />
              </Link>
            </span>

            <Typography variant="h6" className={classes.title}>
              <div className={classes.search}>
                <Search />
              </div>
            </Typography>

            <ThemeToggle />

            <IconButton aria-label="cart" color="inherit" onClick={handleCartClick}>
              <Badge badgeContent={cartItemsCount} color="secondary">
                <ShoppingCart className={classes.shoppingCartIcon} />
              </Badge>
            </IconButton>

            {!isLoggedIn && (
              <Button color="inherit" onClick={handleClickOpen}>
                Login
              </Button>
            )}

            {isLoggedIn && (
              <IconButton color="inherit" onClick={handleUserClick}>
                <AccountCircle className={classes.accountCircleIcon} />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        <Menu
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Menu>

        <LoginDialog open={open} onClose={handleClose} />
      </div>

      <NavBarHeader />
    </div>
  );
};

export default Header;
