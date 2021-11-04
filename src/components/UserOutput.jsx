import React from 'react'

class UserOutput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      status: '',
    }
    this.searchWord = this.searchWord.bind(this)
  }

  searchWord() {
    let wordSearched = document.querySelector('.userOutput').value
    if(this.props.check(wordSearched) && this.props.list.includes(wordSearched)) {
      this.setState((prevState) => ({show: true, status: 'Your word is the red one'}))
    } else {
      this.setState((prevState) => ({show: false, status: `Your word isn't in the list`}))
    }
  }

  render() {
    return (
      <div>
        <label htmlFor='userOutput'> Search word </label>
        <input type='text' name='userOutput' className='userOutput'/>
        <input type='submit' name='submit-output' onClick={this.searchWord}/>
        <div className='show'>
          <p>{this.state.status}</p>
          <ol>
            {
              this.props.list.map((word, index) => {
                if(this.state.show && document.querySelector('.userOutput').value === word) {
                  return <li id={index} key={index} style={{color: 'red'}}> {word} </li>
                }
                return<li key={index}> {word} </li>
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default UserOutput
