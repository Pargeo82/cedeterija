import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { barcodes } = req.body;

  if (!barcodes || !Array.isArray(barcodes)) {
    return res.status(400).json({ error: "barcodes array is required" });
  }

  const headersWithAuth = {
    Authorization: `Discogs key=${process.env.AUTH_KEY}, secret=${process.env.AUTH_SECRET}`,
  };

  const results = [];

  for (const barcode of barcodes) {
    const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(
      barcode
    )}`;
    const response = await fetch(url, { headers: headersWithAuth });
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      data.results[0].calledBarcode = barcode;
      results.push(data.results[0]);
    }
  }

  return res.status(200).json(results);
}
