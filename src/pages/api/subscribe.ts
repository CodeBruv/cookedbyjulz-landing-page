import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const response = await fetch(
      "https://campaigns.zoho.com/api/v1.1/addlistsubscribers",
      {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          listkey:
            "3z8032b2d0b2b259806b8a702f7cd48ca5426db83778e82cb83c77528f0ea0706f",
          contactinfo: {
            Contact_Email: email,
          },
          resfmt: "JSON",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || data.status === "error") {
      console.error("Zoho error:", data);
      return res.status(500).json({ message: "Zoho subscription failed" });
    }

    return res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
