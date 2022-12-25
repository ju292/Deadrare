import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'BAXC #5984';
export const NFTRank = '1956';              //Rank :
export const NFTScore ='78';                // Score:
export const price = '5';    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/Qmf9DdY4tzgU3JEBe8TE88X2uD5pJfAYZRdLvXruRiF1uw/3198.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Clothes';
export const ValueAttribute1 = 'Astronaut';
export const PercentageAttribute1 = '0.50%';

export const TypeAttribute2 = 'Eyes';
export const ValueAttribute2 = '3D';
export const PercentageAttribute2 = '3.14%';

export const TypeAttribute3 = 'Mouth';
export const ValueAttribute3 = 'Rage';
export const PercentageAttribute3 = '3.61%';

export const TypeAttribute4 = 'Fur';
export const ValueAttribute4 = 'Cream';
export const PercentageAttribute4 = '8.59%';

export const TypeAttribute5 = 'Background';
export const ValueAttribute5 = 'Peach';
export const PercentageAttribute5 = '11.26%';

export const TypeAttribute6 = 'Earrings';
export const ValueAttribute6 = 'PearlStrass';
export const PercentageAttribute6 = '12.34%';













// DETAILS 

export const OwnerAddress = 'erd1ry55usd8hjyk37mf85a9ev586l94rvrda90nzl6c4z8ytq8z9vws672yk8';
export const CollectionIdentifier = 'EAPES-8f3c1f';
export const TokenIdentifier = 'EAPES-8f3c1f-1ef3';
export const CreatorAddress = 'erd1qqqqqqqqqqqqqpgq7gma4udjeh3mwuq4lmk7wccgh0tenxu6yv5qc2csfy';
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
