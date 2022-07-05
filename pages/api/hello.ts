// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

/**
 *
 *  THIS IS THE API ROUTE HANDLER
 *  MORE ROUTE HANDLERS WILL BE ADDED ON A SEPARATE FILE
 *  WE WILL USE SWITCH STATEMENTS TO HANDLE DIFFERENT HTTP REQUESTS
 *
 * @param req
 * @param res
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DATA>
) {
  res.status(200).json({ world: "Hello World" });
}
