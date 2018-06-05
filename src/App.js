import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

const styles = () => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: 'auto auto 100px',
  },
});

const App = (props) => {
  const { classes } = props;
  return (
    <div
      className={classes.container}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default withStyles(styles)(App);
