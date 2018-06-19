import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import keycode from 'keycode';
import Downshift from 'downshift';
import { Paper, Chip } from '@material-ui/core';
import SuggestionList from './SuggestionList';
import AuthorField from './AuthorField';
import { modifyDocument } from '../../js/actions/document-actions';

const mapStateToProps = state => ({
  selectedDocument: state.documentReducer.selectedDocument,
  users: state.userReducer.userList,
});

const mapDispatchToProps = dispatch => ({
  modifyDocument: (id, data) => dispatch(modifyDocument(id, data)),
});

class DownshiftMultiple extends Component {
  constructor(props) {
    super(props);
    this.state.selectedItem = this.filterDataByProperty(this.props.selectedDocument.authors, '_id');
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  state = {
    inputValue: '',
    selectedItem: [],
    selectedDocument: {},
  };

  componentWillReceiveProps = () => {
    this.setState({
      selectedItem:
        this.filterDataByProperty(this.props.selectedDocument.authors, '_id'),
    });
  }

  getSuggestions = inputValue =>
    ((!inputValue && []) ||
      this.props.users.filter(item =>
        item.email.toLowerCase().indexOf(inputValue.toLowerCase()) === 0));


  filterDataById = (data, ids, property) => data.filter(item => ids.indexOf(item[property]) > -1);

  filterDataByProperty = (data, property) => data.map(item => (item[property]));

  handleKeyDown = (event) => {
    const { inputValue, selectedItem } = this.state;
    if (selectedItem.length && !inputValue.length && keycode(event) === 'backspace') {
      this.setState({
        selectedItem: selectedItem.slice(0, selectedItem.length - 1),
      });
    }
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleChange = (item) => {
    let { selectedItem } = this.state;

    if (selectedItem.indexOf(item) === -1) {
      selectedItem = [...selectedItem, item];
    }

    this.setState({
      inputValue: '',
      selectedItem,
    });

    const data = {
      authors: selectedItem,
    };

    this.props.modifyDocument(this.props.selectedDocument._id, data);
  };

  handleDelete = (item) => {
    const selectedItem = [...this.state.selectedItem];
    selectedItem.splice(selectedItem.indexOf(item), 1);
    const data = {
      authors: selectedItem,
    };

    this.props.modifyDocument(this.props.selectedDocument._id, data);

    return this.setState({ selectedItem });
  };

  render() {
    const { classes, users } = this.props;
    const { inputValue, selectedItem } = this.state;

    return (
      <Downshift
        inputValue={inputValue}
        onChange={this.handleChange}
        selectedItem={selectedItem}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue: inputValue2,
          selectedItem: selectedItem2,
          highlightedIndex,
        }) => (
          <div className={classes.container}>
            <AuthorField
              fullWidth
              classes={classes}
              InputProps={getInputProps({
                startAdornment: this.filterDataById(users, selectedItem, '_id')
                .map(item => (
                  <Chip
                    key={item.email}
                    tabIndex={-1}
                    label={item.email}
                    className={classes.chip}
                    onDelete={this.handleDelete(item._id)}
                  />
                )),
                onChange: this.handleInputChange,
                onKeyDown: this.handleKeyDown,
                placeholder: 'Select authors',
                id: 'integration-downshift-multiple',
              })}
            />
            {isOpen ? (
              <Paper className={classes.paper} square>
                {this.getSuggestions(inputValue2)
                  .map((suggestion, index) =>
                  (<SuggestionList
                    key={suggestion._id}
                    suggestion={suggestion}
                    index={index}
                    itemProps={getItemProps({ item: suggestion._id })}
                    highlightedIndex={highlightedIndex}
                    selectedItem={selectedItem2}
                  />))}
              </Paper>
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

DownshiftMultiple.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedDocument: PropTypes.objectOf(PropTypes.any).isRequired,
  modifyDocument: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DownshiftMultiple);
