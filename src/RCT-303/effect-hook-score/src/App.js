import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [ message ] = useState('Welcome!');
  const [ data, setData ] = useState('');
  // The effect happens after render
  useEffect(() => {
    document.title = `${message}. Your score is ${score}`;
  }, [message, score]); 

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data =>setData(data.message))
    .catch(err => console.log('Something went wrong!', err))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>{ message}</h1>
        <h2>{ score }</h2>
        <button onClick={() => setScore(prevScore => prevScore + 1)}>
          Increase score
        </button>
        <button onClick={() => setScore(prevScore => prevScore - 1)}>
          Decrease score
        </button>
        <button onClick={() => setScore(0)}>
          Reset score
        </button>
      </header>
      <div className="App" style={{maxWidth: '600px', margin: '0 auto',  padding: '0 0 20px'}}>
        <h2>Dog Breed</h2>
        <img src={data} alt="A random dog breed" style={{width: '100%'}}/>
      </div>
    </div>
  );
}

export default App;
