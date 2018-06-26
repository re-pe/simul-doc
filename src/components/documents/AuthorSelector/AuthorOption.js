import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';

class ActionOption extends Component {
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

ActionOption.propTypes = {
  children: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onFocus: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  option: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default ActionOption;
