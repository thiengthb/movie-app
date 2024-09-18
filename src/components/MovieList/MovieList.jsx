import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({results}) {
  return (
    <div className="w-full justify-items-center items-center px-3 pt-20 md:px-10 lg:pt-10 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      { results ? results.map((item) => (
          <MovieCard key={item.id} content={item}/>
      )) : null} 
    </div>
  );
}
