import Logo from './components/Logo';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import { WalletContextProvider } from 'contexts/WalletContextProvider';
import { Theme } from '@radix-ui/themes';
import './App.css';

function App() {
  return (
    <WalletContextProvider>
      <Theme appearance='dark' hasBackground={false}>
        <div className="flex bg-background min-h-[100vh]">
          <div className="border-r border-gray">
            <Logo />
            <Navigation />
          </div>
          <div className="flex-1">
            <MainContent />
          </div>
        </div>
      </Theme>
    </WalletContextProvider>
  );
}

export default App;
