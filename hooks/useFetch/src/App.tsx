import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

interface Produto {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  interessados: boolean;
}

export const App = () => {
  const [produtoData, setProdutoData] = useState('p001');

  const {
    data: produtos,
    loading,
    error,
  } = useFetch<Produto[]>('https://data.origamid.dev/produtos');

  const produto = useFetch<Produto>(
    `https://data.origamid.dev/produtos/${produtoData}`,
    {
      cache: 'force-cache',
    },
  );

  if (error) return <p>{error}</p>;

  return (
    <div className=" container flex">
      <div>
        {loading && <p>Carregando...</p>}
        {produtos?.map((produto) => (
          <button onClick={() => setProdutoData(produto.id)} key={produto.id}>
            {produto.id}
          </button>
        ))}
      </div>

      <div>
        {produto.data && (
          <>
            <h1>Produto: {produto.data?.nome}</h1>
            <ul>
              <li>{produto.data?.id}</li>
              <li>{produto.data?.preco}</li>
              <li>{produto.data?.descricao}</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
