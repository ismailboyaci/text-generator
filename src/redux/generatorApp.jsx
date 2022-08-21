

const CHANGE_NUMBER = "CHANGE_NUMBER";
const CHANGE_TYPE = "CHANGE_TYPE";


export function changeNumber(parasNumber) {
  return {
    type: CHANGE_NUMBER,
    payload: parasNumber,
  };
}
export function changeType(parasType) {
  return {
    type: CHANGE_TYPE,
    payload: parasType,
  };
}


const initalState = {
  data: [],
  parasNumber: 4,
  parasType: "html",
};



export default function reducer(state = initalState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CHANGE_NUMBER:
    let numberState = Object.assign({},state,{parasNumber:action.payload})
    return numberState;

    default:
        return state;
}
  
}
