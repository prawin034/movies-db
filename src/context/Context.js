import React, { useContext, useState } from 'react';
import Usehooks from '../hooks/usehooks';

export const Api_key = ` http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY} `;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setsearch] = useState('SPIDER');
  const { loading, error, data: movies } = Usehooks(`&s=${search}`);

  return (
    <AppContext.Provider
      value={{
        movies,
        loading,
        search,
        setsearch,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
