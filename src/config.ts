import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'GNOGONS #2301';
export const NFTRank = '8520';              //Rank :
export const price = 1.1;    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmdCEkyaafqZgmeydXfyWmB71qhHf1WSyGmRtv1SzDFq31/2301.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'POWER';
export const ValueAttribute1 = '60';
export const PercentageAttribute1 = '3,4%'

export const TypeAttribute2 = 'ATTACK';
export const ValueAttribute2 = '97';
export const PercentageAttribute2 = '8,7%'

export const TypeAttribute3 = 'DEFENSE';
export const ValueAttribute3 = '91';
export const PercentageAttribute3 = '8,0%'

export const TypeAttribute4 = 'SPEED';
export const ValueAttribute4 = '94';
export const PercentageAttribute4 = '24%'

export const TypeAttribute5 = 'INTELLIGENCE';
export const ValueAttribute5 = '89';
export const PercentageAttribute5 = '5,1%'

export const TypeAttribute6 = 'HEART';
export const ValueAttribute6 = '92';
export const PercentageAttribute6 = '7,7%'

export const TypeAttribute7 = 'BACKGROUND';
export const ValueAttribute7 = 'Pure Red';
export const PercentageAttribute7 = '7,0%'

export const TypeAttribute8 = 'CIRCLE';
export const ValueAttribute8 = 'Taupe';
export const PercentageAttribute8 = '8,2%'

export const TypeAttribute9 = 'ELEMENTAL';
export const ValueAttribute9 = 'Decay';
export const PercentageAttribute9 = '4,8%'

export const TypeAttribute10 = 'COLOR';
export const ValueAttribute10 = 'God of War';
export const PercentageAttribute10 = '7,8%'

export const TypeAttribute11 = 'EYES';
export const ValueAttribute11 = 'Charcoal';
export const PercentageAttribute11 = '12%'

export const TypeAttribute12 = 'SCALES';
export const ValueAttribute12 = 'Toxic';
export const PercentageAttribute12 = '21%'

export const TypeAttribute13 = 'CHEST';
export const ValueAttribute13 = 'Marine';
export const PercentageAttribute13 = '11%'

export const TypeAttribute14 = 'SPIKES';
export const ValueAttribute14 = 'Bones';
export const PercentageAttribute14 = '6,2%'

export const TypeAttribute15 = 'ARMOUR';
export const ValueAttribute15 = 'Mex';
export const PercentageAttribute15 = '4,0%'

export const TypeAttribute16 = 'HORN';
export const ValueAttribute16 = 'Shards of Darkness';
export const PercentageAttribute16 = '3,8%'

export const TypeAttribute17 = 'tags';
export const ValueAttribute17 = 'GNOGEN';
export const PercentageAttribute17 = '6,2%'




// DETAILS 

export const OwnerAddress = 'erd1mhf2...mqw3cj6v';
export const CollectionIdentifier = 'GNOGONS-73222b';
export const TokenIdentifier = 'GNOGONS-73222b-08fd';
export const CreatorAddress = 'erd16uvw...eqvnhkdn';
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
