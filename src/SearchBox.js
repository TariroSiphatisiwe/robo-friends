import React from "react";
const SearchBox=({setchange,searchfield})=>{
    return(
        <>
        <div className='pa2'>
          <input 
          className=' pa3 b2 b--green bg--lightest-blue'
          type='search' 
          placeholder='search robots'
          onChange={setchange}/>
          </div>
       </>
    )
  
}  
export default SearchBox;