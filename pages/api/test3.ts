import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest , res: NextApiResponse ) {
  if (req.method === "GET") {
    res.status(200).json("all good");
  } else if (req.method === "POST") {
    const message = req.body.message;
    res.status(200).json(`posted: ${message}`);
  }
}
