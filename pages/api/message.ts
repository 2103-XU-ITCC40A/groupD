// REQ AND RES INTERFACES
import type { NextApiRequest, NextApiResponse } from "next";

// DATABASE CONNECTION
import dbConnection from "../utils/dbConnection";

// SPOTLIGHT SCHEMA
import Message from "../schema/schema.messages";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, title, messageContent, email } = req.body;

  dbConnection
    .then(async () => {
      if (req.method === "POST") {
        try {
          const messageResponse = await Message.create({
            name,
            title,
            messageContent,
            email,
          });
          res.status(200).json({
            message: "Message sent successfully",
            messageResponse,
          });
        } catch {
          res.status(500).json({ error: "Internal Server Error" });
        }
      } else {
        return res.status(405).json({ serverMessage: "Method not allowed" });
      }
    })
    .catch((databaseError) => {
      throw new Error(databaseError);
    });
}
