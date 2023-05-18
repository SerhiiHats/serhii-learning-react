const initialStore = {
  title: "Redux",
  list: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
  countForFuncComp: 0,

  postsFromStore: {
    postItems: [],
    loading: true,
  },

  toDoItemFromStore: {
    itemsToDoFromStore: [],
    loading: false,
  },

  counterFR: {
    count: 0,
    arrayOfColor: ["red", "black", "green"],
    index: 1,
    visible: true,
    timeUpdate: 0
  },


}

export default initialStore;