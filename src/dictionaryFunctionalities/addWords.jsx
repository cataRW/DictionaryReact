import React from 'react'

function AddWords(props) {
  const addWordInList = (e) => {
    e.preventDefault()

    let word = document.querySelector('.wordToAdd').value
    let msg = document.querySelector('.add-message')

    if(word.length > 0) {
      props.updateList(word)
    }else {
      msg.innerText = 'Type at least one letter'
      setTimeout(() => msg.innerText = '', 1000)
    }

    e.target.reset()
  }

  return (
    <form onSubmit={addWordInList}>
      <input className='wordToAdd' placeholder='add...' autoFocus={true}/>
      <input type='submit' value='add' />
      <p className='add-message'> </p>
    </form>
  )
}

export default AddWords

