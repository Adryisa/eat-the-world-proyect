import { useContext, createContext, useState } from 'react';
import { getRecipeByName } from 'services/apiServices';
import { useHistory } from 'react-router-dom';

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const history = useHistory();

  const handleSubmit = (e, input) => {
    e.preventDefault();
    getRecipeByName(input).then((data) => setList(data));
    history.push('/recipes');
  };

  const value = {
    list,
    handleSubmit,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);
