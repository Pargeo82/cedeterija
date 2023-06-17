import useSWR from "swr";
import TableResponse from "./Table";

export default function DataSWR({ barcodes }: { barcodes: string[] }) {
  const fetcher = async (url: string) => {
    const headersWithAuth = {
      Authorization: `Discogs key=${process.env.NEXT_PUBLIC_AUTH_KEY}, secret=${process.env.NEXT_PUBLIC_AUTH_SECRET}`,
    };

    const response = await fetch(url, { headers: headersWithAuth });
    return response.json();
  };

  const fetchResults = async () => {
    const results = [];
    for (const barcode of barcodes) {
      const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(
        barcode
      )}`;
      const data = await fetcher(url);
      if (data.results.length > 0) {
        data.results[0].calledBarcode = barcode;
        results.push(data.results[0]);
      }
    }
    return results;
  };

  const { data, error } = useSWR("fetchResults", fetchResults, {
    dedupingInterval: 0,
  });

  if (error) return <div>Something went wrong: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return <TableResponse results={data} />;
}
