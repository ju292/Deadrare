import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'Elrond Warrior #9130';
export const NFTRank = '16';              //Rank :
export const NFTScore ='9999';                // Score:
export const price = 1.1;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmdCEkyaafqZgmeydXfyWmB71qhHf1WSyGmRtv1SzDFq31/2301.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Tribe X';
export const ValueAttribute1 = 'The Shinobi';
export const PercentageAttribute1 = '0,01%';







// DETAILS 

export const OwnerAddress = 'erd164mc...4spwqwzl';
export const CollectionIdentifier = 'WARRIORZ-2f0986';
export const TokenIdentifier = 'WARRIORZ-2f0986-23AA';
export const CreatorAddress = 'erd1qqqq...5syn2ez7';
export const ArtistRoyalties = '9%';
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
