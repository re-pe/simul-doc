import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';

const SuggestionList = ({
  suggestion, index, itemProps, highlightedIndex, selectedItem,
}) => {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.id) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.email}
    </MenuItem>
  );
};

SuggestionList.defaultProps = {
  highlightedIndex: undefined,
  index: undefined,
  itemProps: {},
  selectedItem: [],
  suggestion: {},
};

SuggestionList.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.objectOf(PropTypes.any),
  selectedItem: PropTypes.arrayOf(PropTypes.any),
  suggestion: PropTypes.shape({ label: PropTypes.string }),
};

export default SuggestionList;
