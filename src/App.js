import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';

// context 
import ProductContextProvider from './context/ProductContextProvider';

// component 
import Shop from './components/Shop';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <ProductContextProvider>
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Shop} />
            <Redirect to="/products" />
          </Switch>
      </ProductContextProvider>
    </>
  );
}

export default App;


// installed 
// npm install axios react-router-domn@5.2.0