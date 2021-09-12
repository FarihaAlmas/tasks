import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer gUUzeRz-sDjT4nDS_qAnq-L-xhmbzi2Ff4YwIMi_vObA3Jf19SZSj9sG1zv8J18nb0xH6u9RUjPUADvL0UP8G6zH9MB4HpDEPdWBT0AVixadMHfOkH0hxOFQPRF8YHYx'
  }
});
