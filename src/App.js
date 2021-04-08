import "./App.css";

import CreateSection from "./Components/Search/CreateSection";
import ProductList from "./Components/ProductList/ProductList";
import SearchProduct from "./Components/SearchProduct/SearchProduct";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventory Management</h1>
      </header>
      <section className="Section1">
        <CreateSection />
        <SearchProduct />
        <ProductList className="ProductList" />
      </section>
    </div>
  );
}

export default App;
