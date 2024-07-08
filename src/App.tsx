import { Button } from "./components/ui/button";
import { useGetAllProductsQuery } from "./redux/features/product/productApi";

function App() {
  const { data: product } = useGetAllProductsQuery("668c391b0189857c50460402");
  console.log(product);
  return (
    <>
      <Button>Product length: {product?.data?.length}</Button>
    </>
  );
}

export default App;
