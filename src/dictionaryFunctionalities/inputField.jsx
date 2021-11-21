import React from 'react'

function InputField(props) {

  return(
    <form onSubmit={props.handleSubmit}>
      <label>
        {props.type} your word here
        <input type='text' value={props.value} onChange={props.handleChange} autoFocus={true} />
        {props.type === 'Add' && <input type='submit' value={props.type} />}
      </label>
    </form>
  )
}

export default InputField
