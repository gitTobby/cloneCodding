import React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";

const Movie = ({year, title, summary, poster, genres}) => {
    return (
        <Fragment>
            <div className="ex_movie_bx">
                <div className="inbx">
                    <img src={poster} className="poster" alt={title} title={title} />
                    <div className="data">
                        <h3 className="title">{title}</h3>
                        <h5 className="year">{year}</h5>
                        <ul className="genres">
                            {
                                genres.map((genres, index) => {
                                    return <li key={index} className="genre_item">{genres}</li>
                                })
                            }
                        </ul>
                        <p className="summary">{summary.slice(0, 180)}...</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;