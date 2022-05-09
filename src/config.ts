import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'Elrond Ape #453';
export const NFTRank = '455';              //Rank :
export const NFTScore ='158';                // Score:
export const price = 1.5;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmTzNi8m7XVBuhDkmZWyEi1pawJfkdmr5D8iZGsTQwvAcA/350.mp4';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Background';
export const ValueAttribute1 = 'Dark';
export const PercentageAttribute1 = '16%';

export const TypeAttribute2 = 'Type';
export const ValueAttribute2 = 'Basic Red';
export const PercentageAttribute2 = '20%';

export const TypeAttribute3 = 'Eyes';
export const ValueAttribute3 = 'MetaScreen Love';
export const PercentageAttribute3 = '2.3%';

export const TypeAttribute4 = 'Mouth';
export const ValueAttribute4 = 'Candy Cane';
export const PercentageAttribute4 = '4.1%';

export const TypeAttribute5 = 'Hat';
export const ValueAttribute5 = 'Japanese Headband';
export const PercentageAttribute5 = '3.1%';

export const TypeAttribute6 = 'Special';
export const ValueAttribute6 = 'EGLD Gold Necklace';
export const PercentageAttribute6 = '2.0%';










// DETAILS 

export const OwnerAddress = 'erd1qqqq...6qjzhk63';
export const CollectionIdentifier = 'EAPES-8f3c1f';
export const TokenIdentifier = 'RACE-c06f4e-0389';
export const CreatorAddress = 'erd1qqqq...5qc2csfy';
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
