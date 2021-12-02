import React, {useState} from 'react'

function SearchWords(props) {
  const[userMessage, setUserMessage] = useState(``)

  const check = (e) => {
    if(props.list.includes(e.target.value)) {
      setUserMessage(`Your word is in list`)
    }else {
      setUserMessage(`Your word isn't in list`)
    }
  }

  return (
    <>
      <label>
        Search word
        <input onChange={check} placeholder='search...' autoFocus={true} />
      </label>
      <p>{userMessage}</p>
    </>
  )
}

export default SearchWords
