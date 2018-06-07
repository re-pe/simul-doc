import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { CssBaseline } from '@material-ui/core';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from './js/constants/constants';

const styles = () => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: `${HEADER_HEIGHT} auto ${FOOTER_HEIGHT}`,
    width: '100vw',
    height: '100vh',
  },
});

const App = (props) => {
  const { classes } = props;
  return (
    <div
      className={classes.container}
    >
      <CssBaseline />
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
