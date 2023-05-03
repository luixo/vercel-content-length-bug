import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let baseUrl =
    req.query.baseUrl || `http://${process.env.VERCEL_URL || "127.0.0.1:3000"}`;
  try {
    const response = await fetch(`${baseUrl}/api/hello`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ foo: "bar" }),
      method: "POST",
    });
    res.json(await response.json());
  } catch (e: any) {
    res.json({ error: String(e), stack: e.stack, cause: e.cause });
  }
}
