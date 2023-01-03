import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';



function App() {

  function isPalindrome (word: string): boolean {
    const regex = '(/^a-zA-Z0-9 ]/g';
    word = word.toLowerCase().replace(regex, '');
    const stringSize = word.length;

    for(var i = 0; i < stringSize / 2; i++) {
      if(word[i] !== word[stringSize - 1 - i])

      return false
    }

      return true
  }

  console.log(isPalindrome("Arara é arara"))


  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export default App;
