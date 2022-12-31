import React from "react";

export const TodoSearch = () => {
  const onSearchValueChange = ( {target: { value }} ) => {
    console.log(value)
  }
  
  return (
    <input type="search" 
           placeholder="TODO description"
           onChange={ (event) => onSearchValueChange(event)}
           />
  )
}