// AppContext.js
import React, { useState, useEffect, useCallback } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
  const StoreWrapper = props => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
          setState(prevState => ({
            store: { ...prevState.store, ...updatedStore },
            actions: { ...state.actions }
          }))
      })
    );

    const initialState = {
      popularMovies: [],
      popularSeries: [],
    };

    const actions = {
      getMessage: async () => {
        // Tu función existente
      },
      setPopularMovies: useCallback(movies => {
        setState(prevState => ({
          ...prevState,
          store: {
            ...prevState.store,
            popularMovies: movies,
          },
        }));
      }, []),
      setPopularSeries: useCallback(series => {
        setState(prevState => ({
          ...prevState,
          store: {
            ...prevState.store,
            popularSeries: series,
          },
        }));
      }, []),
    };

    useEffect(() => {
      // Tu código de inicialización, si es necesario
    }, []);

    return (
      <Context.Provider value={{ store: { ...initialState, ...state.store }, actions }}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;
};

export default injectContext;
