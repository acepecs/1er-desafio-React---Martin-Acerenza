
import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import ItemListContainer from './Components/ItemListContainer';


const App = () => {
  return (
    <>
    <div className="App">
     <h1>Granja organica</h1>
     <hr/>
     <Navbar></Navbar>
     <ItemListContainer></ItemListContainer>
    </div>
    <h2>
      Productos 
    </h2>
    {/*productos("miel", "Precio: $800")*/}
    <Products name="miel" price="Precio: $800"/>
    {/*productos("azucar mascabo","Precio: $500")*/}
    <Products name="azucar mascabo" price="Precio: $500"/>
    <div>
      Formas de pago
    </div>
    </>
  );
}

export default App;
