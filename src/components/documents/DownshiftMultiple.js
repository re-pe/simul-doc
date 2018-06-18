import React, { Component } from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Downshift from 'downshift';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import SuggestionList from './SuggestionList';
import AuthorField from './AuthorField';

class DownshiftMultiple extends Component {
  state = {
    inputValue: '',
    selectedItem: [],
  };

  getSuggestions = (inputValue) => {
    if (!inputValue) return [];
    return this.props.users
      .map(user => ({ label: user.email }))
      .filter(suggestion => (
        !inputValue ||
            suggestion.label.toLowerCase()
              .indexOf(inputValue.toLowerCase()) === 0));
  }

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
  };

  handleDelete = item => () => {
    const selectedItem = [...this.state.selectedItem];
    selectedItem.splice(selectedItem.indexOf(item), 1);
    this.setState({ selectedItem });
  };

  render() {
    const { classes } = this.props;
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
                startAdornment: selectedItem.map(item => (
                  <Chip
                    key={item}
                    tabIndex={-1}
                    label={item}
                    className={classes.chip}
                    onDelete={this.handleDelete(item)}
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
                    key={index.toLowerCase}
                    suggestion={suggestion}
                    index={index}
                    itemProps={getItemProps({ item: suggestion.label })}
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
};

export default DownshiftMultiple;
