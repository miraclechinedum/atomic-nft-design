import { NextApiRequest, NextApiResponse } from "next";

export default function currentDate(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date();
  const year = date.getFullYear();
  res.json({ date, year });
}
