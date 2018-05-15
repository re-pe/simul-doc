import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import ValidatingTextField from './ValidatingTextField'

class CustomForm extends Component {
  state = {
    fieldsValues: {},
    validFields: {}
  }

  constructor (props) {
    super(props)

    const { children } = this.props
    this.childrenWithProps = React.Children.map(children, child => {
      if (child.props.name) {
        return React.cloneElement(child, {
          onValueChange: this.onFieldValueChange
        })
      } else {
        return React.cloneElement(child)
      }
    })
  }

  componentDidMount () {
    this.setState({
      validFields: this.childrenWithProps
                .filter(field => field.props.name !== undefined)
                .reduce((store, field) => {
                  store[field.props.name] = false
                  return store
                }, {})
    })
  }

  handleSubmit = () => {
    if (this.props.onSubmitCallback) {
      this.props.onSubmitCallback(this.state.fieldsValues)
    }
  }

  onFieldValueChange = (fieldName, fieldValue, hasError) => {
    this.setState(prevState => ({
      fieldsValues: Object.assign({}, prevState.fieldsValues, {
        [fieldName]: fieldValue
      }),
      validFields: Object.assign({}, prevState.validFields, {
        [fieldName]: !hasError
      })
    }))
  }

  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>

        {this.childrenWithProps}

        <RaisedButton
          label={this.props.buttonText}
          primary
          disabled={
                        !Object.values(this.state.validFields).every(
                            field => field === true
                        )
                    }
          onClick={this.handleSubmit}
                />
      </div>
    )
  }
}

export default CustomForm
