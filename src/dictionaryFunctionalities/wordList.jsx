import React from 'react'

function WordList(props) {
  let list = props.list.map(item => {
    if(item === props.word && props.choice !== 'add') {
      return <li style={{color: 'red'}} key={item.toString()}> {item} </li>
    }
    return <li> {item} </li>
  })

  return (
    <div>
      <ol>{list}</ol>
    </div>
  )
}

export default WordList
