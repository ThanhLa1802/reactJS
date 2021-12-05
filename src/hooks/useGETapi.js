import { useEffect, useState } from 'react';
import axios from 'axios';

const useGETapi = (initialState, url, mapResponseToData) => {
  const [data, setData] = useState(initialState)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(()=>{
    let didCancel = false;
    setIsLoading(true);
    axios({
      url: url,
      method: 'GET'
    }).then(response => {
      if(!didCancel) {
        console.log(response)
        setData(mapResponseToData(response));
        setIsLoading(false);
      }
    }).catch( error => {
      setError(error.message || 'Something went wrong');
      setIsLoading(false);
    })
    return () => {
      didCancel = true;
    }
  }, [mapResponseToData, url]);
  
  return {
    data,
    isLoading,
    error
  }
  
}

export default useGETapi;
