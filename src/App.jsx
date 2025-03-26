import ProductList from "./componenets/ProductList";
import { useFetch } from "./hooks/useFetch";
import YourCart from "./componenets/YourCart";
import { Navbar } from "./pages/Navbar";

function App() {
  const { data, error, isPending } = useFetch("http://localhost:3000/data");

  return (
    <div className=" grid-container">
      <Navbar />
      {data && <ProductList data={data} isPending={isPending} />}
    </div>
  );
}

export default App;
