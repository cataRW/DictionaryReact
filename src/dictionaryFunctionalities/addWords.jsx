import React from 'react'

function AddWords(props) {
  return (
    <form onSubmit={props.updateWordList}>
      <label>
        Add word
        <input value={props.word} onChange={props.updateWord}/>
        <input type='submit' value='send'/>
      </label>
    </form>
  )
}

export default AddWords
