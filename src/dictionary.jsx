import React, {useState} from 'react'
import InputField from './dictionaryFunctionalities/inputField'
import WordList from './dictionaryFunctionalities/wordList'

function Dictionary() {
  const[wordList, setWordList] = useState([])
  const[currentWord, setCurrentWord] = useState('')
  const[nameField, setNameField] = useState('')
  const[userMessage, setUserMessage] = useState('')

  const handleChange = (e) => {
    let newDisplay = nameField === e.target.name ? '' : e.target.name
    setNameField(newDisplay)
    setCurrentWord('')
    setUserMessage('')
  }

  const changeCurrentWord = (e) => {
    setCurrentWord(e.target.value)
  }

  const addInList = () => {
    if(!wordList.includes(currentWord)) {
      setWordList(prevList => [...prevList, currentWord])
    }
  }

  const checkInput = () => {
    if(currentWord.match(/^[a-zA-Z]+$/)) {
      return true
    }
    return false
  }

  const makeChanges = (e) => {
    e.preventDefault()
    setUserMessage('')
    if(!checkInput()) {
      setUserMessage('Your word must contains just letter')
    }else if(nameField === 'Add') {
        addInList()
        setCurrentWord('')
    }
  }

  return(
    <>
      <button name='Add' onClick={handleChange}> Add word </button>
      <button name='Search' onClick={handleChange}> Search word </button>
      <p> {userMessage} </p>
      {nameField !== '' && <InputField handleSubmit={makeChanges} value={currentWord} handleChange={changeCurrentWord} type={nameField}/>}
      {nameField === 'Search' && <WordList currentWord={currentWord} wordList={wordList} />}
    </>
  )
}

export default Dictionary

