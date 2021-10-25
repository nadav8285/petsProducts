import Switches from './Switches'
import Header from './Header';
import CartContext from './Cart';
import './app.css'
function App() {
  return (
    <div className='App'>
      <CartContext>
        <Header />
        <Switches />
      </CartContext>




    </div>


  )
}

export default App;
