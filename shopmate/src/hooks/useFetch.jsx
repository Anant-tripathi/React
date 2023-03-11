//Whenever creating a custom hook the starting of it must contain the word
//'use'
//
//creating a generic fetch method
import { useEffect, useState, useRef } from "react";
//the below hook is generic which means that it can be used to fetch any kind
//of data ranging from objects and arrays to web pages, etc as long as a url
//is passed to it
export const useFetch = (url, _body) => {
  const [data, setData] = useState(null);
  //initialized to null because it makes it feasable to verify if api is not
  //working for example, an empty array, object and array can be differentiated
  //from the initial state but if it is empty then nothing is there to compare

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const body = useRef(_body);
  // the useRef hook is used to create a reference to the _body object
  // and this is necessary because objects have different memory on every
  // run and using them in dependency array of useEffect causes an infinite
  // rendering loop

  // const controller = new AbortController();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const response = await fetch(url, { signal: controller.signal, body });
        const response = await fetch(url);
        if (!response.ok) {
          //for handling error in url passing
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setLoading(false);
        setData(result);
        setError("");
        console.log("----");
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchData();
    // return () => controller.abort();
    // }, [url, body]);
    // the body is an object which causes an infinite loop
  }, [url]);

  return { data, loading, error };
};
