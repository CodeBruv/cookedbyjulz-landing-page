import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;

  if (!code || typeof code !== "string") {
    return res.status(400).send("Missing authorization code");
  }

  try {
    const response = await fetch(
      "https://accounts.zoho.com/oauth/v2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: process.env.ZOHO_CLIENT_ID!,
          client_secret: process.env.ZOHO_CLIENT_SECRET!,
          redirect_uri: process.env.ZOHO_REDIRECT_URI!,
          code,
        }),
      }
    );

    const data = await response.json();

    if (!data.access_token) {
      return res.status(500).json(data);
    }

    /**
     * IMPORTANT:
     * Save these somewhere safe (database, secret manager).
     * For now we log once so you can copy them.
     */
    console.log("ZOHO TOKENS:", data);

    return res.status(200).send(
      "Zoho connected successfully. You can close this tab."
    );
  } catch (error) {
    return res.status(500).json({ error: "OAuth failed", details: error });
  }
}
