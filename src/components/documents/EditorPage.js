import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    gridTemplateColumns: '250px auto',
    gridTemplateRows: `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`,
    width: '100vw',
  },
  sideBar: {
    overflow: 'auto',
  },
  editor: {
    overflow: 'auto',
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
      <div className={classes.sideBar}>
        {documentsListElements}
      </div>
      <DocumentEditor className={classes.editor} />
    </div>
  );
};

EditorPage.defaultProps = {
  documents: [],
};

EditorPage.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object),
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

const DocumentsWithStore = connect(mapStateToProps)(EditorPage);
export default withStyles(styles)(DocumentsWithStore);
