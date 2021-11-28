import React, {useState} from 'react'
import AddWords from './dictionaryFunctionalities/addWords'
import SearchWords from './dictionaryFunctionalities/searchWords'
import WordList from './dictionaryFunctionalities/wordList'

function Dictionary() {
  const[wordList, setWordList] = useState([])
  const[currentWord, setCurrentWord] = useState('')
  const[userChoice, setUserChoice] = useState(true)

  const updateWordList = (word) => {
    setWordList(prevList => [...prevList, word])
  }

  const updateCurrentWord = (e) => {
    setCurrentWord(e.target.value)
  }

  const updateChoice = () => {
    let choice = userChoice ? false : true
    setUserChoice(choice)
    setCurrentWord('')
  }

  let display
  if(userChoice) {
    display = <AddWords  updateWordList={updateWordList} list={wordList} />
  }else {
    display = <SearchWords updateWord={updateCurrentWord} list={wordList} word={currentWord}/> 
  }

  return(
    <fieldset>
      <legend> Dictionary </legend>
      <button onClick={updateChoice}> {userChoice ? 'Search' : 'Add'} </button>
      <br></br>
      {display}
      <WordList word={currentWord} list={wordList} choice={userChoice} />
    </fieldset>
  )
}

export default Dictionary;
