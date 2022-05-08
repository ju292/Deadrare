import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'MKR1st #350';
export const NFTRank = '2';              //Rank :
export const NFTScore ='716';                // Score:
export const price = 2;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmTzNi8m7XVBuhDkmZWyEi1pawJfkdmr5D8iZGsTQwvAcA/350.mp4';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Background';
export const ValueAttribute1 = 'Desert';
export const PercentageAttribute1 = '9.7%';

export const TypeAttribute2 = 'Body';
export const ValueAttribute2 = 'OrangePaths';
export const PercentageAttribute2 = '1.9%';

export const TypeAttribute3 = 'Chair';
export const ValueAttribute3 = 'Gray Gold';
export const PercentageAttribute3 = '2.3%';

export const TypeAttribute4 = 'Engine';
export const ValueAttribute4 = 'WhitePaths';
export const PercentageAttribute4 = '1.9%';

export const TypeAttribute5 = 'Floor';
export const ValueAttribute5 = 'Ruby';
export const PercentageAttribute5 = '4.0%';

export const TypeAttribute6 = 'Wheels';
export const ValueAttribute6 = 'Orangepaths';
export const PercentageAttribute6 = '0.19%';










// DETAILS 

export const OwnerAddress = 'erd12nfa...tqjecr6m';
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
