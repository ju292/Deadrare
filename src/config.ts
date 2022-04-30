import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'ElrondApes #3620';
export const NFTRank = '358';              //Rank :
export const NFTScore ='165';                // Score:
export const price = 3.5;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmRP9FVznm1xxa3FEsDENXhafRDaRWY6LKQdg8GygHNHKw/3620.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Background';
export const ValueAttribute1 = 'Dark';
export const PercentageAttribute1 = '16%';

export const TypeAttribute2 = 'Type';
export const ValueAttribute2 = 'Platinium';
export const PercentageAttribute2 = '12%';

export const TypeAttribute3 = 'Eyes';
export const ValueAttribute3 = 'No Glasses';
export const PercentageAttribute3 = '46%';

export const TypeAttribute4 = 'Mouth';
export const ValueAttribute4 = 'Basic';
export const PercentageAttribute4 = '44%';

export const TypeAttribute5 = 'Clothes';
export const ValueAttribute5 = 'Space Synthetic Jacket..';
export const PercentageAttribute5 = '4,4%';

export const TypeAttribute6 = 'Hat';
export const ValueAttribute6 = 'Welding Helmet';
export const PercentageAttribute6 = '1,6%';

export const TypeAttribute7 = 'Hat';
export const ValueAttribute7 = 'Welding Helmet';
export const PercentageAttribute7 = '1,6%';

export const TypeAttribute8 = 'Special';
export const ValueAttribute8 = 'Romania Flag';
export const PercentageAttribute8 = '1,7%';








// DETAILS 

export const OwnerAddress = 'erd1qawd...dqwk6862';
export const CollectionIdentifier = 'SAC-c60db0';
export const TokenIdentifier = 'WSAC-c60db0-0398';
export const CreatorAddress = 'erd1qqqq...5smq4yfh';
export const ArtistRoyalties = '10%';
export const SaleFee = '3%';
export const ListingFee = 'Free !';












export const network: Dapp.NetworkType = {                // DONT FORGET TO CHANGE HERE IF YOU WANT TO USE ON MAINNET
  id: "mainnet",
  name: "Mainnet",
  egldLabel: "EGLD",
  walletAddress: "https://wallet.elrond.com/",
  apiAddress: "https://api.elrond.com/",
  gatewayAddress: "https://gateway.elrond.com",
  explorerAddress: "http://explorer.elrond.com/",
};
