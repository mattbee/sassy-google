import React, { Component } from 'react';
import random from 'random';
import './App.css';

const title = 'Sassy Google';
const titleArray = title.split('');
const colours = ['blue', 'green', 'red', 'yellow', 'blue', 'red', 'green', 'pink', 'orange', 'blue', 'red']

const results = [
  'Now that is a good question. You are not a good person.',
  'Why do you need to know that, don\'t you have anything better to do?',
  'Do you think I know everything fuckwad?',
  'How about you look it up in a FUCKING BOOK?',
  'Phone Gillon, he will know.',
  'DID YOU EVEN LISTEN IN SCHOOL?',
  'Fuck me, who doesn\'t know that? I guess you dumbass',
  'HAHA, only fucking pricks do not know that',
  'Did you ask yo ma, if not, I\'ll ask her when she wakes up.',
  'James is probably drunk, but ask him when he is sober.'
];

class App extends Component {
  state = {
    value: '',
    result: '',
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = (event) => {
    this.setState({
      result: results[random.int(0, results.length - 1)]
    });
    event.preventDefault();
  }

  resultText = (result, query) => {
    if(result.length > 1) {
      return(
        <div className="results">
          {result}

          <p className="real-google"><a
            className="App-link"
            href={`https://lmgtfy.com/?q=${query}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Perhaps real Google might be able to help
          </a></p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{titleArray.map((letter, i) => {
            return(<span key={`${letter}-${i}`} style={{color: colours[i]}}>{letter}</span>);
          })}</h1>

          <form onSubmit={this.handleSubmit}>
            <label>

              <input className="query" type="text" placeholder="What do you want to know, stupid?" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br />
            <input type="submit" value="Submit" />
            <a href="https://youtu.be/dQw4w9WgXcQ?t=42" className="link-button">I'm feeling lucky</a>
          </form>

          {this.resultText(this.state.result, this.state.value)}


        </header>
      </div>
    );
  }
}

export default App;
