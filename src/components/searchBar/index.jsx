const SearchBar = ( { saveQuery} ) => {
    const checkInputLength = (e) => {
      console.log("E: ",e)
       if(e.target.value.length < 3){
           return
       }
       saveQuery(e)
    }
  return (
    <>
    <input onChange={(e) =>  checkInputLength(e)} type="text"></input>
    </>
  )
}
 
export default SearchBar
 