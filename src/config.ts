import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'Salvadorian Ape #920';
export const NFTRank = '13';              //Rank :
export const NFTScore ='545';                // Score:
export const price = 4;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmRkHxLNnrUYpErMxQvhZwQ3XHvF6LNPhw9AXeZDMtLrTC/532.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Background';
export const ValueAttribute1 = 'Purple';
export const PercentageAttribute1 = '9,2%';

export const TypeAttribute2 = 'Ape';
export const ValueAttribute2 = 'White';
export const PercentageAttribute2 = '0,24%';

export const TypeAttribute3 = 'Skin';
export const ValueAttribute3 = 'Blank';
export const PercentageAttribute3 = '75%';

export const TypeAttribute3 = 'Eyes';
export const ValueAttribute3 = 'tired eyes';
export const PercentageAttribute3 = '13%';

export const TypeAttribute4 = 'Hat';
export const ValueAttribute4 = 'cowboy hat';
export const PercentageAttribute4 = '4,1%';

export const TypeAttribute5 = 'Top';
export const ValueAttribute5 = 'tanktop black';
export const PercentageAttribute5 = '4,0%';

export const TypeAttribute6 = 'Mouth';
export const ValueAttribute6 = 'smoking cigar with..';
export const PercentageAttribute6 = '2,0%';

export const TypeAttribute7 = 'Accessories';
export const ValueAttribute7 = 'Blank';
export const PercentageAttribute7 = '69%';

export const TypeAttribute7 = 'Earrings';
export const ValueAttribute7 = 'Blank';
export const PercentageAttribute7 = '';








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
