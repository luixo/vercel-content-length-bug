// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  headers: Record<string, string | string[] | undefined>;
  bodyType: string;
  body: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    headers: Object.fromEntries(Object.entries(req.headers)),
    bodyType: typeof req.body,
    body: req.body,
  });
}
