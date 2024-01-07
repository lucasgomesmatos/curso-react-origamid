import { ActionTypes, setEmail, setName } from './actions';

interface StateProps {
  name: string;
  email: string;
}

type ActionProps = ReturnType<typeof setName | typeof setEmail>;

export const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case ActionTypes.SET_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case ActionTypes.SET_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }

    default:
      return state;
  }
};
