import React, { createContext, useReducer, useContext } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const userDataLayerValue = () => useContext(DataLayerContext);

