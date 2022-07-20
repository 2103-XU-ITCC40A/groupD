import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "../utils/databaseConnection";
import News from "../schema/schema.news";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown | NewsInterface>
) {
  dbConnection
    .then(() => {
      switch (req.method) {
        case "POST":
          res.status(200).json({ payload: req.body });
          break;
        default:
          News.find()
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
