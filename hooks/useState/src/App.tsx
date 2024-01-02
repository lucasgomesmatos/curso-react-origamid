import { useEffect, useState } from 'react';

function user() {
  return {
    nome: 'Lucas',
    idade: 25,
  };
}

type User = ReturnType<typeof user>;

export const App = () => {
  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 1000);
  }, []);

  return (
    <div>
      {data === null ? (
        <>Carregando...</>
      ) : (
        <>
          <div>{data.nome}</div>
          <div>{data.idade}</div>
        </>
      )}
    </div>
  );
};
