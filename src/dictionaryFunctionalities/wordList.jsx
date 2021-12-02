import React from 'react'

function WordList(props) {
  let list = props.list.map(item => <li key={item.toString()}> {item} </li>)

  return (
    <div>
      <ol>{list}</ol>
    </div>
  )
}

export default WordList
