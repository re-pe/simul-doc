import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class CustomForm extends Component {
  state = {
    fieldsValues: {},
    validFields: {}
  }

  constructor (props) {
    super(props)

    const { children } = this.props
    this.childrenWithProps = React.Children.map(children, child => {
      return child.props.name
                ? React.cloneElement(child, {
                  onValueChange: this.onFieldValueChange
                })
                : child
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
