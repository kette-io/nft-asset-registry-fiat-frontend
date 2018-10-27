import axios from 'axios'

export default async function (uniqueId) {
    
    const onlineTestUrl = `https://us-central1-kette-fiat-registry.cloudfunctions.net/getBike?uniqueId=${uniqueId}`;
    
    const response = await axios.get(onlineTestUrl);
 
    /*     
    const exampleResponseData = {ipfsImageHash: "QmbYqHgmD1fnPS8WvFL6BxE2yA85X3PCyE5ZzoVjcSaVwT", description: "Cool Camera 1"}
    */
    return response.data;
}