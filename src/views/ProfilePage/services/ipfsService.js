import IPFS from 'ipfs-api';

const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export default async function (imageBuffer) {
    const addResult = await ipfs.files.add(imageBuffer);
    const ipfsHash = addResult[0].hash;
    return ipfsHash;
}