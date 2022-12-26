import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'BAXC #6196';
export const NFTRank = '347';              //Rank :
export const NFTScore ='95';                // Score:
export const price = '8.5';    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/Qmf9DdY4tzgU3JEBe8TE88X2uD5pJfAYZRdLvXruRiF1uw/4809.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Clothes';
export const ValueAttribute1 = 'LeatherX';
export const PercentageAttribute1 = '0.30%';

export const TypeAttribute2 = 'Eyes';
export const ValueAttribute2 = 'BoredAviator';
export const PercentageAttribute2 = '3.46%';

export const TypeAttribute3 = 'Mouth';
export const ValueAttribute3 = 'SayL';
export const PercentageAttribute3 = '3.46%';

export const TypeAttribute4 = 'Fur';
export const ValueAttribute4 = 'Sky';
export const PercentageAttribute4 = '8.38%';

export const TypeAttribute5 = 'Background';
export const ValueAttribute5 = 'Melon';
export const PercentageAttribute5 = '12.29%';

export const TypeAttribute6 = 'Earrings';
export const ValueAttribute6 = 'PearlStrass';
export const PercentageAttribute6 = '12.34%';













// DETAILS 

export const OwnerAddress = 'erd106chdu3wknj8d743ktezsr2f262vvaf3qd88xkn68ysd86dwxqkskhs2qp';
export const CollectionIdentifier = 'BAXC-cdf74d';
export const TokenIdentifier = 'BAXC-cdf74d-Oc6d';
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
