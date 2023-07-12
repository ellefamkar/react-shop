import { Switch, Route, Redirect} from 'react-router-dom';

// Context 
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

// Component 
import Shop from './components/Shop';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider> 
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Shop} />
            <Redirect to="/products" />
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;


// installed 
// npm install axios react-router-domn@5.2.0   --> installs both axios and react-router-dom