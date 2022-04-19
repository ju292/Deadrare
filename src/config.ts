import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq5uldx5e2tdda4fwys0xtkraten2slsz30eqqgetdfd';
export const NFTName = 'Elrond Apes #7080';
export const NFTRank = '3609';              //Rank :
export const NFTScore ='66';                // Score:
export const price = 0.01;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmRP9FVznm1xxa3FEsDENXhafRDaRWY6LKQdg8GygHNHKw/2582.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Red';
export const ValueAttribute1 = 'Background';
export const PercentageAttribute1 = '9,1%'

export const TypeAttribute2 = 'Type';
export const ValueAttribute2 = 'Basic Blue';
export const PercentageAttribute2 = '25%'

export const TypeAttribute3 = 'Eyes';
export const ValueAttribute3 = 'No Glasses';
export const PercentageAttribute3 = '46%'

export const TypeAttribute4 = 'Mouth';
export const ValueAttribute4 = 'Party Blower';
export const PercentageAttribute4 = '4,1%'

export const TypeAttribute5 = 'Earring';
export const ValueAttribute5 = 'Punk';
export const PercentageAttribute5 = '27%'

export const TypeAttribute6 = 'Hat';
export const ValueAttribute6 = 'Alien Headband';
export const PercentageAttribute6 = '4,7%'


// DETAILS 

export const OwnerAddress = 'erd1qqqqqqqqqqqqqpgq7gma4udjeh3mwuq4lmk7wccgh0tenxu6yv5qc2csfy';
export const CollectionIdentifier = 'EAPES-8f3c1f';
export const TokenIdentifier = 'EAPES-8f3c1f-1538';
export const CreatorAddress = 'erd1qqqqqqqqqqqqqpgq7gma4udjeh3mwuq4lmk7wccgh0tenxu6yv5qc2csfy';
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
