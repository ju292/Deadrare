import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'Piglet #326';
export const NFTRank = '857';              //Rank :
export const NFTScore ='32';                // Score:
export const price = 2;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmTzNi8m7XVBuhDkmZWyEi1pawJfkdmr5D8iZGsTQwvAcA/350.mp4';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'background';
export const ValueAttribute1 = 'black';
export const PercentageAttribute1 = '25%';

export const TypeAttribute2 = 'body';
export const ValueAttribute2 = 'body';
export const PercentageAttribute2 = '100%';

export const TypeAttribute3 = 'shirt';
export const ValueAttribute3 = 'prison shirt';
export const PercentageAttribute3 = '28%';

export const TypeAttribute4 = 'pant';
export const ValueAttribute4 = 'diaper';
export const PercentageAttribute4 = '24%';

export const TypeAttribute5 = 'chain';
export const ValueAttribute5 = 'no chain';
export const PercentageAttribute5 = '35%';

export const TypeAttribute6 = 'eye';
export const ValueAttribute6 = 'High Eyes';
export const PercentageAttribute6 = '28%';

export const TypeAttribute7 = 'mouth';
export const ValueAttribute7 = 'tongue normal';
export const PercentageAttribute7 = '21%';

export const TypeAttribute8 = 'sunglass';
export const ValueAttribute8 = 'Rainbow Glasses';
export const PercentageAttribute8 = '25%';

export const TypeAttribute9 = 'shoe';
export const ValueAttribute9 = 'Hogye West Shoes Blacks';
export const PercentageAttribute9 = '27%';











// DETAILS 

export const OwnerAddress = 'erd12xun...hs3jyhjt';
export const CollectionIdentifier = 'PIGLETHH-7357ca;
export const TokenIdentifier = 'PIGLETHH-7357ca-0146';
export const CreatorAddress = 'erd1qqp6...rqk2pcss';
export const ArtistRoyalties = '10%';
export const SaleFee = '5%';
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
