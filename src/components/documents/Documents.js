import React from 'react';
// import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import data from './DocumentList';

class Documents extends React.Component {
  state = {
    left: false,
  };

  showDocumentList = open => () => {
    this.setState({
      left: open,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showDocumentList(true)}>Show document list</Button>
        <Drawer open={this.state.left} onClose={this.showDocumentList(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.showDocumentList(false)}
            onKeyDown={this.showDocumentList(false)}
          >
            {data}
          </div>
        </Drawer>
      </div>
    );
  }
}

// TemporaryDrawer.propTypes = {
// };

export default Documents;

