import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0xa452620E22Db9C7b46F0B6E40a28fdC10442dc9f"
);

export default instance;