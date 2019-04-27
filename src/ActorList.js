import React from 'react'
import PropTypes from 'prop-types';

function ActorList(props) {
  return (
    <ul>
        {
            props.actors.map((actor, i) => <li key={i}>{actor}</li>)
        }
      
    </ul>
  )
}

ActorList.propTypes = {
    actors: PropTypes.array.isRequired
}
export default ActorList;