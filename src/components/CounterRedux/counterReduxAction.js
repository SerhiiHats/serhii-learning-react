export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const RND = "RND";

export const IncActCreator = () => {
  return {
    type: INCREMENT
  }
}

export const DecActCreator = () => {
  return {
    type: DECREMENT
  }
}

export const ResetActCreator = () => {
  return {
    type: RESET
  }
}

export const RndActCreator = ()=>{
  return {
    type: RND
  }
}


