import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WagmiConfig, createConfig } from 'wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { mainnet } from 'wagmi/chains';
import App from './App.tsx';
import './index.css';

const projectId = 'YOUR_WC_PROJECT_ID'; // Replace with your WalletConnect project ID

const metadata = {
  name: 'MediVault',
  description: 'Secure Medical Records on the Blockchain',
  url: 'https://medivault.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const config = createConfig({
  chains: [mainnet],
  projectId,
  metadata,
});

createWeb3Modal({ 
  wagmiConfig: config, 
  projectId, 
  chains: [mainnet],
  themeMode: 'light'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </StrictMode>
);