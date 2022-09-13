export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json("all good");
  } else if (req.method === "POST") {
    const message = req.body.message;
    res.status(200).json(`posted: ${message}`);
  }
}
