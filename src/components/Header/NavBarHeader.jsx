import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        padding: '0.5rem 1rem',
        display: 'inline-block',
        '&:hover': {
            color: '#007bff',
            backgroundColor: '#e2e6ea',
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
    },
}));

const NavBarHeader = () => {
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
    ];

    return (
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
    );
};

export default NavBarHeader;
