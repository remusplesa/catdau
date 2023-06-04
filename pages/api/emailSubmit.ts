// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

type Data = {
  success: boolean;
  error: string | null;
};

const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  process.env.AIRTABLE_BASE as string
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { email, date } = JSON.parse(req.body);

    base(process.env.AIRTABLE_TABLE as string).create(
      [
        {
          fields: {
            Email: email,
            Date: date,
          },
        },
      ],
      function (err: any) {
        if (err) {
          console.error(err);
          throw new Error(err)
        }
      }
    );

    res.status(200).json({ success: true, error: "" });
  } catch (error) {
    res.status(500).json({ success: true, error: JSON.stringify(error) });
  }
}
