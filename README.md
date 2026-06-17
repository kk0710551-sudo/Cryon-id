# Cryon ID - Decentralized Identity Protocol

A professional-grade decentralized identity protocol built on Solana with a minimalist, corporate-Web3 design. Cryon ID enables users to create verifiable, on-chain identities secured by cryptography and stored immutably on the blockchain.

## Features

- **Wallet Integration** — Seamless Phantom wallet connection with multi-wallet support
- **IPFS Pinning** — Server-side integration with Pinata for secure data storage
- **On-Chain Identity** — Anchor program integration for immutable identity records
- **Minimalist Design** — Professional, corporate-Web3 aesthetic with custom color palette
- **Responsive Layout** — Fully responsive design optimized for desktop and mobile
- **Security First** — All sensitive operations handled server-side with environment variables

## Tech Stack

- **Frontend** — Next.js, React, Tailwind CSS
- **Blockchain** — Solana, Anchor, @solana/web3.js
- **Wallet** — Phantom Wallet Adapter
- **Storage** — Pinata IPFS
- **Styling** — Tailwind CSS with custom Cryon theme

## Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Deep Navy | #0A192F | Background |
| White | #FFFFFF | Primary Text |
| Electric Cyan | #64FFDA | Accent / Highlights |
| Secondary | #495670 | Secondary Elements |

## Project Structure

```
cryon-id/
├── components/
│   ├── Header.js              # Navigation header with wallet button
│   ├── IdentityForm.js        # Form to create identity
│   └── CryonIDCard.js         # Digital identity card display
├── hooks/
│   └── useCryon.js            # Anchor program interaction hook
├── constants/
│   ├── programId.js           # Solana program ID
│   └── idl.json               # Anchor IDL definition
├── pages/
│   ├── _app.js                # Wallet provider configuration
│   ├── index.js               # Main dashboard page
│   └── api/
│       └── upload.js          # Pinata IPFS API route
├── styles/
│   └── globals.css            # Global styles and Cryon theme
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── next.config.js             # Next.js configuration
└── README.md                  # This file
```

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd cryon-id
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` and add your Pinata API credentials:
   ```
   PINATA_API_KEY=your_api_key
   PINATA_SECRET_KEY=your_secret_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`

## Usage

1. **Connect Wallet** — Click the "Connect Wallet" button in the header and select Phantom
2. **Enter Name** — Provide your name for the identity
3. **Create Identity** — Click "Create Identity" to:
   - Pin your data to IPFS via Pinata
   - Store the IPFS hash on the Solana blockchain
4. **View Card** — Your verified identity card will display with your information

## API Routes

### POST `/api/upload`

Pins JSON data to IPFS via Pinata.

**Request:**
```json
{
  "name": "John Doe"
}
```

**Response:**
```json
{
  "IpfsHash": "QmXxxx...",
  "PinSize": 123,
  "Timestamp": "2024-01-01T00:00:00Z"
}
```

## Smart Contract Integration

The `useCryon` hook provides methods to interact with the deployed Anchor program:

```javascript
import { useCryon } from '../hooks/useCryon';

const { initializeProfile } = useCryon();

// Create identity on-chain
await initializeProfile(ipfsHash);
```

## Security Considerations

- **Environment Variables** — Pinata API keys are stored server-side and never exposed to the client
- **Wallet Security** — All wallet operations use standard Solana adapters
- **IPFS Pinning** — Data is pinned to IPFS before blockchain confirmation
- **Input Validation** — All user inputs are validated before processing

## Customization

### Changing Colors

Edit `tailwind.config.js` to modify the Cryon color palette:

```javascript
colors: {
  'cryon-navy': '#0A192F',
  'cryon-cyan': '#64FFDA',
  'cryon-secondary': '#495670',
}
```

### Updating Program ID

Edit `constants/programId.js`:

```javascript
export const CRYON_PROGRAM_ID = new PublicKey('YOUR_PROGRAM_ID');
```

### Modifying IDL

Update `constants/idl.json` with your actual Anchor program IDL.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy to Other Platforms

Ensure your hosting supports Node.js and can run Next.js applications. Set the required environment variables on your platform.

## Troubleshooting

### Wallet Not Connecting
- Ensure Phantom wallet extension is installed
- Check that you're on the correct network (Devnet)
- Try refreshing the page

### IPFS Pinning Fails
- Verify Pinata API keys are correct in `.env.local`
- Check Pinata account has available quota
- Review server logs for detailed error messages

### Program Interaction Fails
- Confirm the program ID is correct
- Verify the IDL matches your deployed program
- Ensure wallet is connected and funded

## License

MIT

## Support

For issues, questions, or contributions, please open an issue on GitHub.

---

**Built with ❤️ for the Solana ecosystem**
