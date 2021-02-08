import React from 'react'
import uuid from 'react-uuid';
 
const DisplayResults = ( { data } ) => {
  return (
    <>
      {data[0] === 404 ? <p>{data[0]} - {data[1]}</p> : data.map(result => <h1 key={uuid()} >{result.suggestion}</h1>)}
     </>
  )
}
 
export default DisplayResults
 