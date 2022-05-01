import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'Salvadorian Ape #49';
export const NFTRank = '420';              //Rank :
export const NFTScore ='168';                // Score:
export const price = 2;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmRkHxLNnrUYpErMxQvhZwQ3XHvF6LNPhw9AXeZDMtLrTC/696.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Background';
export const ValueAttribute1 = 'Purple';
export const PercentageAttribute1 = '9.2%';

export const TypeAttribute2 = 'Ape';
export const ValueAttribute2 = 'grad 2';
export const PercentageAttribute2 = '1.3%';

export const TypeAttribute3 = 'Skin';
export const ValueAttribute3 = 'Blank';
export const PercentageAttribute3 = '74%';

export const TypeAttribute4 = 'Eyes';
export const ValueAttribute4 = 'normal eyes';
export const PercentageAttribute4 = '18%';

export const TypeAttribute5 = 'Hat';
export const ValueAttribute5 = 'yellow durag';
export const PercentageAttribute5 = '3.8%';

export const TypeAttribute6 = 'Top';
export const ValueAttribute6 = 'tie black';
export const PercentageAttribute6 = '2.8%';

export const TypeAttribute7 = 'Mouth';
export const ValueAttribute7 = 'normal';
export const PercentageAttribute7 = '12%';

export const TypeAttribute8 = 'Accessories';
export const ValueAttribute8 = 'blank';
export const PercentageAttribute8 = '68%';

export const TypeAttribute9 = 'earrings';
export const ValueAttribute9 = 'blank';
export const PercentageAttribute9 = '';







// DETAILS 

export const OwnerAddress = 'erd1ve7l...5s3nzpmc';
export const CollectionIdentifier = 'SAC-c60db0';
export const TokenIdentifier = 'SAC-c60db0-31';
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
