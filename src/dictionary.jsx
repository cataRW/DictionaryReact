import React, {useState} from 'react'
import AddWords from './dictionaryFunctionalities/addWords'
import SearchWords from './dictionaryFunctionalities/searchWords'
import WordList from './dictionaryFunctionalities/wordList'

function Dictionary() {
  const[wordList, setWordList] = useState([])
  const[currentWord, setCurrentWord] = useState('')
  const[userChoice, setUserChoice] = useState(true)

  const updateWordList = (e) => {
    e.preventDefault()
    if(currentWord.length > 0 && !wordList.includes(currentWord)) {
      setWordList(prevList => [...prevList, currentWord])
    }
    setCurrentWord('')
  }

  const updateCurrentWord = (e) => {
    setCurrentWord(e.target.value)
  }

  const updateChoice = () => {
    let choice = userChoice ? false : true
    setUserChoice(choice)
  }

  let display
  if(userChoice) {
    display = <AddWords word={currentWord} updateWord={updateCurrentWord} updateWordList={updateWordList} />
  }else {
    display = <SearchWords word={currentWord} updateWord={updateCurrentWord} list={wordList} /> 
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
