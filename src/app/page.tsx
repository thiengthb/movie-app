const API_KEY = process.env.API_KEY;

export default async function Home({
  searchParams,
}: {
  searchParams: { genre?: String };
}) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/
    ${genre === "fetchTopRate" ? "/movie/top_rate" : "/trending/all/week"}
    ?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Cannot fetch data");
  }

  const results = data.results;
  console.log(results);

  return <div className="">Home</div>;
}
