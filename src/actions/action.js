export const ADD_TASK = "ADD TASK";
export const COMPLETE_TASK = "COMPLETE TASK";
export const DELETE_TASK = "DELETE TASK";

export const add = (text) => {
  return { type: ADD_TASK, payload: text };
};

export const complete = (id) => {
  return { type: COMPLETE_TASK, payload: id };
};

export const deleteTask = () => {
  return { type: DELETE_TASK };
};
