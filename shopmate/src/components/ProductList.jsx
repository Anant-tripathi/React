import { useState } from "react";
import { useFetch } from "../hooks/useFetch.jsx";
// import Loading from "../assets/loading.gif";

export const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");

  const { data: products, loading, error } = useFetch(url, { content: "ABC" }); //rename data to products
  console.log(products);
  // const [counter, setCounter] = useState(0);
  // console.log(products);

  // const fetchProducts = useCallback(async () => {
  //   const response = await fetch(url);
  // const data = await response.json();
  // setProducts(data);
  // }, [url]);
  //
  //The use callback hook is a memoized callback function which allows us to
  //isolate resource intensive functions so that they will not re-render on
  //every update. it only runs when one of its dependencies update. it returns
  //a memoized function and similar one is useMemo which returns a memoized
  //variable. Here, the useCallback hook is used to safely evaluate the
  //fetchProducts function on the useeffect hook without triggering an
  //infinite loop because it returns a memoized or cached function so the
  //address remains the same during consecutive calls
  //This complication is used only when the function to be called in useEffect
  //is defined outside it

  // useEffect(() => {
  //   fetchProducts();
  //   console.log("-");
  // }, [fetchProducts]);
  //adding a function as a dependency will result in infinite loop as
  //there is nothing to compare it to whereas an array or an object has
  //comparision possibilities as two instances have same memory locations
  //but such is not the case with functions as they have different memory
  //locations each time they are called

  // The first parameter is the functionality that needs to be run when the
  // useEffect function is triggered and the second parameter[] states when
  // the above functionality is to be triggered. For example if a state or
  // variable is provided then the function executed everytime that variable
  // changes or updates
  // It is a function that is called once and can be called multiple times
  // only when provided with a dependency in the second argument
  //
  // the output is two console logs because it is called once initially and
  // then again because to the useEffect and fetch()

  // useEffect(() => {
  //   console.log(counter);
  // }, [counter]);

  // <button onClick={() => setCounter(counter + 1)}>{counter}</button>
  //           <img src={Loading} alt="Loading data..." />

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:8000/products")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
        >
          In Stock
        </button>
      </div>
      {loading && <p className="loading">Loading Products...</p>}

      {error && <p>{error}</p>}

      {products &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name">{product.name}</p>
            <p className="info">
              <span>${product.price}</span>
              <span className={product.in_stock ? "instock" : "unavailable"}>
                {product.in_stock ? " Pieces In Stock" : "Unavailable"}
              </span>
            </p>
          </div>
        ))}
    </section>
  );
};
