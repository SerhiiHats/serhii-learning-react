
const initialStore = {
   title: "Redux",
   list: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
   post :{
      postItems:[],
      loading: true,
   },
   toDoItemFromStore: {
      itemsFromStore: [],
      loading: false,
   }
}

export default initialStore;