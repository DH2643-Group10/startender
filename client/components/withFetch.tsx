import React, { useEffect, useState } from "react";
//fetch HoC used to fetch data
  
  function withFetch<T>(WrappedComponent: React.ComponentType<T>, requestUrl: string) {
    const WithFetch = (props: T) => {
      const [data, setData] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [isError, setIsError] = useState(false);
      
      useEffect(() => {
        if (requestUrl) fetchData(requestUrl);
      }, []);
      
      const fetchData = async (requestUrl: string) => {
        setIsLoading(true);
        setIsError(false);
        
        try {
          const response = await fetch(requestUrl);
          if (response.ok) {
            const data = await response.json();
  
            setIsLoading(false);
            setData(data);
          } else {
            throw new Error("Fetch request error");
          }
        } catch (err) {
          setIsLoading(false);
          setIsError(err);
        }
      };
  
      return (
        <WrappedComponent
          data={data}
          isLoading={isLoading}
          isError={isError}
          {...props}
          getData={(requestUrl: string) => fetchData(requestUrl)}
        />
      );
    };
  
    return WithFetch;
  }
  
  export default withFetch;