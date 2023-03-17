import { useEffect, useState } from 'react';
export const Api_key = ` http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY} `;
const Usehooks = (urlparams) => {
  const [data, setdata] = useState([]);
  //LOADING
  const [loading, setloading] = useState(true);
  //ERROR
  const [error, seterror] = useState({ show: false, msg: '' });

  const fetchMovies = async (url) => {
    setloading(true);
    try {
      const Response = await fetch(url);
      const data = await Response.json();

      if (data.Response === 'True') {
        setdata(data.Search || data);
        setloading(false);
        seterror({ show: false, msg: '' });
      } else {
        seterror({ show: true, msg: data.Error });
      }
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchMovies(`${Api_key}${urlparams}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlparams]);
  return {
    loading,
    error,
    data,
  };
};

export default Usehooks;
