import { useEffect, useState } from 'react';
import { Input } from './components/Input';

interface Vendas {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  parcelas: number | null;
  data: string;
}

export const App = () => {
  const [data, setData] = useState({
    inicio: '',
    fim: '',
  });

  const [response, setResponse] = useState<Vendas[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  async function getData(inicio: string, final: string) {
    const response = await fetch(
      `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
    );
    const json = await response.json();
    setResponse(json);
  }

  useEffect(() => {
    if (data.inicio && data.fim) {
      getData(data.inicio, data.fim);
    }
  }, [data]);

  return (
    <div>
      <Input onChange={handleChange} label="Início" id="inicio" type="date" />
      <Input onChange={handleChange} label="Fim" id="fim" type="date" />

      <ul>
        {response &&
          response.map((venda) => (
            <li key={venda.id}>
              {venda.nome} -{' '}
              {venda.preco.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </li>
          ))}
        {response.length === 0 && <li>Nenhum dado encontrado</li>}
      </ul>
    </div>
  );
};
