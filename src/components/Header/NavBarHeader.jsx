import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navLink: {
        color: '#000',
        textDecoration: 'none',
        padding: '0rem 0rem',
        margin: '0 0.5rem',
        display: 'inline-block',
        position: 'relative',
        fontSize: '0.8rem',
        '&:hover': {
            color: '#007bff',
            backgroundColor: '#e2e6ea',
            '&::after': {
                width: '100%',
            },
        },
        '&::after': {
            content: "''",
            position: 'absolute',
            width: 0,
            height: '4px',
            backgroundColor: 'blue',
            bottom: '-1px',
            left: 0,
            transition: 'width 1s ease',
        },
    },
    activeNavLink: {
        fontWeight: 'bold',
        color: '#007bff',
        '&::after': {
            width: '100%',
        },
    },
    header2: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5px 0',
    },
    navbarContainer: {
        maxWidth: '800px',
        width: '100%',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
    },
    navbarToggler: {
        padding: '0.15rem 0.3rem',
    },
}));

const NavBarHeader = () => {
    const classes = useStyles();
    const [collapsed, setCollapsed] = useState(true);
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    const toggleNavbar = () => setCollapsed(!collapsed);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    return (
        <div className={classes.header2}>
            <Container className={classes.navbarContainer}>
                <Navbar color="faded" light expand="md">
                    <NavbarToggler onClick={toggleNavbar} className={`me-2 ${classes.navbarToggler}`} />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link
                                    to="/home"
                                    className={`${classes.navLink} ${(activeTab === '/home' || activeTab === '/') ? classes.activeNavLink : ''}`}
                                >
                                    TRANG CHỦ
                                </Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle
                                    nav
                                    caret
                                    className={`${classes.navLink} ${activeTab.startsWith('/products') ? classes.activeNavLink : ''}`}
                                >
                                    DANH MỤC SẢN PHẨM
                                </DropdownToggle>
                                <DropdownMenu end>
                                    {[
                                        { id: 1, name: 'Thời trang' },
                                        { id: 2, name: 'Khẩu trang' },
                                        { id: 3, name: 'Làm đẹp' },
                                        { id: 4, name: 'LapTop' },
                                        { id: 5, name: 'Ổ cứng' },
                                        { id: 6, name: 'Điện thoại' },
                                    ].map((item, index) => (
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
                                <Link
                                    to="/news"
                                    className={`${classes.navLink} ${activeTab === '/news' ? classes.activeNavLink : ''}`}
                                >
                                    TIN TỨC
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/about"
                                    className={`${classes.navLink} ${activeTab === '/about' ? classes.activeNavLink : ''}`}
                                >
                                    GIỚI THIỆU
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/contact"
                                    className={`${classes.navLink} ${activeTab === '/contact' ? classes.activeNavLink : ''}`}
                                >
                                    LIÊN LẠC
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBarHeader;
