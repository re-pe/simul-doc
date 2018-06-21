
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
import styles from './AUthosSelectorStyle';

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
    const { _id } = props.selectedDocument;
    const authors = getProperty(props.selectedDocument.authors, '_id');
    this.state = {
      _id,
      authors,
    };
  }

  state={
    _id: null,
    authors: [],
  };

  componentWillReceiveProps() {
    const { _id } = this.props.selectedDocument;
    const authors = getProperty(this.props.selectedDocument.authors, '_id');
    this.setState({
      _id,
      authors,
    });
  }

  // componentWillUpdate() {
  //   this.props.modifyDocument(
  //     this.state._id,
  //     { authors: this.state.authors },
  //   );
  // }

  handleChange = (value) => {
    this.setState({ authors: value });
    this.props.modifyDocument(
      this.state._id,
      { authors: value },
    );
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
