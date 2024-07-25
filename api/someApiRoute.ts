// pages/api/someApiRoute.ts
import { NextApiRequest, NextApiResponse } from "next";
import router from "next/router";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const link = (req as any).link; // Type assertion to access the custom property
  if (link) {
    try {
      res.status(200).json({ message: `Link processed: ${link}` });
      // Redirect to the dynamic page with the link as a query parameter
      router.push(`/dynamicPage?link=${encodeURIComponent(link)}`);
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    res.status(400).json({ error: "Link query parameter is missing" });
  }
}
