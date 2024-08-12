import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  notFoundContainer: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333',
    textAlign: 'center',
  },
  errorCode: {
    fontSize: '8rem',
    fontWeight: 'bold',
    color: '#f44336',
  },
  errorMessage: {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
  },
  errorDescription: {
    fontSize: '1.25rem',
    marginBottom: theme.spacing(4),
  },
  button: {
    fontSize: '1.25rem',
    padding: theme.spacing(1.5, 3),
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container className={classes.notFoundContainer}>
      <div className={classes.errorCode}>404</div>
      <div className={classes.errorMessage}>Oops! Page Not Found</div>
      <div className={classes.errorDescription}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        component={Link}
        to="/"
      >
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFound;
