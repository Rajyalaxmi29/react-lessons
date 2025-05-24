import Product from "./Product";
import Variant from "./Variant";

export default function App1() {
  
  return (
    <>
      <h1>This is App1 Component</h1>
      <Product name="Laptop" price={45000} />
      <Variant />
      
    </>
  );
}