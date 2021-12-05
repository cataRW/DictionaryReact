import React, {useState} from 'react'
import AddWords from './dictionaryFunctionalities/addWords'
import SearchWords from './dictionaryFunctionalities/searchWords'

function Dictionary() {
  const[list, setList] = useState([])

  const updateList = (word) => {
    if(!list.includes(word)) {
      setList((prevList) => [...prevList, word])
    }
  }

  let showList = list.map((word) => <li key={word.toString()}> {word} </li>)

  return(
    <fieldset>
      <legend>My dictionary</legend>
      <AddWords updateList={updateList} />
      <SearchWords list={list} />
      <ul> {showList} </ul>
    </fieldset>
  )
}

export default Dictionary;
