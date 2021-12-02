import React, {useState} from 'react'
import AddWords from './dictionaryFunctionalities/addWords'
import SearchWords from './dictionaryFunctionalities/searchWords'
import WordList from './dictionaryFunctionalities/wordList'

function Dictionary() {
  const[wordList, setWordList] = useState([])
  const[userChoice, setUserChoice] = useState(true)

  const updateWordList = (word) => {
    setWordList(prevList => [...prevList, word])
  }

  const updateChoice = () => {
    let choice = userChoice ? false : true
    setUserChoice(choice)
  }

  let display
  if(userChoice) {
    display = <AddWords  updateWordList={updateWordList} list={wordList} />
  }else {
    display = <SearchWords list={wordList} />
  }

  return(
    <fieldset>
      <legend> Dictionary </legend>
      <button onClick={updateChoice}> {userChoice ? 'Search' : 'Add'} </button>
      <br></br>
      {display}
      <WordList list={wordList} />
    </fieldset>
  )
}

export default Dictionary;
