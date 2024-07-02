const  apiKey = 'bfe9f7e3f5dcd73e06fd9a69'
const  url =  'https://v6.exchangerate-api.com/v6/'
const  fromCur = 'USD'
const  toCur = 'GBP'
const  amount = 100


const FetchData = async (apiKey,fromCur,toCur,amount) =>{

try{
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCur}/${toCur}/${amount}`);
    if(!response.ok){
      throw new Error('Failed to fetch conversion rate');
    }
    const data = await response.json()
     return data.conversion_rate;

     
  } catch(error){
    console.error('Error fetching conversion data:', error)
    throw error;

  }
}