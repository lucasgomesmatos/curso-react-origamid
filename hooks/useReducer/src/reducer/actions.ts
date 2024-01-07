export enum ActionTypes {
  SET_NAME = 'SET_NAME',
  SET_EMAIL = 'SET_EMAIL',
}

export const setName = (name: string) => {
  return {
    type: ActionTypes.SET_NAME,
    payload: name,
  };
};

export const setEmail = (email: string) => {
  return {
    type: ActionTypes.SET_EMAIL,
    payload: email,
  };
};
