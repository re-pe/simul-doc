
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Option from './Option';
import { modifyDocument } from '../../js/actions/document-actions';

const ITEM_HEIGHT = 48;

const styles = theme => ({
  root: {
    gridArea: 'authors',
    flexGrow: 1,
    height: 250,
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  // We had to use a lot of global selectors in order to style react-select.
  // We are waiting on https://github.com/JedWatson/react-select/issues/1679
  // to provide a much better implementation.
  // Also, we had to reset the default style injected by the library.
  '@global': {
    '.Select-control': {
      display: 'flex',
      alignItems: 'center',
      border: 0,
      height: 'auto',
      background: 'transparent',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    '.Select-multi-value-wrapper': {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
    },
    '.Select--multi .Select-input': {
      margin: 0,
    },
    '.Select.has-value.is-clearable.Select--single > .Select-control .Select-value': {
      padding: 0,
    },
    '.Select-noresults': {
      padding: theme.spacing.unit * 2,
    },
    '.Select-input': {
      display: 'inline-flex !important',
      padding: 0,
      height: 'auto',
    },
    '.Select-input input': {
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'default',
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: 0,
      outline: 0,
    },
    '.Select-placeholder, .Select--single .Select-value': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      padding: 0,
    },
    '.Select-placeholder': {
      opacity: 0.42,
      color: theme.palette.common.black,
    },
    '.Select-menu-outer': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      position: 'absolute',
      left: 0,
      top: `calc(100% + ${theme.spacing.unit}px)`,
      width: '100%',
      zIndex: 2,
      maxHeight: ITEM_HEIGHT * 4.5,
    },
    '.Select.is-focused:not(.is-open) > .Select-control': {
      boxShadow: 'none',
    },
    '.Select-menu': {
      maxHeight: ITEM_HEIGHT * 4.5,
      overflowY: 'auto',
    },
    '.Select-menu div': {
      boxSizing: 'content-box',
    },
    '.Select-arrow-zone, .Select-clear-zone': {
      color: theme.palette.action.active,
      cursor: 'pointer',
      height: 21,
      width: 21,
      zIndex: 1,
    },
    // Only for screen readers. We can't use display none.
    '.Select-aria-only': {
      position: 'absolute',
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      height: 1,
      width: 1,
      margin: -1,
    },
  },
});

const getSuggestions = data =>
  data.map(item => ({ value: item._id, label: item.email.toLowerCase() }));

// const filterBySetAndPropertyNames = (data, set, property) =>
//   data.filter(item => set.indexOf(item[property]) > -1);

const getProperty = (data, property) => data.map(item => item[property]);

function SelectWrapped(props) {
  const {
    classes, ...other
  } = props;

  return (
    <Select
      optionComponent={Option}
      noResultsText={<Typography > No results found </Typography>}
      arrowRenderer={
          arrowProps => (arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)
      }
      clearRenderer={() => <ClearIcon />}
      valueComponent={(valueProps) => {
        const {
          value, children, onRemove,
        } = valueProps;

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
              deleteIcon={
                <CancelIcon onTouchEnd={onDelete} />
              }
              onDelete={onDelete}
            />
          );
        }

        return (<div className="Select-value" >{children}</div>);
      }}
      {...other}
    />
  );
}

SelectWrapped.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

class IntegrationReactSelect extends Component {
  constructor(props) {
    super(props);
    const { id } = props.selectedDocument;
    const authors = getProperty(props.selectedDocument.authors, '_id');
    this.state = {
      // docId: props.selectedDocument._id,
      id,
      authors,
    };
  }

  state={
    id: null,
    authors: [],
  };

  componentWillReceiveProps() {
    const { id } = this.props.selectedDocument;
    const authors = getProperty(this.props.selectedDocument.authors, '_id');
    this.setState({
      id,
      authors,
    });
  }

  componentWillUpdate() {
    this.props.modifyDocument(
      this.state.id,
      { authors: this.state.authors },
    );
  }

  handleChange = (value) => {
    this.setState({ authors: value });
  };

  render() {
    const { classes } = this.props;
    const { authors } = this.state;
    const suggestions = getSuggestions(this.props.userList);


    return (
      <div className={classes.root}>
        <Input
          fullWidth
          inputComponent={SelectWrapped}
          value={authors}
          onChange={this.handleChange}
          placeholder="Select multiple countries"
          name="react-select-chip"
          inputProps={{
            classes,
            multi: true,
            instanceId: 'react-select-chip',
            id: 'react-select-chip',
            // simpleValue: false,
            options: suggestions,
          }}
        />
      </div>
    );
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  userList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  selectedDocument: PropTypes.objectOf(PropTypes.any).isRequired,
  modifyDocument: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selectedDocument: state.documentReducer.selectedDocument,
  userList: state.userReducer.userList,
});

const mapDispatchToProps = dispatch => ({
  modifyDocument: (id, data) => dispatch(modifyDocument(id, data)),
});

export default
withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(IntegrationReactSelect));
