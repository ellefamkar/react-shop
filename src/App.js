import './App.css';
// context 
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <>
      <ProductContextProvider>
          hi
      </ProductContextProvider>
    </>
  );
}

export default App;


// installed 
// npm install axios react-router-domn@5.2.0