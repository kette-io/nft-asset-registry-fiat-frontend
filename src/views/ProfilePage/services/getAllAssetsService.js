import axios from 'axios'

export default async function () {
    
    const onlineTestUrl = "https://us-central1-kette-fiat-registry.cloudfunctions.net/allAssets";
    const localUrl = "http://localhost:5000/kette-fiat-registry/us-central1/allAssets?offline=true"
    
    const response = await axios.get(onlineTestUrl);
 
    /*     
    const exampleResponseData = [
        {uniqueId: "uniqueId1", ipfsImageHash: "QmbYqHgmD1fnPS8WvFL6BxE2yA85X3PCyE5ZzoVjcSaVwT", description: "Cool Camera 1"},
        {uniqueId: "uniqueId3", ipfsImageHash: "QmUytL2QcF4pkevxNbPko5SoSMxa1sog3hf4kDQSmbe1zU", description: "Cool Red Bike "},
        {uniqueId: "uniqueId4", ipfsImageHash: "QmTPm3dmbpjFzUKs7iptDMZYaJE8uMTbfTCs8EkcrJK4ej", description: "Cool Blue Bike"}
    ]
    */
    return response.data;
}