export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  if (!process.env.PINATA_API_KEY || !process.env.PINATA_SECRET_KEY) {
    return res.status(500).json({ message: 'Pinata API keys are not configured.' });
  }

  try {
    const response = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'pinata_api_key': process.env.PINATA_API_KEY,
        'pinata_secret_api_key': process.env.PINATA_SECRET_KEY,
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Pinata API error:', errorData);
      return res.status(response.status).json({ message: 'Failed to pin to IPFS', details: errorData });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    console.error('Request to Pinata failed:', error);
    res.status(500).json({ message: 'Internal Server Error', details: error.message });
  }
}
