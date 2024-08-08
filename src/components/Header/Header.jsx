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
    paddingTop: '40px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '30px',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '15px',
    },
  },
  root: {
    flexGrow: 1,
    width: '60%',
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
    backgroundColor: '#f1f1f1',
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
    padding: '5px',
    fontSize: '14px',
    backgroundColor: 'transparent',
    [theme.breakpoints.down('xs')]: {
      display: 'none',

    },
  },
  iconButton: {
    marginRight: theme.spacing(1),
    fontSize: '1.2rem',
    color: '#000',
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
    color: '#000',
    textDecoration: 'none',
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
                <img src={logo} alt='logo' width="100%" />
              </Link>
            </span>

            <Typography variant="h6" className={classes.title}>
              <div className={classes.search}>
                <i className={`fa fa-search ${classes.iconButton}`}></i>
                <input
                  type="text"
                  placeholder="Search and hit enter..."
                  className={classes.input}
                />
                <Button color='primary'>Full</Button>
              </div>
            </Typography>

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
