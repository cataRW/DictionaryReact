import React from 'react'

function WordList(props) {
  let message = props.currentWord !== '' ? `Your word isn't in the list` : ''
  let list = props.wordList.map((item, id) => {
    if(item === props.currentWord) {
      message = 'Your word is in list, is the red one'
      return <li key={id} style={{color: 'red'}}>{item}</li>
    }
    return <li key={id}>{item}</li>
  })

  return(
    <>
      <p>{message}</p>
      <ol>{list}</ol>
    </>
  )
}

export default WordList
