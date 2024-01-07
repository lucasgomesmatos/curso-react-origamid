import { useReducer } from 'react';
import { Input } from './components/Input';
import { ActionTypes } from './reducer/actions';
import { reducer } from './reducer/reducer';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
  });

  console.log(state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'nome') {
      dispatch({
        type: ActionTypes.SET_NAME,
        payload: value,
      });
    }

    if (name === 'email') {
      dispatch({
        type: ActionTypes.SET_EMAIL,
        payload: value,
      });
    }
  };

  return (
    <div>
      <form>
        <Input
          label="Nome"
          id="nome"
          value={state.name}
          onChange={handleChange}
        />
        <Input
          label="E-mail"
          id="email"
          value={state.email}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
