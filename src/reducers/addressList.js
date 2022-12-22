import { SET_ADDRESS_LIST } from "../action";

const initialState = {
  addresses: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESS_LIST: 
      return { ...state, addresses: action.payload.addressList };
    
    default:
      return state;
  }
};

export const addressesSelector = (store) => store.address.addresses;
