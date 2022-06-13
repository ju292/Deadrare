import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge =
  'https://bridge.walletconnect.org';
export const walletConnectDeepLink = 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/';




export const NFTContract = 'erd1qqqqqqqqqqqqqpgq32payvmle5ewfaqv9kgyct7medxlwazpvnnsl7afwf';
export const NFTName = 'ElrondApes #17';
export const NFTRank = '685';              //Rank :
export const NFTScore ='148';                // Score:
export const price = '6.9';    // IN EGLD
export const NFTMediaLink = 'https://media.elrond.com/nfts/asset/QmRP9FVznm1xxa3FEsDENXhafRDaRWY6LKQdg8GygHNHKw/17.png';             // the link for the image (media.elrond.etc)

// ATTRIBUTES

export const TypeAttribute1 = 'Background';
export const ValueAttribute1 = 'black';
export const PercentageAttribute1 = '16%';

export const TypeAttribute2 = 'Type';
export const ValueAttribute2 = 'Basic Red';
export const PercentageAttribute2 = '20%';

export const TypeAttribute3 = 'Eyes';
export const ValueAttribute3 = 'No Glasses';
export const PercentageAttribute3 = '46%';

export const TypeAttribute4 = 'Mouth';
export const ValueAttribute4 = 'Basic';
export const PercentageAttribute4 = '44%';

export const TypeAttribute5 = 'Earring';
export const ValueAttribute5 = 'Banana';
export const PercentageAttribute5 = '1.0%';

export const TypeAttribute6 = 'Special';
export const ValueAttribute6 = 'EGLD Wood...';
export const PercentageAttribute6 = '2.8%';

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

export const OwnerAddress = 'erd145ytwmcnvzl0hekeh8t0a6wlwe7julrghpa9terxa5avg2nh3u9qsafqsd';
export const CollectionIdentifier = 'EAPES-8f3c1f';
export const TokenIdentifier = 'EAPES-8f3c1f-12';
export const CreatorAddress = 'erd1qqqq...5qc2csfy';
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
