class Data{ 
    
      static getApiData() { 
		  return fetch('https://apiv2.bitcoinaverage.com/constants/exchangerates/local')
          .then(
            (response) => {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
              return response.json();      
            }
          )
          .catch((err) => {
            console.log('Fetch Error :-S', err);
          });
      }
      
    }
    
    export default Data;

 