
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addITEM_creator = (v) => {
  return {
    type: ADD_ITEM,
    payload: v
  }
}

export const removeITEM_creator = () => {
  return {
    type: REMOVE_ITEM,
  }
}