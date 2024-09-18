"use client";

import Pagination from "@/components/Pagination";
import MovieList from "./MovieList";
import React, { useEffect, useState } from "react";

export default function Show({ result }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = result.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <MovieList results={currentPosts} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
