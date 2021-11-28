import React from 'react'

function AddWords(props) {
  const addInList = (e) => {
    e.preventDefault()
    let wordToAdd = document.querySelector('.input-add').value
    if(wordToAdd.length > 0 && !props.list.includes(wordToAdd)) {
      props.updateWordList(wordToAdd)
    }
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={addInList}>
      <label>
        Add word
        <input className='input-add' placeHolder='add...'  autoFocus={false}/>
        <input type='submit' value='send'/>
      </label>
    </form>
  )
}

export default AddWords
