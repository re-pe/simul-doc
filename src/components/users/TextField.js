import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class ValidatingTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: null,
      validationResult: null,
    };
  }

    validate = (event) => {
      const { value } = event.target.value;
      const { name } = event.target.name;
      this.setState({ value });
      if (this.props.validationFn) {
        const result = this.props.validationFn(value);
        this.setState({ validationResult: result });
      }
    }

    render() {
      const {
        input,
        label,
        type,
        meta: { touched, error },
      } = this.props;

      return (
        <div className="formTextField">
          <TextField
            label={label}
            type={type || 'input'}
            {...input}
          />
        </div>
      );
    }
}


export default ValidatingTextField;

//   render () {
//     let { name, type, hintText, floatingLabelText } = this.props
//     let propsToSet = {
//       name,
//       type,
//       hintText,
//       floatingLabelText
//     }
//     return (
//       <TextField
//         {...propsToSet}
//         errorText={this.state.validationResult}
//         onChange={this.validate}
//         onBlur={this.validate}
//             />
//     )
//   }
// }
