import './App.css';
import { GlobalState } from './context/GlobalState';
import { ChakraBaseProvider } from '@chakra-ui/react';
import Home from './pages/Home';

function App() {

  return (
    <ChakraBaseProvider>
      <GlobalState>
        <Home />
      </GlobalState>
    </ChakraBaseProvider>
  );
}

export default App;
