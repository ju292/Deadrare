import * as Dapp from '@elrondnetwork/dapp';
import { useHistory } from 'react-router-dom';
import {
  Pane,
  Heading,
  majorScale,
  StatusIndicator,
  Popover,
  Menu,
  Button,
  Position,
  Strong
} from 'evergreen-ui';
import { useMediaQuery } from 'react-responsive';
import { shortenWalletAddress } from '../utils';
import { routes } from '../routes';
import { ChainID } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MainLayout: React.FC = ({ children }) => {
  const { address, chainId } = Dapp.useContext();
  const dappLogout = Dapp.useLogout();
  const history = useHistory();

  const smallRes = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const getChainName = (chainID: ChainID) => {
    if (chainID === ChainID.TESTNET) return 'Elrond Testnet';
    if (chainID === ChainID.DEVNET) return 'Elrond Devnet';
    if (chainID === ChainID.MAINNET) return 'Elrond Mainnet';
    return 'Elrond Mainnet';
  };

  const logOut = (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    dappLogout({ callbackUrl: `${window.location.origin}/` });
    history.push('/');
  };

  return (
    <div id="buy">    

<div id="MainLayoutDiv">
    <Pane>
      <Dapp.Authenticate routes={routes} unlockRoute="/unlock">
      
          <div id="navbarContainer">

          
<nav>
      <input type="checkbox" id="check"/>
      <label htmlFor="check" className="checkbtn">
      <FontAwesomeIcon icon={faBars} />
            </label>
      <label className="logo"><div id="logo">
                      <img id="logoNavbar"  src='https://deadrare.io/_next/image?url=%2Ffavicon.png&w=32&q=75'  alt="" />
                       <a className="btnNAV" ><strong>DEADRARE</strong></a>

                  </div></label>
      <ul>
      <label htmlFor="check" className="checkbtn checkbtn2">
      <FontAwesomeIcon icon={faBars} />
            </label>
        <li><a className="active" ></a></li>
        <li><a href="https://elrondindex.io/">Upcoming Drops</a></li>
        <li><a href="https://deadrare.io/">Marketplace</a></li>
        <li><a href="https://deadrare.io/staking">Staking</a></li>
        <li><a href="https://deadrare.io/analytics">Analytics</a></li>
        <li><a href="https://deadrare.io/faqs">FAQs</a></li>
        <li>{address ? (
              
              <Button
                marginTop={50}
                width="15%"
                appearance="primary"
                fontSize={14}
                paddingTop={0}
                paddingBottom={0}
                onClick={logOut}
                id="btnConnect"
              >🎒My Stuff
            </Button>
            ) : (
             
                <Button
                  marginTop={0}
                  width="15%"
                  appearance="primary"
                  fontSize={14}
                  paddingTop={0}
                  paddingBottom={0}
                  onClick={() => history.push('/unlock')}
                  id="btnConnect"
                  >⚡Connect
              </Button>

             
            )} </li>
      </ul>
    </nav>
</div>
        <Pane
          maxWidth={1200}
          paddingX={30}
          marginX="auto"
          width="100%"
          paddingBottom={40}
        >
          {children}
        </Pane>
        
      </Dapp.Authenticate >

    </Pane >
    </div>

    </div>
    
  );
};

export default MainLayout;
