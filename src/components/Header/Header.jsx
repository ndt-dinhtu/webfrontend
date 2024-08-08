import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Button, Badge, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';
import { logout } from 'features/Auth/userSlice';
import { cartItemsCountSelector } from 'features/cart/selectors';
import logo from '../../assets/logo.png';
import Head from './Head';
import LoginDialog from './LoginDialog';
import NavBarHeader from './NavBarHeader';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  img: {
    width: '20%',
  },
}));

const Header = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const history = useHistory();

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
    const action = logout();
    dispatch(action);
  };

  const handleCartClick = () => {
    history.push('/cart');
  };

  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Head />

      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <span className={classes.img}>
              <Link to="/">
                <img src={logo} alt='logo' width="60%" />
              </Link>
            </span>

            <Typography variant="h6" className={classes.title}>
              <Link className={classes.link} to="">
                <div className={classes.search}>
                  <div className='search-box f_flex'>
                    <i className='fa fa-search'></i>
                    <input type='text' placeholder='Search and hit enter...' />
                    <span>All Category</span>
                  </div>
                </div>
              </Link>
            </Typography>
            <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleCartClick}>
              <Badge badgeContent={cartItemsCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>

            {!isLoggedIn && (
              <Button color="inherit" onClick={handleClickOpen}>
                Login
              </Button>
            )}

            {isLoggedIn && (
              <IconButton color="inherit" onClick={handleUserClick}>
                <AccountCircle />
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
