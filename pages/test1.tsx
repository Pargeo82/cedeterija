import styles from "../styles/home.module.css";
import { Artist } from "../types";

type Results = {
  results: {
    artists: Artist[];
  };
};

const defaultAPI =
  "https://musicbrainz.org/ws/2/artist?query=Rolling+stones&fmt=json";
const defaultLink = "https://musicbrainz.org/artist/";

export async function getServerSideProps() {
  const res = await fetch(defaultAPI);
  const data = await res.json();
  return {
    props: {
      results: data,
    },
  };
}

export default function Home({ results }: Results) {
  return (
    <div className={styles.container}>
      {results.artists.map((artist: Artist) => (
        <div key={artist.id} className={styles.artist}>
          <div className={styles.name}>
            <a href={`${defaultLink}${artist.id}`}>
              <h3>{artist.name}</h3>
            </a>
          </div>
          <div className={styles.genres}>
            {
              // prettier-ignore
              artist.tags?.filter((tag) => tag.count > 1)
              .map((element, index) => {
                return <span key={index} className={styles.tag}>{element.name}</span>;
              })
            }
          </div>
          <div>
            {artist.area && artist.area.name}{" "}
            {artist["begin-area"] && `, ${artist["begin-area"].name}`}
          </div>
        </div>
      ))}
    </div>
  );
}
