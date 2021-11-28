import React from 'react'

function SearchWords(props) {
  let userMessage =''
  if(props.word !== '' && props.list.includes(props.word)) {
    userMessage = 'The word is in list'
  }else if(props.word !== '') {
    userMessage = 'The word is not in list'
  }

  return (
    <>
      <label>
        Search word
        <input onChange={props.updateWord} autoFocus={true}/>
      </label>
      <p>{userMessage}</p>
    </>
  )
}

export default SearchWords

