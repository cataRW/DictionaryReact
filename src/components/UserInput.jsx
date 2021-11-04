import React from 'react'

class UserInput extends React.Component {
  constructor(props) {
    super(props)
    this.addingWords = this.addingWords.bind(this)
  }

  addingWords() {
    const word = document.querySelector('.userInput').value;
    this.props.add(word)
  }

  render() {
    return (
      <div>
        <label htmlFor='userInput'> Add word </label>
        <input type='text' name='userInput' className='userInput' />
        <input type='submit' name='submit-input' onClick={this.addingWords} />
      </div>
    )
  }
}

export default UserInput
