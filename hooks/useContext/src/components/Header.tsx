import { useUser } from '../UserContext';

export const Header = () => {
  const { data } = useUser();

  if (!data) return null;
  return <h1>{data.nome}</h1>;
};
