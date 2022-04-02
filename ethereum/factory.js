import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xB03Ch7bB7a6691FCCB65305B2F681fE5F0b44d3f'
);

export default instance;
