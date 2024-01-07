import { UserContextProvider } from './UserContext';
import { Content } from './components/Content';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div>
      <UserContextProvider>
        <Header />
        <Content />
      </UserContextProvider>
    </div>
  );
};
