import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'Salvadorian Ape #1145';
export const NFTRank = '20';              //Rank :
export const NFTScore ='415';                // Score:
export const price = 1.1;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmdCEkyaafqZgmeydXfyWmB71qhHf1WSyGmRtv1SzDFq31/2301.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Background';
export const ValueAttribute1 = 'pink gradient';
export const PercentageAttribute1 = '3,5%'

export const TypeAttribute2 = 'Ape';
export const ValueAttribute2 = 'brown';
export const PercentageAttribute2 = '15%'

export const TypeAttribute3 = 'Skin';
export const ValueAttribute3 = 'Blank';
export const PercentageAttribute3 = '75%'

export const TypeAttribute4 = 'Eyes';
export const ValueAttribute4 = 'sharingan rinnegan eyes';
export const PercentageAttribute4 = '2,4%'

export const TypeAttribute5 = 'Hat';
export const ValueAttribute5 = 'Blank';
export const PercentageAttribute5 = '30%'

export const TypeAttribute6 = 'Top';
export const ValueAttribute6 = 'hoodie Multicolor';
export const PercentageAttribute6 = '4,7%'

export const TypeAttribute7 = 'Mouth';
export const ValueAttribute7 = 'smile 1';
export const PercentageAttribute7 = '5,4%'

export const TypeAttribute8 = 'Accessories';
export const ValueAttribute8 = 'Blank';
export const PercentageAttribute8 = '70%'

export const TypeAttribute9 = 'Earrings';
export const ValueAttribute9 = 'Blank';
export const PercentageAttribute9 = '0,8%'


// DETAILS 

export const OwnerAddress = 'erd1pll5...wqff7wx5';
export const CollectionIdentifier = 'SAC-c60db0';
export const TokenIdentifier = 'SAC-c60db0-0479';
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
