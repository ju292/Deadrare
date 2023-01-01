import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'BAXC #9213';
export const NFTRank = '200';              //Rank :
export const NFTScore ='431';                // Score:
export const price = '20';    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/Qmf9DdY4tzgU3JEBe8TE88X2uD5pJfAYZRdLvXruRiF1uw/1964.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Clothes';
export const ValueAttribute1 = 'XHoodie';
export const PercentageAttribute1 = '6.1%';

export const TypeAttribute2 = 'Earrings';
export const ValueAttribute2 = 'PearlChain';
export const PercentageAttribute2 = '0.32%';

export const TypeAttribute3 = 'Eyes';
export const ValueAttribute3 = 'Depressed';
export const PercentageAttribute3 = '1.98%';

export const TypeAttribute4 = 'Fur';
export const ValueAttribute4 = 'Purple';
export const PercentageAttribute4 = '1.82%';

export const TypeAttribute5 = 'Background';
export const ValueAttribute5 = 'Peach';
export const PercentageAttribute5 = '11.26%';

export const TypeAttribute6 = 'Hat';
export const ValueAttribute6 = 'TheKing';
export const PercentageAttribute6 = '0.19%';

export const TypeAttribute7 = 'Mouth';
export const ValueAttribute7 = 'BoredTongue';
export const PercentageAttribute7 = '1.76%';













// DETAILS 

export const OwnerAddress = 'erd1h873wrc6x2vzrvhke58350y4sua0r5eglhn5vhdg929uy662lalq95z9se';
export const CollectionIdentifier = 'BAXC-cdf74d';
export const TokenIdentifier = 'BAXC-cdf74d-23fd';
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
