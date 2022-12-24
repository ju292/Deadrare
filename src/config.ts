import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'ElrondApes #7922';
export const NFTRank = '8412';              //Rank :
export const NFTScore ='84';                // Score:
export const price = '7';    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmUBFTnxZpaM7xrJ62Z9kNi3dfQwEWPQhthsnXdLEjJhDb/7922.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Background';
export const ValueAttribute1 = 'Red';
export const PercentageAttribute1 = '9.1%';

export const TypeAttribute2 = 'Type';
export const ValueAttribute2 = 'Platinum';
export const PercentageAttribute2 = '12%';

export const TypeAttribute3 = 'Eyes';
export const ValueAttribute3 = 'Steampunk';
export const PercentageAttribute3 = '5.2%';

export const TypeAttribute4 = 'Mouth';
export const ValueAttribute4 = 'Basic';
export const PercentageAttribute4 = '44%';

export const TypeAttribute5 = 'Clothes';
export const ValueAttribute5 = 'Overall';
export const PercentageAttribute5 = '3.6%';

export const TypeAttribute6 = 'Special';
export const ValueAttribute6 = 'Clown Nose';
export const PercentageAttribute6 = '6.2%';













// DETAILS 

export const OwnerAddress = 'erd1f5vmpsygws7g9g2gns6j25n50p7qz0uz9tyg9wfk0k7fl7qqarpshrlpkm';
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
