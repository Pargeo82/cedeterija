import useSWR from "swr";
import { useState } from "react";
import TableResponse from "../Home/table";

let auth = "key=xgQxkNRrioLIGQbfRHWD&secret=SGocNjHoIEfInQFIvqFzwlMmzGZPIgpK";
let headers = { "User-Agent": "AlbumDataFetcher/0.2" };

const fetcher = (...urls) => {
  const f = (url) => fetch(url, { headers }).then((r) => r.json());
  return Promise.all(urls.map((url) => f(url)));
};

export default function DataSWR({ params }) {
  const urls = [];
  params.map((param) => {
    urls.push(`https://api.discogs.com/database/search?q=${param}&${auth}`);
  });

  const { data, error } = useSWR(urls, fetcher);

  if (error) return <div>Nešto ne valja</div>;
  if (!data) return <div>Loading...</div>;
  // console.log(`data: ${data}`);
  // console.log(data[0].results[0]);
  // console.log(data[1].results[0]);

  return (
    <>
      <TableResponse params={data} />
    </>
  );
}

// `https://api.discogs.com/database/search?q=${url}&${auth}`
