import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

import DocumentListItem from './DocumentListItem';
import DocumentEditor from './DocumentEditor';


const mapStateToProps = state => ({
  documents: state.documentReducer.documents,
});

const styles = () => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
  },
});

const EditorPage = (props) => {
  const { documents } = props;
  const { classes } = props;
  const documentsListElements = Object.values(documents).map(entry => (
    <DocumentListItem
      key={entry._id}
      id={entry._id}
      title={entry.title}
      created={entry.createdAt}
    />
  ));
  return (
    <div
      className={classes.container}
    >
      <Drawer variant="permanent">
        <div className="list">
          {documentsListElements}
        </div>
      </Drawer>
      <DocumentEditor />
    </div>
  );
};

EditorPage.defaultProps = {
  documents: [],
};

EditorPage.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object),
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

const DocumentsWithStore = connect(mapStateToProps)(EditorPage);
export default withStyles(styles)(DocumentsWithStore);