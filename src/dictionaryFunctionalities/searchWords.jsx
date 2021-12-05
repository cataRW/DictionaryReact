import React from 'react'

function SearchWords(props) {
  const checkWord = (e) => {
    e.preventDefault()

    let word = document.querySelector('.wordToCheck')
    let msg = document.querySelector('.search-message')

    if(props.list.includes(word.value)) {
      msg.innerText = 'Your word is in list'
    }else {
      msg.innerText = `Your word ins't in list`
    }

    setTimeout(() => {
      msg.innerText=''
    }, 1000)

    e.target.reset()
  }

  return (
    <form onSubmit={checkWord}>
      <input className='wordToCheck' placeholder='search...' />
      <input type='submit' value='search' />
      <p className='search-message'></p>
    </form>
  )
}

export default SearchWords
