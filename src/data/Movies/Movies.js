import React from "react";
import { Fragment } from "react";
import axios from "axios";
import Movie from "./Movie";

class Movies extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({ movies: movies, isLoading: false });
        //console.log(movies);
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { movies, isLoading } = this.state;
        //console.log(movies, isLoading);
        return (
            <Fragment>
                <div className="container">
                    {isLoading ? (
                        <div className="loader">
                            <span className="loader_text">Loading...</span>
                        </div>
                    ) : (
                        <div className="movies">
                            {movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    genres={movie.genres}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </Fragment>
        );
    }
}

export default Movies;