


const  apiKey = 'bfe9f7e3f5dcd73e06fd9a69';


export const FetchData = async (apiKey,fromCur,toCur,amount) =>{
    const response = await fetch(`https://v6.exchangerate-api.com/v6/bfe9f7e3f5dcd73e06fd9a69/pair/${fromCur}/${toCur}/${amount}`)
    const data = await response.json();

    return data;

}

