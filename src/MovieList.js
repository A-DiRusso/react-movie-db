/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types';

function MovieList(props) {
    return (
        <ul>
            {
                props.movies.map((movie, i) => (
                    <li key={i}>
                        <a
                            href="#"
                            onClick={() => {
                                props.handleClick(movie);
                            }}
                        >
                            {movie}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MovieList;