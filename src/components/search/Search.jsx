import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, List, ListItem, Dialog, DialogTitle, DialogContent, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({

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
    suggestionList: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
        maxHeight: '300px',
        overflowY: 'auto',
        zIndex: 1000,
    },
    suggestionItem: {
        padding: '10px',
        cursor: 'pointer',
        color: '#000', // Đổi màu văn bản thành đen
        '&:hover': {
            backgroundColor: '#f0f0f0',
        },
    },
    searchButton: {
        marginLeft: theme.spacing(1),
    },
}));


const Search = () => {
    const classes = useStyles();
    const history = useHistory();
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        // Fetch products
        const fetchProducts = async () => {
            try {
                const productsResponse = await axios.get('https://api.ezfrontend.com/products');
                setProducts(productsResponse.data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query.trim()) {
            // Filter products based on search query
            const results = products.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const handleProductSelect = (product) => {
        setSearchQuery('');
        setSearchResults([]);
        history.push(`/products/${product.id}`);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            setOpenDialog(true);
        }
    };

    return (
        <div className={classes.search}>
            <form onSubmit={handleSearchSubmit}>
                <SearchIcon className={classes.iconButton} />
                <input
                    type="text"
                    placeholder="Search and hit enter..."
                    className={classes.input}
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                />
            </form>

            {searchQuery && searchResults.length > 0 && (
                <List className={classes.suggestionList}>
                    {searchResults.map((product) => (
                        <ListItem
                            key={product.id}
                            className={classes.suggestionItem}
                            onClick={() => handleProductSelect(product)}
                        >
                            <Typography>{product.name}</Typography>
                        </ListItem>
                    ))}
                </List>
            )}

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Search Results</DialogTitle>
                <DialogContent>
                    <List>
                        {searchResults.map((product) => (
                            <ListItem
                                key={product.id}
                                className={classes.suggestionItem}
                                onClick={() => handleProductSelect(product)}
                            >
                                <Typography>{product.name}</Typography>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Search;
