import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    stringLen : '',
    string : ''
  };

  changeHandler = (event) => {
    let length = event.target.value.length;
    this.setState({
      stringLen : length,
      string : event.target.value
    });
  }

  charClickHandler = (index, event) => {
    const string = this.state.string;
    const changeString = string.replace(string.charAt(index), '');
    this.setState({
      string : changeString,
      stringLen : changeString.length
    });
  }


  render() {

    let list = (
      <div>
        {this.state.string.split('').map((char, index)=>{
            return <CharComponent character={char} key={index} clicked={this.charClickHandler.bind(this, index)}/>
        })
        }
        </div>
    );

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.changeHandler} value={this.state.string}/>
        Length of string is {this.state.stringLen}
        <Validation textLen = {this.state.stringLen}/>
        {list}
      </div>
    );
  }
}

export default App;
