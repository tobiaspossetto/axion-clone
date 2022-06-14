
import './App.css';
import { ChakraProvider, Stack, theme } from '@chakra-ui/react'
import Nav from './components/Nav';
import Carrousel from "./components/Carrousel"
import Footer from './components/Footer';
function App() {
  return (
    <ChakraProvider theme={theme}>
    <Stack  className="App">
      <Nav/>
     <Footer/>
    </Stack>
    </ChakraProvider>
  );
}

export default App;
