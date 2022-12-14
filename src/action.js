export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REG = "REG";
export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
export const GET_ADDRESS_LIST = "GET_ADDRESS_LIST";
export const SET_ROUTE = 'SET_ROUTE';
export const GET_ROUTE = 'GET_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });

export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

export const regs = (email, name, password) => ({
  type: REG,
  payload: { email, name, password },
});

export const setAddressList = (addressList) => ({
  type: SET_ADDRESS_LIST,
  payload: { addressList },
});
export const getAddressList = () => ({ type: GET_ADDRESS_LIST });

export const setRoute = (route) => ({type: SET_ROUTE, payload: {route}});
export const getRoute = (address1, address2) => ({type: GET_ROUTE, payload: {address1, address2}});
export const removeRoute = () => ({type: REMOVE_ROUTE});
