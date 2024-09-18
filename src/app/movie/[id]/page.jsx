import React from "react";
import { Image } from "@nextui-org/react";

export default async function Page({params}) {
  const movieId = params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movie = await res.json();

  return (
    <div className="w-full h-[90vh]">
      <div className="px-3 sm:px-10 mt-20 flex flex-col md:flex-row md:gap-10 xl:gap-14 max-w-[1240px] mx-auto">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          isBlurred 
          className="md:h-[210px] lg:h-[280px] xl:h-[330px]"
          alt={movie.title || movie.name}
        />
        <div className=" flex-1 flex flex-col mt-10 md:mt-0">
          <div className="flex-1">
            <h2 className="text-4xl mb-3 text-[orange] font-bold">
              {movie.title || movie.name}
            </h2>
            <p className="text-md mb-3">{movie.overview}</p>
          </div>
          <div className="">
            <p className="mb-3">
              <span className="font-bold mr-1">Date Released:</span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p className="mb-3">
              <span className="font-bold mr-1">Rating:</span>
              {movie.vote_count}
            </p>
          </div>
        </div>
      </div>
    </div>);
}
