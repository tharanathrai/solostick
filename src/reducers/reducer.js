const INITIAL_STATE = {
  list: [{ id: 0, task: "", completed: false }],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            task: action.payload,
            completed: false,
          },
        ],
      };
    case "COMPLETE_TASK":
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        list: state.list.filter((item) => item.completed === false),
      };
    default:
      return state;
  }
};
