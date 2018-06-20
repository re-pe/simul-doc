import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {withStyles,} from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Input from '@material-ui/core/Input';
// import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import CancelIcon from '@material-ui/icons/Cancel';
// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
// import ClearIcon from '@material-ui/icons/Clear';
// import Chip from '@material-ui/core/Chip';
// import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Option extends Component {
  handleClick = event => this.props.onSelect(this.props.option, event);

  render() {
    const {
      children, isFocused, isSelected, onFocus,
    } = this.props;

    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        {children}
      </MenuItem>
    );
  }
}

Option.propTypes = {
  // classes: PropTypes.objectOf(PropTypes.any).isRequired,
  // userList: PropTypes.arrayOf(PropTypes.object).isRequired,
  // selectedDocument: PropTypes.objectOf(PropTypes.any).isRequired,
  // modifyDocument: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  option: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onFocus: PropTypes.func.isRequired,
};

export default Option;
