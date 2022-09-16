import useSWR from "swr";

let headers = new Headers({
  "User-Agent": "LearningHowToDoIt/0.1",
  Authorization: process.env.TOKEN,
});

let api1 =
  "https://api.discogs.com/database/search?q=794881722228&token=CTlXcTTomJlHzgqsoLUiJmSiqCWMFvamEvzKsWPH";

export default function DataSWR() {
  const fetcher = async () => {
    const response = await fetch(api1, { headers: headers });
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR("apiData", fetcher);

  if (error) return <div>Nešto ne valja</div>;
  if (!data) return <div>Loading...</div>;
  return <div>{data.title}</div>;
}
