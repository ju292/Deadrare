import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'MKR1st #99';
export const NFTRank = '3';              //Rank :
export const NFTScore ='611';                // Score:
export const price = 2;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmTzNi8m7XVBuhDkmZWyEi1pawJfkdmr5D8iZGsTQwvAcA/99.mp4';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Background';
export const ValueAttribute1 = 'Desert';
export const PercentageAttribute1 = '11%';

export const TypeAttribute2 = 'Body';
export const ValueAttribute2 = 'Verypery Gold';
export const PercentageAttribute2 = '2.5%';

export const TypeAttribute3 = 'Chair';
export const ValueAttribute3 = 'Gold';
export const PercentageAttribute3 = '0.85%';

export const TypeAttribute4 = 'Engine';
export const ValueAttribute4 = 'Goldbot';
export const PercentageAttribute4 = '1.00%';

export const TypeAttribute5 = 'Floor';
export const ValueAttribute5 = 'OrangepathsFloor';
export const PercentageAttribute5 = '3.4%';

export const TypeAttribute6 = 'Wheels';
export const ValueAttribute6 = 'Gold';
export const PercentageAttribute6 = '12%';










// DETAILS 

export const OwnerAddress = 'erd1yw39...3sglc0hr';
export const CollectionIdentifier = 'RACE-c06f4e';
export const TokenIdentifier = 'RACE-c06f4e-0389';
export const CreatorAddress = 'erd1qqqq...fq6kh3ju';
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
