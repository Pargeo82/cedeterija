import useSWR from "swr";

let auth = "key=xgQxkNRrioLIGQbfRHWD&secret=SGocNjHoIEfInQFIvqFzwlMmzGZPIgpK";
let api1 = `https://api.discogs.com/database/search?q=794881722228&${auth}`;
let headers = { "User-Agent": "AlbumDataFetcher/0.2" };

export default function DataSWR(params) {
  console.log(params);

  function multiFetcher(params) {
    return Promise.all(params.map((url) => fetcher(url)));
  }

  const fetcher = async (url) => {
    const response = await fetch(`https://api.discogs.com/database/search?q=${url}&${auth}`, {
      headers,
    });
    const data = await response.json();
    return data;
  };

  const {
    data: [data1, data2, data3],
    error,
  } = useSWR([url1, url2, url3], multiFetcher);

  if (error) return <div>Nešto ne valja</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <div>{data1.results && data1.results[0].title}</div>
      <div>{data2.results && data2.results[0].title}</div>
      <div>{data3.results && data3.results[0].title}</div>
    </>
  );
}
