export const CHANGE_TITLE = "CHANGE_TITLE";
// export const changeTitle ={
//   type: CHANGE_TITLE,
// }

export const changeTitle = (v) => {
  return {
    type: CHANGE_TITLE,
    payload: v
  }
}