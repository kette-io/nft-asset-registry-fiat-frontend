import axios from 'axios'

export default async function () {

    const onlineTestUrl = "https://us-central1-kette-fiat-registry.cloudfunctions.net/price";
    //const localUrl = "http://localhost:5000/kette-fiat-registry/us-central1/price?offline=true"
    
    const response = await axios.get(onlineTestUrl);

    /*     
    const exampleResponseData = {priceInEuro: 0.7680385}
    */
   
    return response.data.priceInEuro;
}