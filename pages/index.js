const defaultAPI = "https://musicbrainz.org/ws/2/artist?query=marley&fmt=json";

export async function getServerSideProps() {
  const res = await fetch(defaultAPI);
  const data = await res.json();
  return {
    props: {
      results: data,
    },
  };
}

export default function Home({ results }) {
  return (
    <>
      <h1>Musicbrainz</h1>
      {results.artists.map((artist) => (
        <div key={artist.id}>
          <h2>{artist.name}</h2>
          {console.log(artist.name)}
          {console.log(artist)}
          {console.log(artist.tags)}
        </div>
      ))}
    </>
  );
}
