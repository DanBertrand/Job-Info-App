/* eslint-disable no-unused-vars */
// import './style.scss';
import Search from 'antd/lib/transfer/search';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar/index';
import DisplayResults from './components/displayResults/index';
import uuid from 'react-uuid';
 
const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [heroes, setHeroes] = useState([]);

  const saveQuery = (e) => {
     if(e){
      console.log("E", e)
      e.preventDefault();
       setQuery(e.target.value);
    }
  };

  useEffect(() => {
    const url = 'http://api.dataatwork.org/v1/jobs/autocomplete?contains=';
    const fetchData = async () => {
      const response = await fetch(url + query);
      const json = await response.json();
      if(json.error){
        setData([json.error.code, json.error.message])
        return
      }
      console.log("ResponseJson: ", json.error)
      localStorage.setItem(uuid(), json);
      setData(json.slice(0,10));
    };
    fetchData();
  }, [query]);

  console.log("DATA: ", data)
  return (
    <>
    <p>Hello World</p>
      <SearchBar saveQuery={saveQuery} data={data} />
      {query && <DisplayResults data={data}/>}
    </>
  )
};
 
ReactDOM.render(<App />, document.getElementById('root'));
