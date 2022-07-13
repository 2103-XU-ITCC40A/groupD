import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "../utils/databaseConnection";
import Spotlights from "../schema/schema.spotlight";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown | SpotlightInterface>
) {
  dbConnection
    .then(() => {
      switch (req.method) {
        case "POST":
          res.status(200).json({ payload: req.body });
          break;
        default:
          Spotlights.find()
            .then((responseData) => {
              res.status(200).json({ payload: responseData });
            })
            .catch((responseError) => {
              res.status(500).json({ payload: responseError });
            });
      }
    })
    .catch((databaseError) => {
      throw new Error(databaseError);
    });
}
