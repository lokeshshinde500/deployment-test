import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setProducts(result);
      setOriginalProducts(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <button
        type="button"
        onClick={() =>
          setProducts([...products].sort((a, b) => a.price - b.price))
        }
      >
        Low to High
      </button>
      <button
        type="button"
        onClick={() =>
          setProducts([...products].sort((a, b) => b.price - a.price))
        }
      >
        High to Low
      </button>
      <button type="button" onClick={() => setProducts(originalProducts)}>
        Normal
      </button>
      <section className="section-product py-10">
        <h2 className="text-center py-10 section-title">Our Products</h2>
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div className="w-5" key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
