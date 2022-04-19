import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq5uldx5e2tdda4fwys0xtkraten2slsz30eqqgetdfd';
export const NFTName = 'Elrond Apes #7080';
export const NFTRank = '3609';              //Rank :
export const NFTScore ='66';                // Score:
export const price = 0.01;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmRP9FVznm1xxa3FEsDENXhafRDaRWY6LKQdg8GygHNHKw/1748.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'y';
export const ValueAttribute1 = 'Tribal';
export const PercentageAttribute1 = '16%'

export const TypeAttribute2 = 'Background';
export const ValueAttribute2 = 'Tribal';
export const PercentageAttribute2 = '16%'

export const TypeAttribute3 = 'Background';
export const ValueAttribute3 = 'Triballe';
export const PercentageAttribute3 = '18%'

export const TypeAttribute4 = 'Background';
export const ValueAttribute4 = 'Tribal';
export const PercentageAttribute4 = '16%'

export const TypeAttribute5 = 'Background';
export const ValueAttribute5 = 'Tribal';
export const PercentageAttribute5 = '16%'

export const TypeAttribute6 = 'Background';
export const ValueAttribute6 = 'Tribal';
export const PercentageAttribute6 = '16%'


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
