/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function GenreList(props) {
  return (
      <ul> 
            {
                props.genres.map((genre, i) => {
                    //use explicit return to have mulitple lines use {} to do
                    return (
                    <li key={i}>
                        <a 
                            href="#"
                            onClick={() => {
                                
                                props.handleClick(genre);
                            }}
                        >{genre}</a>
                    </li>)
                })
            }
       </ul>
      
    );
}


export default GenreList;