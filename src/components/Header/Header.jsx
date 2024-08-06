import { Badge, Box, IconButton, InputBase, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close, ShoppingCart } from '@material-ui/icons';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { logout } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { cartItemsCountSelector } from 'features/cart/selectors';

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
    width: '20%'
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },

  input: {
    borderBottom: '1px solid black',
    color: 'white',
    '&::placeholder': {
      color: 'white',
      margin: '10px'
    },
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '300px',
    },
    [theme.breakpoints.up('md')]: {
      width: '500px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '800px',
    },
  },
  navLink: {
    color: '#000',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    display: 'inline-block',
    '&:hover': {
      color: '#007bff',
      backgroundColor: '#e2e6ea'
    },
    '&.active': {
      fontWeight: 'bold',
      color: '#007bff',
    },
  },
  header2: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
  }

}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
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

  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const listCatagories = [
    { id: 1, name: 'Thời trang' },
    { id: 2, name: 'Khẩu trang' },
    { id: 3, name: 'Làm đẹp' },
    { id: 4, name: 'LapTop' },
    { id: 5, name: 'Ổ cứng' },
    { id: 6, name: 'Điện thoại' },
  ]
  const handleCartClick = () => {
    history.push('/cart');
  };
  return (
    <div className={classes.header}>
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
                  <InputBase className={classes.input}
                    autoFocus
                    placeholder="Nhập nội dung cần tìm…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
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

        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <Close />
          </IconButton>

          <DialogContent>
            {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose} />

                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                    Already have an account. Login here
                  </Button>
                </Box>
              </>
            )}

            {mode === MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose} />

                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                    Dont have an account. Register here
                  </Button>
                </Box>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
      <Container className={classes.header2}>
        <Navbar color="faded" light expand="md">
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/home" className={classes.navLink}>
                  TRANG CHỦ
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className={classes.navLink}>
                  DANH MỤC SẢN PHẨM
                </DropdownToggle>
                <DropdownMenu end>
                  {listCatagories.map((item, index) => (
                    <DropdownItem key={index}>
                      <NavItem>
                        <Link
                          to={`/products?_sort=salePrice%3AASC&category.id=${item.id}`}
                          className={classes.navLink}
                        >
                          {item.name}
                        </Link>
                      </NavItem>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/news" className={classes.navLink}>
                  TIN TỨC
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className={classes.navLink}>
                  GIỚI THIỆU
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className={classes.navLink}>
                  LIÊN LẠC
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
