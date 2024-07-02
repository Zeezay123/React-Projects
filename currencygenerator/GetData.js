

export const  GetData  =  async (apiKey, fromCur,toCur,amount) => {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCur}/${toCur}/${amount}`)
    const data = await response.json();

    return data.conversion_rate;


    

}


