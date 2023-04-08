import './App.css';
import Productlist from './components/ProductList';


function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"Phone", price:"25000", img:"oneplus.jpg"},{no:"2",name:"Car", price:"1500000", img:"honda.jpg"}]}/>
    </div>
  );
}

export default App;