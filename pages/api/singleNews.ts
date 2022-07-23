// REQ AND RES INTERFACES
import type { NextApiRequest, NextApiResponse } from "next";

// DATABASE CONNECTION
import dbConnection from "../utils/dbConnection";

// NEWS SCHEMA
import News from "../schema/schema.news";
import mongoose from "mongoose";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown | NewsInterface>
) {
  dbConnection
    .then(() => {
      if (req.method === "GET") {
        News.findById(req.query._id)
          .then((responseData) => {
            res.status(200).json({ payload: responseData });
          })
          .catch((responseError) => {
            res.status(500).json({ payload: responseError });
          });
      } else {
        return res.status(405).json({ serverMessage: "Method not allowed" });
      }
    })
    .catch((databaseError) => {
      throw new Error(databaseError);
    });
}
