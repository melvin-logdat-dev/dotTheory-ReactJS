import React, {useState, useEffect} from 'react'
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('cats');
  const [isLoading, setIsLoading] = useState(true);

  const performSearch = (value) => setQuery(value);

  useEffect(()=>{
    axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=5UqPMaX9UekmA48tgCXa8rmkhrU8kPjU&`)
    .then(response => setData(response.data.data))
    .catch(error => console.log('Error fetching and parsing data', error))
    .finally(()=>setIsLoading(false));
  }, [query])
  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch ={performSearch}/>
        </div>
      </div>
      <div className="main-content">
        {isLoading ? <p>...loading</p>: <GifList data ={data}/>}
      </div>
    </>
  );
}

export default App

