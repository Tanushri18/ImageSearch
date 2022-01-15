import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bHmDVmwZkiWbnr52mmh1Znug38R05eTavkvO8qVQ4Sg'
          }
        
});