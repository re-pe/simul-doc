import React, { Fragment } from 'react'
import TextField from 'material-ui/TextField'

const DocRegForm = props => {
  return (
    <Fragment>
      <h2>Register new Document</h2>
      <div>Owner:<br /><TextField hintText='Owner' /></div>
      <div>Title:<br /><TextField hintText='Title' /></div>
      <div>Content:<br /><TextField hintText='Content' /></div>
      <div>Authors:<br /><TextField hintText='Authors' /></div>
    </Fragment>
  )
}

export default DocRegForm
