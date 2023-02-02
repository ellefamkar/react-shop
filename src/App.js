import './App.css';

// context 
import ProductContextProvider from './context/ProductContextProvider';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <ProductContextProvider>
          <Shop />
      </ProductContextProvider>
    </>
  );
}

export default App;


// installed 
// npm install axios react-router-domn@5.2.0