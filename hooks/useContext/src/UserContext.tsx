import { PropsWithChildren, createContext, useContext } from 'react';
import { useFetch } from './hooks/useFetch';

interface UserProps {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: 'baixa' | 'media' | 'alta';
  };
}

interface IUserContext {
  data: UserProps | null;
  loading: boolean;
}

const UserContext = createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useContext deve estar dentro do Provider');
  return context;
};

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading } = useFetch<UserProps>(
    'https://data.origamid.dev/usuarios/1',
  );

  return (
    <UserContext.Provider
      value={{
        data,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
