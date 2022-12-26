import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'BAXC #5984';
export const NFTRank = '1956';              //Rank :
export const NFTScore ='78';                // Score:
export const price = '4.75';    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/Qmf9DdY4tzgU3JEBe8TE88X2uD5pJfAYZRdLvXruRiF1uw/4809.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Clothes';
export const ValueAttribute1 = 'EGLD Priest';
export const PercentageAttribute1 = '1.26%';

export const TypeAttribute2 = 'Eyes';
export const ValueAttribute2 = 'Sinner';
export const PercentageAttribute2 = '6.17%';

export const TypeAttribute3 = 'Mouth';
export const ValueAttribute3 = 'ShavedPipe';
export const PercentageAttribute3 = '0.87%';

export const TypeAttribute4 = 'Fur';
export const ValueAttribute4 = 'Grey';
export const PercentageAttribute4 = '3.95%';

export const TypeAttribute5 = 'Background';
export const ValueAttribute5 = 'Snow';
export const PercentageAttribute5 = '12.06%';

export const TypeAttribute6 = 'Earrings';
export const ValueAttribute6 = 'GoldCross';
export const PercentageAttribute6 = '2.14%';













// DETAILS 

export const OwnerAddress = 'erd1ek9npfzqzvh9gnrnxdley93aucmvfvr69znnqunc5900v4cfz0eqsxj4nx';
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
