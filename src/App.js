import React from 'react'
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends React.Component {
  constructor() {
    super()
    this.state =  {
      input: false,
      output: false,
      wordList: []
    }
    this.addWord = this.addWord.bind(this)
  }

  addWord(word) {
    if(this.isWord(word) && this.state.wordList.includes(word) === false) {
      this.setState(prevState => {
        return {
          input: prevState.input,
          output: prevState.output,
          wordList: [...prevState.wordList, word]
        }
      })
    }
    console.log(this.state.wordList)
  }

  isWord(word) {
    let lengthWord = word.length;
    for(let i = 0; i < lengthWord; ++i) {
      if(!word.charAt(i).match(/^[a-zA-Z]+$/)) {
        return false;
      }
    }
    if(lengthWord === 0) {
      return false
    }
    return true
  }

  renderingChoice(component) {
    if(this.state[component] === false) {
      this.setState((prevState) => {
        return {
          input: component === 'input' ? true : false,
          output: component === 'output' ? true : false,
          wordList: prevState.wordList
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          input: false,
          output: false,
          wordList: prevState.wordList
        }
      })
    }
  }

  render() {
    return (
      <div>
        <div className='buttons'>
          <button onClick={() => this.renderingChoice('input')}> Add word </button>
          <button onClick={() => this.renderingChoice('output')}> Search word </button>
        </div>
        {this.state.input ? <UserInput add={this.addWord} /> : ''}
        {this.state.output ? <UserOutput check={this.isWord} list={this.state.wordList} /> : ''}
      </div>
    );
  }
}

export default App;
