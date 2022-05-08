import MainLayout from './MainLayout';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';
import { shortenWalletAddress } from '../utils';
import { Pane, Button, Text, Card, Heading } from 'evergreen-ui';
import * as Dapp from '@elrondnetwork/dapp';
import nftImage from "../static/media/nftImage.png";

import Countdown from 'react-countdown';

import {Input, Whisper, Tooltip} from 'rsuite/';
import 'rsuite/dist/rsuite.min.css';

import AOS from "aos";
import "aos/dist/aos.css";
import * as config from '../config';



const Home: React.FC = () => {
  const history = useHistory();
  const { account, address, explorerAddress } = Dapp.useContext();

  const [value, setValue] = useState(null);

  const [pending, setPending] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    
    const controller = new AbortController();
    const signal = controller.signal;
    setPending(true);
    
   
    return () => {
      mounted.current = false;
    };
  }, [address]);

  const unlock = () => {
    history.push('/unlock');
  };

  const smallRes = useMediaQuery({
    query: '(max-width: 600px)',
  });




  return (

    <MainLayout>
      
 
      <div id="containerMain">

        <div id="image">
        <img src={nftImage} width="100%"  id="nftImage" alt="" />
        <a id="btnOriginal" href={config.NFTMediaLink}><strong>View Original</strong></a>
        </div>
        <div id="actions">
          <h1>{config.NFTName}</h1>
          <h3>Rank: <strong>{config.NFTRank}</strong></h3>
          <h3>Score: <strong>{config.NFTScore}</strong></h3>
        <Button
                marginTop={0}
                width="100%"
                appearance="primary"
                fontSize={14}
                paddingTop={0}
                paddingBottom={0}
                onClick={unlock}
                id="btnBuy"
              >
                Buy ({config.price} ELGD)
        </Button>
        <div id="offer">
        <div id="offerInputDiv" style={{ width: '50%'}}>
        <Whisper trigger="focus" speaker={<Tooltip>Offer</Tooltip>}>
           <Input id="inputOffer"  style={{ width: "95%", height: 40.5, border: "black" }} placeholder="Offer price (EGLD)" value={value ? value : null} onChange={setValue} />
        </Whisper>
          </div>
          <Button
                marginTop={0}
                width="50%"
                appearance="primary"
                fontSize={14}
                paddingTop={0}
                paddingBottom={0}
                id="btnOffer"
              >
                Make Offer
        </Button>
        </div>
        <div id="sales">              {/* THIS IS THE OFFERS PART BUT CALLED SALES BECAUSE SAME CSS PROPERTIES */}
        <div id="salesTXT">
          <h1>Offers</h1>
        </div>
        <div id="salesCard">
            <div id="headerOffers">
                <div id="headerCONTENT">
                    <p>Status</p>
                </div>
                <div id="headerCONTENT">
                    <p>Amount</p>
                </div>
                <div id="headerCONTENT">
                    <p>From</p>
                </div>

            </div>
            <div id="history">
              <p>No Offers</p>
            </div>
        </div>


      </div>

        </div>

      </div>

    <div id="secondPage">
          <div id="attributes">
            <div id="attributesTXT">
              <h1>Attributes</h1>
            </div>
            <div id="attributesCard">
            <div className="attribute">
                <p>{config.TypeAttribute1}</p>
                <strong>{config.ValueAttribute1}</strong>
                <p>{config.PercentageAttribute1}</p>

              </div>
              <div className="attribute">
              <p>{config.TypeAttribute2}</p>
                <strong>{config.ValueAttribute2}</strong>
                <p>{config.PercentageAttribute2}</p>

              </div>            
              <div className="attribute">
              <p>{config.TypeAttribute3}</p>
                <strong>{config.ValueAttribute3}</strong>
                <p>{config.PercentageAttribute3}</p>

              </div>            
              <div className="attribute">
              <p>{config.TypeAttribute4}</p>
                <strong>{config.ValueAttribute4}</strong>
                <p>{config.PercentageAttribute4}</p>

              </div>
              <div className="attribute">
              <p>{config.TypeAttribute5}</p>
                <strong>{config.ValueAttribute5}</strong>
                <p>{config.PercentageAttribute5}</p>

              </div>
              <div className="attribute">
              <p>{config.TypeAttribute6}</p>
                <strong>{config.ValueAttribute6}</strong>
                <p>{config.PercentageAttribute6}</p>
                
              
                
         
                
       
           
          
              </div>
            </div>

          </div>
          <div id="details">
              <div id="detailsTXT">
                <h1>Details</h1>
              </div>
              <div id="detailsCard">
              <div id="lineDetails">
                  <div id="lineTXT">
                    <p>Owner address:</p>
                  </div>
                  <div id="lineCONTENT">
                      <a target='_BLANK' href={`https://deadrare.io/account/${config.OwnerAddress}`}>{shortenWalletAddress(`${config.OwnerAddress}`)}</a>
                  </div>
                </div>
                <div id="lineDetails">
                  <div id="lineTXT">
                    <p>Collection Identifier:</p>
                  </div>
                  <div id="lineCONTENT">
                  <a target='_BLANK' href={`https://deadrare.io/collection/${config.CollectionIdentifier}`}>{config.CollectionIdentifier}</a>
                  </div>
                </div>
                <div id="lineDetails">
                  <div id="lineTXT">
                    <p>Token Identifier:</p>
                  </div>
                  <div id="lineCONTENT">
                  <a target='_BLANK' href={`https://explorer.elrond.com/nfts/${config.TokenIdentifier}`}>{config.TokenIdentifier}</a>
                  </div>
                </div>
                <div id="lineDetails">
                  <div id="lineTXT">
                    <p>Creator Address:</p>
                  </div>
                  <div id="lineCONTENT">
                  <a target='_BLANK' href={`https://deadrare.io/account/${config.CreatorAddress}`}>{shortenWalletAddress(`${config.CreatorAddress}`)}</a>
                  </div>
                </div>
                <div id="lineDetails">
                  <div id="lineTXT">
                    <p>Artist Royalties:</p>
                  </div>
                  <div id="lineCONTENT">
                      <p>{config.ArtistRoyalties}</p>
                  </div>
                </div>
                <div id="lineDetails">
                  <div id="lineTXT">
                    <p>Sale Transaction Fee:</p>
                  </div>
                  <div id="lineCONTENT">
                      <p>{config.SaleFee}</p>
                  </div>
                </div>
                <div id="lineDetails">
                  <div id="lineTXT">
                    <p>Listing/Cancel Fees:</p>
                  </div>
                  <div id="lineCONTENT">
                      <p>{config.ListingFee}</p>
                  </div>
                </div>
                  

              </div>

          </div>




      </div>
      <div id="sales">
        <div id="salesTXT">
          <h1>Sales History</h1>
        </div>
        <div id="salesCard">
            <div id="header">
                <div id="headerCONTENT">
                    <p>Name</p>
                </div>
                <div id="headerCONTENT">
                    <p>Price</p>
                </div>
                <div id="headerCONTENT">
                    <p>From</p>
                </div>
                <div id="headerCONTENT">
                    <p>To</p>
                </div>
                <div id="headerCONTENT">
                    <p>Transaction</p>
                </div>
                <div id="headerCONTENT">
                    <p>Time</p>
                </div>

            </div>
            <div id="history">
              <p>No sales history</p>
            </div>
        </div>


      </div>

    </MainLayout>
  );

};


export default Home;
