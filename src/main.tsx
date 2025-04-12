import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import App from './App.tsx';
import './index.css';

// Use environment variable or fallback to a default (you should replace this with your actual project ID)
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'default-project-id';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

// Only create Web3Modal if we have a valid project ID
if (projectId !== 'default-project-id') {
  createWeb3Modal({ 
    wagmiConfig: config, 
    projectId, 
    chains,
    themeMode: 'light',
    themeVariables: {
      '--w3m-accent': '#3b82f6'
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </StrictMode>
);