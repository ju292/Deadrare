import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'BAXC #1929';
export const NFTRank = '221';              //Rank :
export const NFTScore ='458';                // Score:
export const price = '0.5';    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/Qmf9DdY4tzgU3JEBe8TE88X2uD5pJfAYZRdLvXruRiF1uw/3581.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Hat';
export const ValueAttribute1 = 'TheKing';
export const PercentageAttribute1 = '0.19%';

export const TypeAttribute2 = 'Earrings';
export const ValueAttribute2 = 'GoldSkull';
export const PercentageAttribute2 = '3.32%';

export const TypeAttribute3 = 'Mouth';
export const ValueAttribute3 = 'SayWah';
export const PercentageAttribute3 = '3.47%';

export const TypeAttribute4 = 'Clothes';
export const ValueAttribute4 = 'XHoodie';
export const PercentageAttribute4 = '4.48%';

export const TypeAttribute5 = 'Eyes';
export const ValueAttribute5 = 'Bored';
export const PercentageAttribute5 = '7.09%';

export const TypeAttribute6 = 'Fur';
export const ValueAttribute6 = 'Sky';
export const PercentageAttribute6 = '8.38%';

export const TypeAttribute7 = 'Background';
export const ValueAttribute7 = 'Lime';
export const PercentageAttribute7 = '11.30%';

export const TypeAttribute8 = 'sunglass';
export const ValueAttribute8 = 'Rainbow Glasses';
export const PercentageAttribute8 = '25%';

export const TypeAttribute9 = 'shoe';
export const ValueAttribute9 = 'Hogye West Shoes Blacks';
export const PercentageAttribute9 = '27%';











// DETAILS 

export const OwnerAddress = 'erd1prdxgxymx5ux8dq3flat8fgwx8knwyepewles8wynrkpha786puq96ppdk';
export const CollectionIdentifier = 'BAXC-cdf74d';
export const TokenIdentifier = 'BAXC-cdf74d-0789';
export const CreatorAddress = 'erd1qqqqqqqqqqqqqpgqengxksed64chl3zrxc5fjl97cz9nunmkys5sxf69aa';
export const ArtistRoyalties = '10%';
export const SaleFee = '2%';
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
