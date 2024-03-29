// REQ AND RES INTERFACES
import type { NextApiRequest, NextApiResponse } from "next";

// DATABASE CONNECTION
import dbConnection from "../utils/dbConnection";

// SPOTLIGHT SCHEMA
import Spotlights from "../schema/schema.spotlight";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown | SpotlightInterface>
) {
  dbConnection
    .then(() => {
      if (req.method === "GET") {
        Spotlights.find()
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
