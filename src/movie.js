import React from "react";

const Movie = ({title, description, image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <img src={image} alt="" />
        </div>
    )
}

export default Movie;