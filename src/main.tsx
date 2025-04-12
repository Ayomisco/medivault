import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import App from './App.tsx';
import './index.css';

const projectId = 'YOUR_WC_PROJECT_ID'; // Replace with your WalletConnect project ID

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

createWeb3Modal({ 
  wagmiConfig: config, 
  projectId, 
  chains,
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': '#3b82f6'
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </StrictMode>
);