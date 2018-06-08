import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from './js/constants/constants';

const styles = () => ({
  appContainer: {
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
      className={classes.appContainer}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};


export default withStyles(styles)(App);
