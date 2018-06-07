import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

import DocumentListItem from './DocumentListItem';
import DocumentEditor from './DocumentEditor';
import { HEADER_HEIGHT, FOOTER_HEIGHT } from '../../js/constants/constants';


const mapStateToProps = state => ({
  documents: state.documentReducer.documents,
});

const styles = () => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
  },
  sideBar: {
    height: `calc(100% - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`,
    top: HEADER_HEIGHT,
  },
});

const EditorPage = (props) => {
  const { documents, classes } = props;
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
      <Drawer variant="permanent" classes={{ paper: classes.sideBar }}>
        <div>
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
