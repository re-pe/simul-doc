import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Feature from './feature';

const home = () => (
  <div>
    <Typography align="center" variant="display4" noWrap >
        Simul-docs
    </Typography>
    <Typography align="center" variant="display1" noWrap gutterBottom >
        Online document manager. Alpha version
    </Typography>
    <div className="featureContainer">
      <Grid container spacing={24} justify="center" >
        <Grid item xs={6} align="center" >
          <Feature
            title="Store"
            description="Free unlimited storage for your documents"
            img="feature-store-icon"
          />
        </Grid>
        <Grid item xs={6}>
          <Feature
            title="Share"
            description="Easy way to share documents with other users"
            img="feature-share-icon"
          />
        </Grid>
        <Grid item xs={6}>
          <Feature
            title="Co-edit"
            description="Ability to simultaneously edit same document and watch changes on-air"
            img="feature-edit-icon"
          />
        </Grid>
        <Grid item xs={6}>
          <Feature
            title="Format"
            description="Ability to format document using markdown"
            img="feature-format-icon"
          />
        </Grid>
      </Grid>
    </div>
    <Typography align="center" variant="caption" noWrap >
      Copyright &copy;2018 Simul-docs
    </Typography>
  </div>
);

home.propTypes = {

};

export default home;
