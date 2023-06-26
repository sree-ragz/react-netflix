import React, { useEffect, useState } from "react";
import axios from "./axios";
import Youtube from "react-youtube";
import { apiKey } from "./Constants/constants";
import Banner from "./Banner";
let bannerTitle;
let bannerSrc;
let bannerDes;
export default function Row(props) {
  const [url, setUrl] = useState("");
  const [top, setTop] = useState([]);
  const onclick = (res) => {
    axios
      .get(
        `http://api.themoviedb.org/3/movie/${res.id}/videos?api_key=${apiKey}`
      )
      .then((response) => {
        console.log(response.data.results[0]);
        setUrl(response.data.results[0]);
      });
  };

  useEffect(() => {
    axios
      .get(props.genre)
      .then((response) => {
        setTop(response.data.results);
      })
      .catch((err) => alert(err));
  }, []);
  const opts = {
    height: "350",
    width: "100%",
    autoplay: 1,
  };
  return (
    <>
      <Banner
        bannerTitle={bannerTitle}
        bannerSrc={bannerSrc}
        bannerDes={bannerDes}
      />
      <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {top.map((res) => (
            <img
              src={`https://image.tmdb.org/t/p/original/${res.backdrop_path}`}
              alt=""
              className={props.isSmall ? "small-poster" : "poster"}
              onClick={() => {
                bannerTitle = res.title;
                bannerSrc = res.backdrop_path;
                bannerDes = res.overview;
                onclick(res);
              }}
            />
          ))}
        </div>
        {url.key && <Youtube opts={opts} videoId={url.key} />}
      </div>
    </>
  );
}
