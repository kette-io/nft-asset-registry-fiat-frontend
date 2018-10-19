import axios from 'axios'

export default async function (ipfsHash, description, uniqueId, bikeOwnerAccount, stripeToken, secret) {

    const data = { stripeToken, ipfsHash, description, uniqueId, bikeOwnerAccount, ketteSecret: secret, offline: false };

    const localUrl = "http://localhost:5000/kette-fiat-registry/us-central1/registerBike";
    const onlineTestUrl = "https://us-central1-kette-fiat-registry.cloudfunctions.net/registerBike"
    
    const response = await axios.post(
        onlineTestUrl,
        JSON.stringify(data),
        { headers: { 'content-type': 'application/json' } }
    )

    return { hash: response.data.hash }
}