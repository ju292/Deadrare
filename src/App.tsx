import * as Dapp from '@elrondnetwork/dapp';
import { network, walletConnectBridge, walletConnectDeepLink } from './config';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Unlock from './components/Unlock';
import WalletConnect from './components/WalletConnect';
import Ledger from './components/Ledger';
import Home from './components/Home';



import Footer from './components/Footer';



function App() {
 
  return (
    <div>
      
    <Dapp.Context
      config={{
        network,
        walletConnectBridge,
        walletConnectDeepLink,
      }}
    >
     

      <Router>
        <Switch>
          <Route path="/unlock" exact>
            <Unlock />
          </Route>
          <Route path="/ledger" exact>
            <Ledger />
          </Route> 
          <Route path="/walletconnect" exact>
            <WalletConnect />
          </Route>
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/" component={Home} exact />
          
        </Switch>
      </Router>
     
 
      <Footer />


    </Dapp.Context>
    
    
    </div>
  );
}

export default App;
