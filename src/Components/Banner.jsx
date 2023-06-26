import React, { useEffect, useState } from "react";
import { apiKey } from "./Constants/constants";
import axios from "./axios";

export default function Banner(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(`/trending/movie/day?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        const x = Math.floor(Math.random() * 10);
        console.log(x);
        setMovie(response.data.results[x]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: props.bannerSrc
          ? `url(https://image.tmdb.org/t/p/original/${props.bannerSrc})`
          : `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="content">
        <h1 className="title">
          {props.bannerTitle ? props.bannerTitle : movie.title}
        </h1>
        <div className="buttons">
          <button className="button">play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          {props.bannerDes ? props.bannerDes : movie.overview}
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}
