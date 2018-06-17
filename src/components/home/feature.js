import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const feature = props => (
  <div className="feature">
    <Grid container spacing={16} justify="center" >
      <Grid item xs={4} >
        <img src={`img/${props.img}.png`} alt={`icon ${props.title}`} />
      </Grid>
      <Grid item xs={8}>
        <Typography align="center" variant="title" noWrap gutterBottom >
          {props.title}
        </Typography>
        <Typography align="left" variant="subheading" >
          {props.description}
        </Typography>
      </Grid>
    </Grid>
  </div>
);

feature.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

feature.defaultProps = {
  img: 'feature-icon',
};

export default feature;
