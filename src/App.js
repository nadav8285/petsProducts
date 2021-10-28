import Switches from './Switches'
import Header from './Header';
import CartContext from './Cart';
import './app.css'
import OrderIdProvider from './SearchField';
function App() {
  return (
    <div className='App'>
      <OrderIdProvider>
        <CartContext>
          <Header />
          <Switches />
        </CartContext>
      </OrderIdProvider>





    </div>


  )
}

export default App;
