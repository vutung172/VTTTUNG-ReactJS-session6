import './App.css';
import Header from './header';
import Banner from './Banner';
import Main from './Page-Main';
import Product from './Product'; 
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Main/>
      <div className='single-product-area'>
        <div className='container'>
          <div className='row'>
            <Product img="img/product-1.jpg" price="899.00" discount="999.00"/>
            <Product img="img/product-2.jpg" price="799.00" discount="899.00"/>
            <Product img="img/product-3.jpg" price="699.00" discount="799.00"/>
            <Product img="img/product-4.jpg" price="599.00" discount="699.00"/>
            <Product img="img/product-1.jpg" price="899.00" discount="999.00"/>
            <Product img="img/product-2.jpg" price="799.00" discount="899.00"/>
            <Product img="img/product-3.jpg" price="699.00" discount="799.00"/>
            <Product img="img/product-4.jpg" price="599.00" discount="699.00"/>
            <Product img="img/product-1.jpg" price="899.00" discount="999.00"/>
            <Product img="img/product-2.jpg" price="799.00" discount="899.00"/>
            <Product img="img/product-3.jpg" price="699.00" discount="799.00"/>
            <Product img="img/product-4.jpg" price="599.00" discount="699.00"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
)
}

export default App
