import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'Nifty Rex #4996';
export const NFTRank = '5';              //Rank :
export const NFTScore ='';                // Score:
export const price = 3.5;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmaQPUqpiefbDHCHtdeW4MKLC2oorjmZwqcUGY2CJ1VyYr/4996.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Body';
export const ValueAttribute1 = 'Candle';
export const PercentageAttribute1 = '0.02%';

export const TypeAttribute2 = 'Tail';
export const ValueAttribute2 = 'Candle';
export const PercentageAttribute2 = '0.02%';

export const TypeAttribute3 = 'Shirt';
export const ValueAttribute3 = 'Candle';
export const PercentageAttribute3 = '0.02%';

export const TypeAttribute4 = 'Hat';
export const ValueAttribute4 = 'Candle';
export const PercentageAttribute4 = '0.02%';

export const TypeAttribute5 = 'Face';
export const ValueAttribute5 = 'Eyes';
export const PercentageAttribute5 = '0.02%%';

export const TypeAttribute6 = 'Eyes';
export const ValueAttribute6 = 'Candle';
export const PercentageAttribute6 = '0.02%';

export const TypeAttribute7 = 'Background';
export const ValueAttribute7 = 'Candle';
export const PercentageAttribute7 = '0.02%';








// DETAILS 

export const OwnerAddress = 'erd12yxv...7qen3jsx';
export const CollectionIdentifier = 'NIFTYREX-d8c812';
export const TokenIdentifier = 'NIFTYREX-d8c812-1384';
export const CreatorAddress = 'erd12yxv...7qen3jsx';
export const ArtistRoyalties = '7%';
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
