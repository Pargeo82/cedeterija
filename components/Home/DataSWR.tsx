import useSWR from "swr";
import TableResponse from "./Table";

export default function DataSWR({ barcodes }: { barcodes: string[] }) {
  const fetchResults = async () => {
    const response = await fetch("/api/discogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ barcodes }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from Discogs");
    }

    return response.json();
  };

  const { data, error } = useSWR("fetchResults", fetchResults, {
    dedupingInterval: 0,
    revalidateOnFocus: false,
  });

  if (error) return <div>Something went wrong: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return <TableResponse results={data} />;
}
