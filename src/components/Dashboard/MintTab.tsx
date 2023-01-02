import { Pane, Card, Text, Button, Heading } from 'evergreen-ui';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';
import nftImage from "../../static/media/nftImage.png";


import * as Dapp from '@elrondnetwork/dapp';
import { NFTContract } from '../../config';
import { RawTransactionType } from '../../helpers/types';
import useNewTransaction from '../useNewTransaction';
import InputNumber from 'rsuite/InputNumber';
import 'rsuite/dist/rsuite.min.css';
import * as config from '../../config';
import { Input, Tooltip, Whisper } from 'rsuite';
import { shortenWalletAddress } from '../../utils';



const MintTab = () => {
  const { account, address, explorerAddress } = Dapp.useContext();
  const [remainingNFT, setRemainingNfts] = useState();
  
  const [pending, setPending] = useState(false);
  const mounted = useRef(true);
  const [value, setValue] = useState(null);
  
  const [tokenBal, setTokenBal] = useState(null);
  
  const smallRes = useMediaQuery({
    query: '(max-width: 600px)',
  });



 
  


  useEffect(() => {
    
    const controller = new AbortController();
    const signal = controller.signal;
    setPending(true);
   
    
    const fetchNfts = async () => {
      
      
      if (mounted.current) {
        
        
        setPending(false);
      }

    };
    if (address) {
      fetchNfts();
    }
    return () => {
      mounted.current = false;
    };
  }, [address]);

  const sendTransaction = Dapp.useSendTransaction();
  const newTransaction = useNewTransaction();
  const send =
    (transaction: RawTransactionType) => async (e: React.MouseEvent) => {
      transaction.value = String(config.price);
      transaction.data = `buy`;
      e.preventDefault();
      sendTransaction({
        transaction: newTransaction(transaction),
        callbackRoute: "/dashboard",
      });
    };

  const mintTransaction: RawTransactionType = {
    receiver: NFTContract,
    data: "buy",
    value: `${config.price}`,
    gasLimit: 40000000,
  };




  



  return (
    <>
            <div id="containerMain">

<div id="image">
<img src={nftImage} width="100%"  id="nftImage" alt="" />
<a id="btnOriginal" href="https://media.elrond.com/nfts/asset/QmRP9FVznm1xxa3FEsDENXhafRDaRWY6LKQdg8GygHNHKw/1748.png"><strong>View Original</strong></a>
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
        onClick={send(mintTransaction)}
        id="btnBuy"
      >
        Buy ({config.price} ELGD)
</Button>
<div id="offer">
<div id="offerInputDiv" style={{ width: '50%'}}>
<Whisper trigger="focus" speaker={<Tooltip>Offer</Tooltip>}>
   <Input id="inputOffer" min={0.1} max={10} style={{ width: "95%", height: 40.5, border: "black" }} placeholder="Offer price (EGLD)" value={value ? value : null} onChange={setValue} />
</Whisper>
  </div>
  <Button
        marginTop={0}
        width="50%"
        appearance="primary"
        fontSize={14}
        paddingTop={0}
        paddingBottom={0}
        height={40}
        
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
              <div className="attribute">
              <p>{config.TypeAttribute7}</p>
                <strong>{config.ValueAttribute7}</strong>
                <p>{config.PercentageAttribute7}</p>
                
                </div>
              <div className="attribute">
              <p>{config.TypeAttribute8}</p>
                <strong>{config.ValueAttribute8}</strong>
                <p>{config.PercentageAttribute8}</p>
                
                </div>
              <div className="attribute">
              <p>{config.TypeAttribute9}</p>
                <strong>{config.ValueAttribute9}</strong>
                <p>{config.PercentageAttribute9}</p>
                
                </div>
              <div className="attribute">
              <p>{config.TypeAttribute10}</p>
                <strong>{config.ValueAttribute10}</strong>
                <p>{config.PercentageAttribute10}</p>
                
                </div>
              <div className="attribute">
              <p>{config.TypeAttribute11}</p>
                <strong>{config.ValueAttribute11}</strong>
                <p>{config.PercentageAttribute11}</p>
                
                </div>
              <div className="attribute">
              <p>{config.TypeAttribute12}</p>
                <strong>{config.ValueAttribute12}</strong>
                <p>{config.PercentageAttribute12}</p>
                
                </div>
              <div className="attribute">
              <p>{config.TypeAttribute13}</p>
                <strong>{config.ValueAttribute13}</strong>
                <p>{config.PercentageAttribute13}</p>
                
                </div>
              <div className="attribute">
              <p>{config.TypeAttribute14}</p>
                <strong>{config.ValueAttribute14}</strong>
                <p>{config.PercentageAttribute14}</p>
                
                </div>
              <div className="attribute">
              <p>{config.TypeAttribute15}</p>
                <strong>{config.ValueAttribute15}</strong>
                <p>{config.PercentageAttribute15}</p>
                
                
                
                
         
                
          
            
                
              

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
     
   
    </>
  );
};

export default MintTab;

