import React, { Fragment } from "react";

export const TodoSearch = ({ searchText, setSearchText }) => {

  const onSearchValueChange = ( {target: { value }} ) => {
    setSearchText(value);
  }
  
  return (
    <Fragment>
      <input type="search"
             value={ searchText } 
             placeholder="TODO description"
             onChange={ (event) => onSearchValueChange(event)}/>
      <p>{ searchText }</p>
    </Fragment>
  )
}