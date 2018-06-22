import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';
import Select from 'react-select';
import AuthorOption from './AuthorOption';

const SelectWrapped = (props) => {
  const { classes, ...other } = props;
  const handleArrowRenderer = arrowProps =>
    (arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />);
  const handleValueComponent = (valueProps) => {
    const { value, children, onRemove } = valueProps;

    const onDelete = (event) => {
      event.preventDefault();
      event.stopPropagation();
      onRemove(value);
    };

    if (onRemove) {
      return (
        <Chip
          tabIndex={-1}
          label={children}
          className={classes.chip}
          deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
          onDelete={onDelete}
        />
      );
    }

    return <div className="Select-value">{children}</div>;
  };

  return (
    <Select
      optionComponent={AuthorOption}
      noResultsText={<Typography>No results found</Typography>}
      arrowRenderer={handleArrowRenderer}
      clearRenderer={() => <ClearIcon />}
      valueComponent={handleValueComponent}
      {...other}
    />
  );
};

SelectWrapped.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SelectWrapped;
