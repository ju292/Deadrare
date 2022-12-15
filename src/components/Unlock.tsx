import { Pane } from 'evergreen-ui';
import { DappUI} from '@elrondnetwork/dapp-core';
import * as Dapp from '@elrondnetwork/dapp';

import MainLayout from './MainLayout';

const Unlock = () => {

 
  return (
    <MainLayout>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="20vh"
        marginBottom="-20vh"
      >
        <Pane
          backgroundColor="white"
          elevation={1}
          maxWidth={400}
          width="100%"
          padding={30}
        >
          <Dapp.Pages.Unlock
            callbackRoute="/dashboard"
            title=""
            lead="Connect Your Wallet"
            ledgerRoute="/ledger"
            walletConnectRoute="/walletconnect"
            walletConnectButtonLabel='Maiar App'
            ledgerButtonLabel='Ledger'
            webWalletButtonLabel='Web Wallet'
            extensionButtonLabel= 'Maiar Defi Wallet'
          />
         
        
          


          
          
          
          
            
        </Pane>
      </Pane>
    </MainLayout>
  );
};

export default Unlock;
